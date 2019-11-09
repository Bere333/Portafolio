import React from "react";
// import { withRouter} from "react-router-dom"
import './Home.css';
import About from '../About/About'
import Proyects from '../Proyects/Proyects';
import Typical from './Typical.js'

// import { Burger, Menu } from '../Burger/';



class Home extends React.Component{
    render(){
        return(
            <article>
            <section className="section-main">
               <Typical></Typical>
            </section>
                <About></About>
                <Proyects></Proyects>

            </article>
        )
    }
}

export default Home;