import React from 'react';
import './Ability.css';
import Learning from './img/aprendiendo.png';
import Avatar from './img/avataaars.png';



class Aptitudes extends React.Component{
    render(){
        return(
            <section className="section-ability">
                <p className="text-ability">APTITUDES</p>
                <div>
                    <img src={Avatar} alt="Avatar" className="avatar-bere"></img>

                </div>

                <div className="images-ability">
                    <br></br>
                <div className = "soft">
                    <ul className="list-ability">
                        <li style={{'color': '#EC8893'}}>Habilidades blandas:</li>
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
                        <li>- Investigación</li>
                        <li>- Y mucho más...</li>
                    </ul>
                    </div>
                    <div>
                        <img src={Learning} alt="Github" className="avatar"></img>
                    </div>
                    <div className="tec">
                    <ul className="list-ability">
                        <li style={{'color':'#D68CDC'}}>Habilidades técnicas:</li>
                        <hr className="line-soft"></hr>
                        <br></br>
                        <li>-JavaScript Vanilla</li>
                        <li>-React</li>
                        <li>-Redux</li>
                        <li>-Vue</li>
                        <li>-Vuex</li>
                        <li>-API REST`(fetch, axios)`</li>
                        <li>-Node.js</li>
                        <li>-Github</li>
                        <li>-Git</li>
                        <li>-Firebase</li>
                        <li>-npm</li>
                        <li>-Jest.js</li>
                        <li>-Linux</li>
                        <li>-Apache Server</li>
                        <li>-Apache Cordova</li>
                        <li>-Dialogflow</li>
                        <li>-Python</li>
                    </ul>
                    <br></br>
                    </div>
                    
                    
                </div>
                
            </section>
        )
    }
}

export default Aptitudes;