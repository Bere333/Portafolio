import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import About from '../About/About'



const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
     <BrowserRouter>
          <Link to={"/"} tabIndex={tabIndex} ><About></About>}</Link>
          <Link to={"/about"} tabIndex={tabIndex} >Sobre mi</Link>
          <Link to="/Proyectos" tabIndex={tabIndex}>Proyectos</Link>
          <Link to="/Aptitudes" tabIndex={tabIndex}>Aptitudes</Link>
          <Link to="/Experimentos" tabIndex={tabIndex}>Experimentos</Link>
          <Link to="/Contacto" tabIndex={tabIndex}>Contacto</Link>
      </BrowserRouter>
      
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;