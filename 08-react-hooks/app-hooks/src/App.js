import React, { useState, useEffect } from "react";

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState("");

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech("");
  }

  function handleText(text) {
    setNewTech(text);
  }

  useEffect(() => {
    const techStorage = localStorage.getItem("tech");
    if (techStorage) {
      setTech(JSON.parse(techStorage));
    }

    // return () => {}; // will unmount
  }, []);

  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]); // executa sempre que der update em tech

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        value={newTech}
        onChange={({ target }) => handleText(target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
