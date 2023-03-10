import './App.css';
import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" }>Quran LMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
    
      </Navbar>
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
