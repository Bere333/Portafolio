import React from "react";
// import { withRouter} from "react-router-dom"
import './Proyects.css';
import Slider from './Slider'



class Proyects extends React.Component{
    render(){
        return(
            <section className="section-proyects">
                <p className="text-proyects">PROYECTOS</p>
                <div className="slider-box">
                <Slider></Slider>
                </div>
            </section>
        )
    }
}

export default Proyects;