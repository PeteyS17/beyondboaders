import { NavLink } from "react-router-dom";
import "../css/navigation.css";

export default function Navigation() {
  return (
    <nav id="main-nav">
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/destinations">Destinations</NavLink></li>
        <li><NavLink to="/activities">Activities</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}