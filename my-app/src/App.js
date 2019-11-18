import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
// import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/'
import FocusLock from 'react-focus-lock';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/About/About';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <GlobalStyles /> */}
        
          <div ref={node}> 
          <FocusLock disabled={!open}>
            <div className="burger">
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            </div>
            <Menu open={open} setOpen={setOpen} id={menuId} cosa="Holi"/>
          </FocusLock>
          
          <Router basename={window.location.pathname || ""}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
            </Switch>
          </Router>
        </div>

        
        
      </>
    </ThemeProvider>
  );
}

export default App;
