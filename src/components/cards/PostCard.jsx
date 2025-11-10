import { Link } from "react-router-dom";
import "../../css/blog.css";

export default function PostCard({ slug, title, author, image, excerpt }) {
  return (
    <Link to={`/blog/${slug}`} className="post-link" style={{ textDecoration: "none", color: "inherit" }}>
      <article className="panel post-card">
        <img className="post-img" src={image} alt={title} />
        <div className="post-content">
          <h3 className="post-heading">{title}</h3>
          <p className="post-excerpt">{excerpt}</p>
          <p className="post-by">— <span className="post-author">{author}</span></p>
        </div>
      </article>
    </Link>
  );
}
