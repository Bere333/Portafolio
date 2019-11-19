import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';




const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="#home" tabIndex={tabIndex}  aria-hidden="true" onClick={() => setOpen(!open)}>Inicio</a>
      <a href="#aboutme" tabIndex={tabIndex}  aria-hidden="false" onClick={() => setOpen(!open)}>Sobre mi</a>
      <a href="#myproyects" tabIndex={tabIndex}  aria-hidden="true" onClick={() => setOpen(!open)}>Proyectos</a>
      <a href="#myability" tabIndex={tabIndex}  aria-hidden="true" onClick={() => setOpen(!open)}>Aptitudes</a>
      <a href="#mycontact" tabIndex={tabIndex}  aria-hidden="true" onClick={() => setOpen(!open)}>Contacto</a>
     
       
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu;