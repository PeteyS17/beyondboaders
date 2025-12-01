const PostCard = ({ blog, apiBase, onDelete, onEdit }) => {
  const { title, author, excerpt, body, main_image, isUserBlog } = blog;
  const imgSrc = `${apiBase}/images/${main_image}`;

  return (
    <section className="panel post-card">
      <img src={imgSrc} alt={title} className="post-img" />

      <div className="post-content">
        <h3 className="post-heading">{title}</h3>
        <p className="post-author">{author}</p>
        
        <p className="post-excerpt">{excerpt}</p>

        <p className="post-body">{body}</p>

        {isUserBlog !== false && (
          <div className="blog-buttons">
            <button className="edit-blog" onClick={onEdit}>Edit</button>
            <button className="delete-blog" onClick={onDelete}>Delete</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostCard;
