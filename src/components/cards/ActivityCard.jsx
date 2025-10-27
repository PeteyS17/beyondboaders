import "../../css/activities.css";

const ActivityCard = ({ title, image }) => {
  return (
    <div className="activity card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-body">
        <h4 className="activity-title">{title}</h4>
      </div>
    </div>
  );
};

export default ActivityCard;
