import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
// import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/'
// import FocusLock from 'react-focus-lock';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/About/About';
import Proyects from './components/Proyects/Proyects';
import Ability from './components/Ability/Ability';
import Contact from './components/Contact/Contact'

import './App.css';

import { NavLink } from "react-router-dom";
// import { Router} from "react-router-dom"
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  

  useOnClickOutside(node, () => setOpen(false));
  // const tabIndex = isHidden ? 0 : -1;
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <GlobalStyles /> */}
        
          <div ref={node}> 
          {/* <FocusLock disabled={!open}> */}
            <div className="burger">
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            </div>
          <Router basename={window.location.pathname || ""}>
            <Menu open={open} setOpen={setOpen} id={menuId} cosa="Holi">
            
          <NavLink to={"/"} >Inicio</NavLink>
          <NavLink to={"/about"}  >Sobre mi</NavLink>
          <NavLink to="/Proyectos" >Proyectos</NavLink>
          <NavLink to="/Aptitudes">Aptitudes</NavLink>
          <NavLink to="/Contacto" >Contacto</NavLink>
          
            
      
            </Menu>
          
            <Switch>
              <Route   exact={true} path="/" ><HomeRoute></HomeRoute></Route>
              <Route path="/about"><AboutMe></AboutMe></Route>
              <Route path="/Proyectos"><MyProyects></MyProyects></Route>
              <Route path="/Aptitudes"><MyAbility></MyAbility></Route>
              <Route path="/Contacto"><MyContact></MyContact></Route>
            </Switch>
          {/* </FocusLock> */}
          </Router>
        </div>

        
        
      </>
    </ThemeProvider>
  );
}
function HomeRoute() {
  return <Home></Home>;
}
function AboutMe(){
  return <About></About>
}
function MyProyects(){
  return <Proyects></Proyects>
}
function MyAbility(){
  return <Ability></Ability>
}
function MyContact(){
  return <Contact></Contact>
}
export default App;
