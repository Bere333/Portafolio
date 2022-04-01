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
                <section className="section-main" id="home">
                    <nav className="navbar-home">
                        {/* <div className="box-menu"> */}
                            <ul className="list-menu">
                                <li className="li-menu"><a href="#home">Inicio</a></li>
                                <li className="li-menu"><a href="#aboutme">Sobre mi</a></li>
                                <li className="li-menu"><a href="#myproyects">Experiencia</a></li>
                                <li className="li-menu"><a href="#myability">Aptitudes</a></li>
                                <li className="li-menu"><a href="#mycontact">Contacto</a></li>
                            </ul>
                        {/* </div> */}
                    </nav>
                    <div></div>

                    <div>
                        <br></br>
                        <br></br>
                        <Typical></Typical>
                    </div>
                <div className="arrow">
                        <a href="#aboutme"><i class="fas fa-chevron-down"></i></a>
                </div>
                </section>
                <div id ="aboutme">
                    <About/>
                </div >
                <div id="myproyects">
                    <Proyects/>
                </div>
                <div id="myability">
                    <Ability/>
                </div>
                <div id="mycontact">
                    <Contact/>
                </div>
            </article>
        )
    }
}

export default Home;