import './App.css';
import React,{Component} from 'react';
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
        </main>
        <footer>
          <p>&copy; 2023 Quran LMS</p>
        </footer>
      </div>
    );
  }
}

export default QuranLMS;
