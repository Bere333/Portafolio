import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        Inicio
      </a>
      <a href="/" tabIndex={tabIndex}>
        Sobre mi
        </a>
      <a href="/" tabIndex={tabIndex}>
        Proyectos
        </a>
        <a href="/" tabIndex={tabIndex}>
        Experimentos
        </a>
        <a href="/" tabIndex={tabIndex}>
        Contacto
        </a>
      
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;