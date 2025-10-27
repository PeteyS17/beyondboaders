import "../css/activities.css";
import ActivityCard from "../components/cards/ActivityCard";


import museumImg from "../images/chiartinstitute.jpeg";
import mountainTrailImg from "../images/mountvilage.jpeg";
import coastalBeachImg from "../images/beach1.jpeg";


const activities = [
  { title: "World Museum (Culture)", image: museumImg },
  { title: "Mountain Trail (Outdoors/Family)", image: mountainTrailImg },
  { title: "Coastal Beach (Relaxation/Food)", image: coastalBeachImg },
];

const Activities = () => {
  return (
    <main id="activities" className="main-content">
      <h2>Activities &amp; Attractions</h2>
      <p className="muted">
        Discover cultural landmarks, outdoor adventures, and relaxing escapes.
      </p>

      <hr className="divider" />

      <h3 className="filter-title">Filter by type</h3>
      <ul className="chips">
        <li className="chip chip-active">All</li>
        <li className="chip">Culture</li>
        <li className="chip">Outdoors</li>
        <li className="chip">Family</li>
        <li className="chip">Food &amp; Drink</li>
        <li className="chip">Relaxation</li>
      </ul>

      <div className="columns">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </main>
  );
};

export default Activities;
