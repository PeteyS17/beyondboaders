import "../css/blog.css";
import PostCard from "../components/cards/PostCard";
import { allPosts } from "../data/posts";

const Blog = () => {
  return (
    <main id="blog" className="main-content">
      <h2>Travel Stories & Highlights</h2>

      <div className="post-list">
        {allPosts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
