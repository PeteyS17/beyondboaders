import { useEffect, useState } from "react";
import "../css/destinations.css";
import Destination from "../components/Destination";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://server-destinations.onrender.com"
    : "http://localhost:3001";

export default function Destinations() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/destinations`).then(r => r.json()).then(setItems);
  }, []);

  return (
    <main id="destinations" className="main-content">
      <h2>Find your dream destination</h2>
      <section className="dest-grid">
  {items.map(d => (
    <Destination
      key={d._id}
      apiBase={API_BASE}
      title={d.title}
      location={d.location}
      category={d.category}
      duration={d.duration}
      budget={d.budget}
      blurb={d.blurb}
      img_name={d.img_name}
    />
  ))}
</section>


    </main>
  );
}