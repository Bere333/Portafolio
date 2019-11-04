import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <BrowserRouter>
          <Link to="/">Inicio</Link>
          <Link to="/Sobre mi">Sobre mi</Link>
          <Link to="/Proyectos">Proyectos</Link>
          <Link to="/Experimentos">Experimentos</Link>
          <Link to="/Contacto">Contacto</Link>
      </BrowserRouter>
      
      
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;