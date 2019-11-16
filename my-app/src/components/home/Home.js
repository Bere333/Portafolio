import React from "react";
// import { withRouter} from "react-router-dom"
import './Home.css';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';
import Typical from './Typical.js';
import Ability from '../Ability/Ability';
import Contact from '../Contact/Contact';
// import Navbar from '../Navbar/Navbar'


// import { Burger, Menu } from '../Burger/';



class Home extends React.Component{
    render(){
        return(
            <article>
            <section className="section-main">
                <div className="navbar-escritorio">
                    {/* <Navbar></Navbar> */}
                </div>
                <div>
                    <Typical></Typical>

                </div>
               <div className="arrow">
                    <i class="fas fa-chevron-down"></i>
               </div>
            </section>
                <About></About>
                <Proyects></Proyects>
                <Ability></Ability>
                <Contact></Contact>

            </article>
        )
    }
}

export default Home;