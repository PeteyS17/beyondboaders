import "../css/destinations.css";
import CityCard from "../components/cards/CityCard";
import { allCities } from "../data/cities";

const Destinations = () => {
  return (
    <main id="destinations" className="main-content">
      <h2>Find your dream destination</h2>
      <div id="city-list" className="columns">
        {allCities.map((city) => (
          <CityCard
            key={city.name}
            name={city.name}
            image={city.image}
            meta={city.meta}
            description={city.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Destinations;