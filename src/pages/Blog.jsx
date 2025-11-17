import { useEffect, useState } from "react";
import "../css/blog.css";
import PostCard from "../components/cards/PostCard";
import AddBlogForm from "../components/AddBlogForm";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        if (!res.ok) throw new Error("Failed to load blogs");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleAdd = (newBlog) => {
    setPosts((prev) => [...prev, newBlog]);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return;
      }
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main id="blog" className="main-content">
      <h2>Travel Stories & Highlights</h2>

      <AddBlogForm onAdd={handleAdd} />

      {loading && <p>Loading…</p>}
      {err && <p className="blog-error">{err}</p>}

      <div className="post-list">
        {posts.map((p) => (
          <PostCard key={p._id} {...p}>
            {p.isUserBlog && (
              <button
                className="delete-blog"
                type="button"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            )}
          </PostCard>
        ))}
      </div>
    </main>
  );
};

export default Blog;
