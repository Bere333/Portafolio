import React from "react";
// import { withRouter} from "react-router-dom"
import './Contact.css';




class Contact extends React.Component{
    render(){
        return(
            <section className="section-contact">
               
                   <div className="made">
                       <p className="text-made">Hecho con <i class="fas fa-heart"></i> <i class="fas fa-atom fa-spin"></i> y <i class="fas fa-code"></i></p>
                   </div>

                   <div className="box-contact">
                    <p className="icons-contact" >
                       <i className="fab fa-linkedin"></i><i class="fab fa-github-square"></i><i class="fas fa-envelope-square"></i>
 
                    </p>
                   </div>
               
            </section>
        )
    }
}

export default Contact;