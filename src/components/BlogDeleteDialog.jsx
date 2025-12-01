const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const BlogDeleteDialog = ({ blog, onClose, onDelete }) => {
  const handleDelete = async () => {
    const res = await fetch(`${API_BASE}/api/blogs/${blog._id}`, {
      method: "DELETE"
    });

    if (res.ok) {
      onDelete(blog._id);
      onClose();
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h3>Delete "{blog.title}"?</h3>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BlogDeleteDialog;
