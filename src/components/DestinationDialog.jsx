import { useEffect } from "react";
import "../css/destinationDialog.css";

export default function DestinationDialog({ title, location, category, duration, budget, blurb, imgUrl, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose}>×</button>
        <img src={imgUrl} alt={title} className="dialog-img" />
        <div className="dialog-content">
          <h2>{title}</h2>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Budget:</strong> {budget}</p>
          <p>{blurb}</p>
        </div>
      </div>
    </div>
  );
}
