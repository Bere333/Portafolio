import React from "react";
// import { withRouter} from "react-router-dom"
import './Proyects.css';
import Slider from './Slider'



class Proyects extends React.Component{
    render(){
        return(
            <section className="section-proyects">
                <p className="text-proyects">Estos son proyectos que he realizado 
                <br></br>y me ha apasionado su realización:</p>
                <Slider></Slider>
            </section>
        )
    }
}

export default Proyects;