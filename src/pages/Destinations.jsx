
import "../css/destinations.css";
import chicagoImg from "../images/chicagohome.png";
import queensImg from "../images/queens.jpeg";
import londonImg from "../images/london1.jpeg";
import tokyoImg from "../images/tokyo.jpeg";
import coastImg from "../images/coastaltown.jpeg";
import mountainImg from "../images/mountvilage.jpeg";
import historicImg from "../images/oldtown.jpeg";
import louvreImg from "../images/louvrefr.jpeg";

const destinations = [
  { city: "Chicago", country: "Illinois, USA", image: chicagoImg },
  { city: "Queens", country: "New York, USA", image: queensImg },
  { city: "London", country: "England, UK", image: londonImg },
  { city: "Tokyo", country: "Japan", image: tokyoImg },
  { city: "Coastal Town", country: "Dominican Republic", image: coastImg },
  { city: "Mountain Village", country: "Smoky Mountains, USA", image: mountainImg },
  { city: "Historic City", country: "South Carolina", image: historicImg },
  { city: "The Louvre", country: "Paris, France", image: louvreImg },
];

function Destinations() {
  return (
    <main className="destinations-page">
      <h2 className="destinations-title">Find your dream destination</h2>

      <section className="destinations-grid">
        {destinations.map((dest, index) => (
          <article key={index} className="destination-card">
            <img src={dest.image} alt={dest.city} loading="lazy" />
            <div className="card-text">
              <h3>{dest.city}</h3>
              <p>{dest.country}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Destinations;
