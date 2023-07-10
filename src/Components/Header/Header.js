import React from "react";
import classes from './Header.module.css'
import { Navbar,Container } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    
    <Navbar  className={classes.header} bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <HeaderCartButton/>
      </Container>
    </Navbar>
  );
};

export default Header;