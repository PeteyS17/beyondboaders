import CityCard from "../cards/CityCard";

export default function CityList({ cities = [] }) {
  return (
    <div className="grid3">
      {cities.map((c) => (
        <CityCard key={c.name} {...c} />
      ))}
    </div>
  );
}
