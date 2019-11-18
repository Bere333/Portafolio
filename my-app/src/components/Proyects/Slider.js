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
          speed: 1000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          // adaptiveHeight: true,
          // variableWidth: true,
          style:{ width: 280 },
          arrows:true,
          centerMode:true,
          initialSlide: 0,
          fade: true,
          responsive: [
            
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                style:{ width: 580 },
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
        <div className="box-slider">

        <Slider {...settings}>

          <div>
            {/* <div>
              <img src={Chain} alt="md-links" className=""></img>
            </div> */}
            
            <img src={Chain} alt="imagen abstracta"  ></img>

            <p className="text-pro">Librería para encontrar links rotos. <a href="https://github.com/Bere333/MEX008-FE-md-link.git">Ver</a></p>
            
          </div>
          <div >
            <img src={Fur} alt="imagen abstracta" ></img>
            <p className="text-pro">Fur App: aplicación web para amantes <br></br>de los animales. <a href="https://github.com/Bere333/FUR-App.git">Ver</a></p>
          </div>
          <div >
            <img src={Pan} alt="imagen abstracta"></img>
            <p className="text-pro">Aplicación web para realizar pedidos<br></br>en un restaurant de comida rápida. <a href="https://github.com/Bere333/Pandmonium.git">Ver</a></p>
          </div>
         
         
        </Slider>
        </div>
      );
    }
  }

  export default SimpleSlider;