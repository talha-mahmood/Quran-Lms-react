import './App.css';
import React,{Component,Na} from 'react';
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
        <header>
          <h1>Quran LMS</h1>
        </header>
        <main>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            verses.map((verse) => (
              <p key={verse.id}>{verse.text_uthmani}</p>
            ))
          )}
          <div>
          <Nav className="flex-column">
      <Nav.Link href="#">Link 1</Nav.Link>
      <Nav.Link href="#">Link 2</Nav.Link>
      <Nav.Link href="#">Link 3</Nav.Link>
    </Nav>
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
