import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation=()=>{
    return(
        <Navbar bg="" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: 'white' }}>Quran LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/App" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="/Courses"style={{ color: 'white' }}>Courses</Nav.Link>
         
              <Nav.Link href='/About' style={{ color: 'white' }}> 
                About
              </Nav.Link>
            
              <Nav.Link href='/Help' style={{ color: 'white' }}> 
                Help
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navigation