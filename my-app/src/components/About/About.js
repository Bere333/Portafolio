import React from "react";
import './About.css';
import Image from './img/marginalia-robots-and-drones.png'
// import { withRouter} from "react-router-dom"

class About extends React.Component{
    render(){
        return(
            <section className="section-about" id="about-me">
                
                
                <p className="description-text">¡Hola! 
                <br></br>Mi nombre es Berenice Ramos.<br></br>
                    Soy una desarrolladora Front-End, <br></br>
                    amante de la ciencia y la tecnología.<br></br>
                    Mi hobbie es investigar temas que <br></br>
                    me apasionen y sean <br></br>
                    útiles para la sociedad.<br></br>
                    Mi sueño es usar la física y la programación<br></br>
                    para desarrollo de la investigación y de la sociedad.<br></br><br></br><br></br></p>
                <img src={Image} alt="imagen abstracta" id="robot"></img>
            </section>
        )
    }
}

export default About;