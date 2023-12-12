import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 2000,
    arrows: false,
  };

  const content = [
    
    "I'm a Freelancer❤️.",
    "I'm a Web Developer.",
    "I'm a Data Scientist😍.",
  ];

  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index} className="carousel-item">
          <p>{item}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
