import './App.css';
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
          <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Quran LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
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
        </main>
        <footer>
          <p>&copy; 2023 Quran LMS</p>
        </footer>
      </div>
    );
  }
}

export default QuranLMS;
