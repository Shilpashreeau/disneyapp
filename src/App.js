import { getChar } from "./services/disneyapi";
import { useState, useEffect } from "react";

import "./App.css";
import CharacterDisplay from "./components/CharacterDisplay";

function App() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChar();
      console.log(data);
      setChar(data);
    };
    fetchData();
  }, []);
  return (
    <div> 
      <h3 >Disney Characters</h3>
      <CharacterDisplay characters={char} />
    </div>
  );
}

export default App;
