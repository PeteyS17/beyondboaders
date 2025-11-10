import { useParams, Link } from "react-router-dom";
import { allPosts } from "../data/posts";
import "../css/blog.css";

export default function PostDetail() {
  const { slug } = useParams();
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="main-content">
        <div className="panel" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2>Post not found</h2>
          <p><Link to="/blog">← Back to Travel Blog</Link></p>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <section className="post-detail">
        <div className="panel post-detail-row">
          <img className="post-detail-img" src={post.image} alt={post.title} />
          <div>
            <h2 className="post-title">{post.title}</h2>
            {post.content
              .split("\n")
              .filter(Boolean)
              .map((para, i) => <p key={i}>{para.trim()}</p>)}
            <p className="post-by">— <span className="post-author">{post.author}</span></p>
            <p className="back-link"><Link to="/blog">← Back to Travel Blog</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
