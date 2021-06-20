import React, { Component } from 'react'
import{Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from "react-router-dom";

//import Insurance from "./Insurance";

//import Login from "./Login";



//import Admindashboard from './Admindashboard';

//import Addpolicy from "./Addpolicy";

//import Home from "./Home";

import Login from "./Login";

import UlistPolicy from './UlistPolicy';

import Cart from './Cart';

export default class HeaderComponent extends Component {
    render() {
        return (
            
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
            
              <Navbar.Brand href="#home">Policy Management System</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                 
                <Nav.Link as={Link} to={"/employees"}>Policy List</Nav.Link>
                  
                  <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>

                  <Nav.Link as={Link} to={"/ulistpolicy"}>UlistPolicy</Nav.Link>

                  <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Find a Policy"
        className="mr-sm-2"
        aria-label="Search"
      />
      <Button className="u-btn" variant="">Search</Button>
    </Form>
              </Navbar.Collapse>
           
          </Navbar>
            </div>
            
        )
    }
}
