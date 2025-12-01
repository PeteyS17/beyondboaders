import { useEffect, useState } from "react";
import "../css/blog.css";
import AddBlogForm from "../components/AddBlogForm";
import PostCard from "../components/cards/PostCard";
import BlogEditDialog from "../components/BlogEditDialog";
import BlogDeleteDialog from "../components/BlogDeleteDialog";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs`);
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setErr("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleAdd = (newBlog) => {
    setPosts((prev) => [...prev, newBlog]);
    setShowAdd(false);
  };

  const handleUpdate = (updated) => {
    setPosts((prev) =>
      prev.map((b) => (b._id === updated._id ? updated : b))
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((b) => b._id !== id));
  };

  return (
    <main id="blog" className="main-content">
      <h2>Travel Stories & Highlights</h2>

      <button
        className="open-add-blog"
        onClick={() => setShowAdd(true)}
      >
        + Add Blog
      </button>

      {loading && <p>Loading…</p>}
      {err && <p className="blog-error">{err}</p>}

      <div className="post-list">
        {posts.map((p) => (
          <PostCard
            key={p._id}
            blog={p}
            apiBase={API_BASE}
            onEdit={() => setEditing(p)}
            onDelete={() => setDeleting(p)}
          />
        ))}
      </div>

      {showAdd && (
        <AddBlogForm
          onAdd={handleAdd}
          onClose={() => setShowAdd(false)}
        />
      )}

      {editing && (
        <BlogEditDialog
          blog={editing}
          onClose={() => setEditing(null)}
          onUpdate={handleUpdate}
        />
      )}

      {deleting && (
        <BlogDeleteDialog
          blog={deleting}
          onClose={() => setDeleting(null)}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default Blog;
