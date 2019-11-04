import React from "react";
// import { withRouter} from "react-router-dom"
import './Home.css';
import About from '../About/About.js'

// import { Burger, Menu } from '../Burger/';



class Home extends React.Component{
    render(){
        return(
            <article>
            <section className="section-main">
                <div className="my-name">
                    <p className="front-end">Brenda Berenice Ramos Hernández<br></br>Front-End Development</p>
                </div>
            </section>
                <About></About>

            </article>
        )
    }
}

export default Home;