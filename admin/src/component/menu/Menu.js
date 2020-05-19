import React from 'react';
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Admin</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/category">Category</Link></Nav.Link>
                <Nav.Link><Link to="/products">Products</Link></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Menu;