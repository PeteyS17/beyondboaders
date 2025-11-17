const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const PostCard = ({ title, author, excerpt, main_image, body, children }) => {
  return (
    <div className="post-card">
      <img
        src={`${API_BASE}/images/${main_image}`}
        alt={title}
        className="post-img"
      />
      <div className="post-content">
        <h3>{title}</h3>
        <p className="post-author">By {author}</p>
        <p>{excerpt}</p>
        <p className="post-body">{body}</p>
        {children}
      </div>
    </div>
  );
};

export default PostCard;
