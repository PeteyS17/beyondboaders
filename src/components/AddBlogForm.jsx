import { useState } from "react";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

const AddBlogForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    excerpt: "",
    body: "",
  });
  const [imgFile, setImgFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgFile) {
      setError("Please select an image file.");
      return;
    }

    const payload = new FormData();
    for (let key in formData) {
      payload.append(key, formData[key]);
    }
    payload.append("img", imgFile);

    try {
      const res = await fetch(`${API_BASE}/api/blogs`, {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
      }

      const data = await res.json();
      onAdd(data);
      setFormData({ title: "", author: "", excerpt: "", body: "" });
      setImgFile(null);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      <h3>Add a Blog</h3>
      {error && <p className="error-msg">{error}</p>}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog title"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="text"
        name="excerpt"
        value={formData.excerpt}
        onChange={handleChange}
        placeholder="Short excerpt"
        required
      />
      <textarea
        name="body"
        value={formData.body}
        onChange={handleChange}
        placeholder="Full blog content"
        required
      />
      <input type="file" accept="image/*" onChange={handleFileChange} required />
      <button type="submit">Post Blog</button>
    </form>
  );
};

export default AddBlogForm;
