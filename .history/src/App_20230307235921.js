// import './App.css';
// import React,{Component} from 'react';
// class App extends Component {


 
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: "",
//       };
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({ value: event.target.value });
//     }
  
//     render() {
//       return (
//         <div>
//         <form>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//         </form>
//         <h1>Hello {this.state.value}!</h1>
//         </div>
//       );
//     }
//   }

// export default App;

import React, { useState, useEffect } from "react";
import QuranAPI from "./QuranAPI";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function QuranLMS() {
  const [quranText, setQuranText] = useState("");
  const [quranAudio, setQuranAudio] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await QuranAPI.getQuranText();
      setQuranText(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>{quranText}</div>
          <AudioPlayer src={quranAudio} />
        </div>
      )}
    </div>
  );
}

export default QuranLMS;