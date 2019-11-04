import React from "react";
import './About.css';
import Image from './img/marginalia-robots-and-drones.png'
// import { withRouter} from "react-router-dom"

class About extends React.Component{
    render(){
        return(
            <section className="section-about" id="about-me">
                
                <p class="description-text">¡Hola!, 
                <br></br>mi nombre es Berenice Ramos.<br></br>
                    Soy una desarrolladora Front-End y<br></br>
                    amante de la ciencia y la tecnología.<br></br>
                    Mi hobbie es investigar temas que <br></br>
                    me apasionen y sean <br></br>
                    utiles para la sociedad.<br></br>
                    Pienso que la Data será muy<br></br>
                    útil para este fin.<br></br>
                    Mi sueño es usar la física y la programación<br></br>
                    para desarrollo de la investigación.<br></br><br></br><br></br></p>
                <img src={Image} alt="imagen abstracta" id="robot"></img>
            </section>
        )
    }
}

export default About;