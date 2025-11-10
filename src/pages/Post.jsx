import { useParams, Link } from "react-router-dom";
import "../css/blog.css";
import { posts } from "../data/posts";

const Post = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="main-content">
        <h2>Post not found</h2>
        <p><Link to="/blog">← Back to Travel Blog</Link></p>
      </main>
    );
  }

  return (
    <main className="main-content">
      <article className="post-detail panel">
        <h2 className="post-title">{post.title}</h2>

        <div className="post-detail-row">
          <img src={post.image} alt={post.title} className="post-detail-img" />

          <div className="post-detail-body">
            {post.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <p className="post-author">— {post.author}</p>

            <p className="back-link">
              <Link to="/blog">← Back to Travel Blog</Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Post;