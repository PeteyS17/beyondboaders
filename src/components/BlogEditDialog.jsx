import { useState } from "react";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const BlogEditDialog = ({ blog, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: blog.title,
    author: blog.author,
    excerpt: blog.excerpt,
    body: blog.body
  });

  const [imgFile, setImgFile] = useState(null);
  const [error, setError] = useState("");

  const validate = () => {
    if (formData.title.length < 3) return "Invalid title";
    if (formData.author.length < 2) return "Invalid author";
    if (formData.excerpt.length < 5) return "Invalid excerpt";
    if (formData.body.length < 10) return "Invalid body";
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const payload = new FormData();
    for (let k in formData) payload.append(k, formData[k]);
    if (imgFile) payload.append("img", imgFile);

    const res = await fetch(`${API_BASE}/api/blogs/${blog._id}`, {
      method: "PUT",
      body: payload
    });

    if (!res.ok) {
      const msg = await res.text();
      setError(msg);
      return;
    }

    const updated = await res.json();
    onUpdate(updated);
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h3>Edit Blog</h3>
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="title" value={formData.title} onChange={handleChange} />
          <input name="author" value={formData.author} onChange={handleChange} />
          <input name="excerpt" value={formData.excerpt} onChange={handleChange} />
          <textarea name="body" value={formData.body} onChange={handleChange} />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BlogEditDialog;
