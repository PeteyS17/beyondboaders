import { useState } from "react";
import "../css/destinations.css";
import DestinationDialog from "./DestinationDialog";

export default function Destination({ apiBase, title, location, category, duration, budget, blurb, img_name }) {
  const [show, setShow] = useState(false);
  const imgUrl = `${apiBase}/${img_name}`;

  return (
    <>
      {show && (
        <DestinationDialog
          title={title}
          location={location}
          category={category}
          duration={duration}
          budget={budget}
          blurb={blurb}
          imgUrl={imgUrl}
          onClose={() => setShow(false)}
        />
      )}

      <article
        className="dest-card"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="dest-media">
          <img src={imgUrl} alt={title} loading="lazy" />
        </div>
        <div className="dest-body">
          <h3 className="dest-title">{title}</h3>
          <p className="dest-meta">{location}</p>
        </div>
      </article>
    </>
  );
}
