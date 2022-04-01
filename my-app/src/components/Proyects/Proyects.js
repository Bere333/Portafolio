
import React from "react";
// import { withRouter} from "react-router-dom"
import './Proyects.css';
import Slider from './Slider'
// import Contact from '../Contact/Contact'



class Proyects extends React.Component{
    render(){
        return(
            <section className="section-proyects">
                <p className="text-proyects">Experiencia</p>
                <div className="slider-box">
                    <Slider/>
                </div>
               
            </section>
        )
    }
}

export default Proyects;