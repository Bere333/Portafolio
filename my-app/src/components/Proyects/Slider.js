import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagen from './img/mirage-waiting.png';
import Chain from './img/chain.jpg';
import Fur from './img/fur-readme.png';
import Pan from './img/pan.jpg';
import './Proyects.css';

class SimpleSlider extends React.Component {
    render() {
      const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1500,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      
      return (
        <div>

        <Slider {...settings}>
     
          <div>
          <img src={Imagen} alt="imagen abstracta" id="image-slider"></img>
            
          </div>
          <div>
          <img src={Chain} alt="imagen abstracta" id="image-slider"></img>
          </div>
          <div>
          <img src={Fur} alt="imagen abstracta" id="image-slider"></img>
          </div>
          <div>
          <img src={Pan} alt="imagen abstracta" id="image-slider"></img>
          </div>
         
         
        </Slider>
        </div>
      );
    }
  }

  export default SimpleSlider;