import { Link } from "react-router-dom";
import "../css/home.css";


import beach from "../images/beach2.png";
import chicagoImg from "../images/chicagohome.png";
import londonImg from "../images/london1.jpeg";
import tokyoImg from "../images/tokyo.jpeg";

const Home = () => {
  return (
    <main id="home" className="main-content">
     
      <section className="idea-img">
        <img src={beach} alt="Sunny beach with turquoise water and boardwalk" />
        <p>Find the right trip faster.</p>
      </section>

     
      <section className="idea">
        <h2>Plan trips with clarity, not clutter</h2>
        <p>
          Beyond Borders keeps choices simple and pages calm so you can focus on
          where to go, not where to look.
        </p>
      </section>

      {/* Top Destinations */}
      <section className="gallery columns">
        <Link className="tile tile--link" to="/destinations">
          <img src={chicagoImg} alt="Chicago skyline at dusk" loading="lazy" />
          <p>Chicago</p>
        </Link>
        <div className="tile">
          <img src={londonImg} alt="London skyline" loading="lazy" />
          <p>London</p>
        </div>
        <div className="tile">
          <img src={tokyoImg} alt="Tokyo city lights" loading="lazy" />
          <p>Tokyo</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
