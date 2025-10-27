import "../../css/cards.css";

const CityCard = ({ name, image, meta, description }) => {
  return (
    <div className="city-card card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        {meta && <p className="city-meta">{meta}</p>}
        {description && <p className="city-description">{description}</p>}
      </div>
    </div>
  );
};

export default CityCard;
