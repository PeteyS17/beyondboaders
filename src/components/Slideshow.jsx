import "../css/Slideshow.css";
import { useState, useEffect } from "react";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const importAll = (resource) => {
    return resource.keys().map(resource);
  };

  const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg|webp)$/)
  );

  const slideForward = () => {
    setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);
  };

  const slideBackward = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : images.length - 1);
  };

 
  return (
    <section id="slideshow">
      <img
        src={images[slideIndex]}
        alt={`Slide ${slideIndex + 1}`}
        className="slide-image"
      />
      <a
        className="arrow"
        id="left-arrow"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          slideBackward();
        }}
      >
        &lt;
      </a>
      <a
        className="arrow"
        id="right-arrow"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          slideForward();
        }}
      >
        &gt;
      </a>
    </section>
  );
};

export default Slideshow;
