import React from "react";
// import { withRouter} from "react-router-dom"
import './Home.css';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';
import Typical from './Typical.js';
import Ability from '../Ability/Ability'
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
               <Typical></Typical>
            </section>
                <About></About>
                <Proyects></Proyects>
                <Ability></Ability>

            </article>
        )
    }
}

export default Home;