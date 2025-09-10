import React, { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];
const App = () => {
  const [word, setWord] = useState("");
  const [isClicked, setIsclicked] = useState(false);
  const [meaning, setMeaning] = useState("");
  const clickListener = () => {
    setIsclicked(true);
    const found = data.find(
      (item) => item.word.toLocaleLowerCase() === word.toLocaleLowerCase()
    );
    setMeaning(found ? found.meaning : "Word not found in the dictionary.");
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        value={word}
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={clickListener}>Search</button>
      <h5>Definition:</h5>

      {isClicked && (
        <>
          <p>{meaning}</p>
        </>
      )}
    </div>
  );
};

export default App;
