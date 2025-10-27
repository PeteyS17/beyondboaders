import { Link } from "react-router-dom";
import "../../css/blog.css";

const PostCard = ({ slug, title, image, excerpt, author }) => {
  return (
    <article className="post-card panel">
      <img src={image} alt={title} className="post-img" />

      <div className="post-content">
        <h3 className="post-heading">{title}</h3>
        <p className="post-excerpt">{excerpt}</p>
        <p className="read-more">
          <Link to={`/blog/${slug}`}>Read more...</Link>
        </p>
        <p className="post-by">— {author}</p>
      </div>
    </article>
  );
};

export default PostCard;
