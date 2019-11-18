import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
// import { Link } from "react-router-dom";
// import { Router} from "react-router-dom";
// //  import About from '../About/About'



const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;


  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
     
     
       
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;