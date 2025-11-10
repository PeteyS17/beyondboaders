import { useState } from "react";
import "../css/contact.css";
import viewImg from "../images/arepas.jpeg";
import marketImg from "../images/streetmarket.jpeg";
import foodImg from "../images/tourist.jpeg";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Thanks! Your message was sent.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <main id="contact" className="main-content">
      <h2 className="center">About Beyond Borders</h2>
      <p className="center muted">
        <strong>Beyond Borders</strong> helps travelers find destinations, activities, and insider tips—fast.
      </p>

      <div className="about-tiles">
        <figure className="tile card">
          <img src={viewImg} alt="City lookout" />
          <figcaption>Iconic views, practical tips</figcaption>
        </figure>
        <figure className="tile card">
          <img src={marketImg} alt="Local market" />
          <figcaption>Local culture, real experiences</figcaption>
        </figure>
        <figure className="tile card">
          <img src={foodImg} alt="Local cuisine" />
          <figcaption>Local cuisines</figcaption>
        </figure>
      </div>

      <section className="contact-grid">
        <div className="contact-col">
          <h3>Our Location</h3>
          <div className="map card">
            <iframe
              title="Long Island City Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96730.04069499437!2d-73.999!3d40.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25929c9b4fdb7%3A0x9b6a0c2d3e6b9f8!2sLong%20Island%20City%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-col">
          <h3>Contact Us</h3>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="f7dbe5f3-ba73-4be0-8f3c-c65a9df2106a" />

            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>

          {status && <p className="center muted" style={{ marginTop: "8px" }}>{status}</p>}
        </div>
      </section>
    </main>
  );
};

export default Contact;
