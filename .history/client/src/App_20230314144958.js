import './App.css';
import React, { useState, useEffect } from "react";
import Cards from './components/layout/Cards'

function QuranLMS() {
  const [verses, setVerses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[backendData,setBackendData]=useState([{}])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1"
      );
      const data = await response.json();
      setVerses(data.verses);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(()=>{
    fetch("./api").then(
      reponse=>response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },)
  return (
    <div>
    
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          verses.map((verse) => <p key={verse.id}>{verse.text_uthmani}</p>)
        )}
        <div>
          <Cards />
        </div>
      </main>
    </div>
  );
}

export default QuranLMS;
