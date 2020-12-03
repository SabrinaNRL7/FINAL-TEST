import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <b.Navbar style={{backgroundColor: "#1D1D1D"}} expand="lg">
            <b.Navbar.Brand as={Link} to="/" style={{color: "#f6f6e9"}}>Football Matches</b.Navbar.Brand>
            <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <b.Navbar.Collapse id="basic-navbar-nav">
                <b.Nav className="mr-auto">
                <b.Nav.Link as={Link} to="/"style={{color: "#f6f6e9"}}>Home</b.Nav.Link>
                <b.Nav.Link as={Link} to="/about"style={{color: "#f6f6e9"}}>About</b.Nav.Link>
                </b.Nav>
            </b.Navbar.Collapse>
        </b.Navbar>
    )
}

export default NavBar