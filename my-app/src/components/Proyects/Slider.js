import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Imagen from './img/mirage-waiting.png';
 import Hermano from './img/preview_hermanomx.png';
import ApacheServer from './img/apacheServer.jpg';
import Chatbot from './img/chatbot.png';
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
          <div className="text-pro pa">
          <p>Estos son algunos proyectos <br></br>que he realizado de forma <br></br>individual y colaborativa.
          <br></br>Y se crearon durante mi anterior<br></br>empleo. <i class="fas fa-heart" title="Laboratoria"></i>
          </p>

          </div>

        <Slider {...settings}>

          <div>         
            <img src={Hermano} alt="imagen abstracta"  ></img>
            <p className="text-pro">HermanoMx: Aplicación híbrida para realizar pedidos a tiendas locales.</p>
          </div>
          <div >
            <img src={ApacheServer} alt="imagen abstracta" ></img>
            <p className="text-pro">AriesPagos: uso de directivas para agregar host <br></br>de aplicación web.</p>
          </div>
          <div >
            <img src={Chatbot} alt="imagen abstracta"></img>
            <p className="text-pro">Desarrollo de chatbot con <br></br>Dialogflow.</p>
          </div>
         
         
        </Slider>
        </div>
      );
    }
  }

  export default SimpleSlider;