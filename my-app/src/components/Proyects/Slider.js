import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Imagen from './img/mirage-waiting.png';
import Chain from './img/chain.jpg';
import Fur from './img/Fur.png';
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
          cssEase: "linear",
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      return (
        <div>

        <Slider {...settings}>
{/*      
          <div>
          <img src={Imagen} alt="imagen abstracta" id="image-slider" ></img>
            
          <p className="text-pro">Proyectos</p>
            
          </div> */}
          <div>
            <img src={Chain} alt="imagen abstracta" id="image-slider" className="img-slider"></img>
            <p className="text-pro">Librería para encontrar links rotos</p>
          </div>
          <div>
            <img src={Fur} alt="imagen abstracta" id="image-slider" ></img>
            <p className="text-pro">Fur App: Red Social</p>
          </div>
          <div>
            <img src={Pan} alt="imagen abstracta" id="image-slider"></img>
            <p className="text-pro">Aplicación web para realizar pedidos<br></br>en un restaurant de comida rápida</p>
          </div>
         
         
        </Slider>
        </div>
      );
    }
  }

  export default SimpleSlider;