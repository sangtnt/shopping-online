import React from 'react';
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
function Menu() {
    let location = useLocation();
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Admin</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/category">Category</Link></Nav.Link>
                <Nav.Link><Link to="/products">Products</Link></Nav.Link>
            </Nav>
            {
                (location.pathname.includes('products'))
                ?<Form action="/products/search" method="GET"inline>
                <FormControl name="proName" type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-info">Search</Button>
                </Form>
                :""
            }
        </Navbar>
    )
}

export default Menu;