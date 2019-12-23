import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState("");

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [newTech, tech]);

  const handleText = useCallback(text => {
    setNewTech(text);
  }, []);

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

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {techSize} tecnologias</strong>
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
