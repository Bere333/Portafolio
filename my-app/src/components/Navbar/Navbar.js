import React from "react";
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/Navbar';


class NavbarMenu extends React.Component{
    render(){
        return(
            <div>

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            
            </Form>
            </Navbar>
            </div>
        )
    }
}

export default NavbarMenu;