import './App.css';
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myimg from './download.jpeg'
class QuranLMS extends Component {
  state = {
    verses: [],
    isLoading: true
  };

  async componentDidMount() {
    const response = await fetch("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1");
    const data = await response.json();
    this.setState({
      verses: data.verses,
      isLoading: false
    });
  }

  render() {
    const { verses, isLoading } = this.state;
    return (
      <div>
       
       
          <div>
          <header>
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
            <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#action2"style={{ color: 'white' }}>Courses</Nav.Link>
       
            <NavDropdown title="About" text-color ="white" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="#" disabled style={{ color: 'white' }}> 
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
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
          </div>
          

        
        <main>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            verses.map((verse) => (
              <p key={verse.id}>{verse.text_uthmani}</p>
            ))
          )}
          <div>
          <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={myimg} />
           
            <Card.Body>
              <Card.Title>Courses</Card.Title>
              <Card.Text>
                6 Month course
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
          </div>
         
        </main>
        <footer>
          <p>&copy; 2023 Quran LMS</p>
        </footer>
      </div>
    );
  }
}

export default QuranLMS;
