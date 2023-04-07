import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Layout=()=>{
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
              <Nav.Link href="#action1" style={{ color: 'dark' }}>Home</Nav.Link>
              <Nav.Link href="#action2"style={{ color: 'dark' }}>Courses</Nav.Link>
         
              {/* <NavDropdown title="About" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            
              <Nav.Link href='About' style={{ color: 'dark' }}> 
                About
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
export default Layout