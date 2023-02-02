import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedQuote, setSelectedQuote] = useState({});

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setSelectedQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setSelectedQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          padding: "2rem",
          borderRadius: "5px",
          boxShadow: "0 0 10px #ccc"
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem"
          }}
        >
          "{selectedQuote.content}"
        </p>
        <p style={{ textAlign: "right" }}>- {selectedQuote.author}</p>
      </div>
      <button
        onClick={handleNewQuote}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        New Quote
      </button>
    </div>
  );
}

export default App;
