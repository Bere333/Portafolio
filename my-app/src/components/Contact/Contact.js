import React from "react";
// import { withRouter} from "react-router-dom"
import './Contact.css';




class Contact extends React.Component{
    render(){
        return(
            <section className="section-contact">
               
                   <div className="made">
                       <p className="text-made">Hecho con <i class="fas fa-heart" title="Amor"></i>, <i class="fas fa-atom fa-spin" title="React"></i> y <i class="fas fa-code" title="Código"></i></p>
                   </div>

                   <div className="box-contact">
                        <p className="icons-contact" >
                            <a href="https://www.linkedin.com/in/berenice-ramos-6a5b39156/" targe="_blank" rel="alternate"><i className="fab fa-linkedin" title="LinkedIn"></i></a>
                            <a href="https://github.com/Bere333" targe="_blank" rel="noopener noreferrer"><i class="fab fa-github-square" title="Github"></i></a>
                            <a href="mailto:berenice_ramos0401@outlook.com" targe="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square" title="Correo"></i></a>
                        
    
                        </p>
                   </div>
               
            </section>
        )
    }
}

export default Contact;