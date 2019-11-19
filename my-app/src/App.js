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


import './App.css';


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
            
          
           
            
      
            </Menu>
          
            <Switch>
              <Route   exact={true} path="/" ><HomeRoute></HomeRoute></Route>
              
             
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
export default App;
