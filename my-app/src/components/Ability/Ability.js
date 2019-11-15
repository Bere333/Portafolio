import React from 'react';
import './Ability.css';
// import Github from './img/github-2.png'
// import Git from './img/git.png'
// import Js from './img/javascript.png'
// import ReactImage from './img/react-icon-png-7.png'
// import FirebaseImage from './img/firebase.png'
// import NpmImage from './img/npm-512.png'
// import NodeImage from './img/nodejs.png' 
// import JestImage from './img/jest-logo.png'



import Avatar from './img/aprendiendo.png'



class Aptitudes extends React.Component{
    render(){
        return(
            <section className="section-ability">
                <p className="text-ability">Aptitudes</p>

                <div className="images-ability">
                <div className = "soft">
                    <ul className="list-ability">
                        <li>Habilidades blandas:</li>
                        <hr className="line-soft"></hr>
                        <br></br>
                        <li>- Autoaprendizaje</li>
                        <li>- Dar y recibir feedback</li>
                        <li>- Trabajo coolaborativo</li>
                        <li>- Autogestión</li>
                        <li>- Asertividad efectiva</li>
                        <li>- Comunicación</li>
                        <li>- Curiosidad</li>
                        <li>- Proactividad</li>
                        <li>- Y mucho más...</li>
                    </ul>
                    </div>
                    <div>
                        <img src={Avatar} alt="Github" className="avatar"></img>
                    </div>
                    <div className="tec">
                    <ul className="list-ability">
                        <li>Habilidades técnicas:</li>
                        <hr className="line-soft"></hr>
                        <br></br>
                        <li>-Github</li>
                        <li>-Git</li>
                        <li>-JavaScript Vanilla</li>
                        <li>-React</li>
                        <li>-Firebase</li>
                        <li>-npm</li>
                        <li>-Node.js</li>
                        <li>-Jest.js</li>
                        <li>-Linux</li>
                    </ul>
                    </div>
                    
                    
                </div>
                
            </section>
        )
    }
}

export default Aptitudes;