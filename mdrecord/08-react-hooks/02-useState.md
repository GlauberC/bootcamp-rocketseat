# utilizando o useState
```js
import React, { useState } from "react";

function App() {
  const [tech, setTech] = useState([
    "ReactJS",
    "React Native",
    "NodeJS",
    "AdonisJS"
  ]);
  const [newTech, setNewTech] = useState("");

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech("");
  }

  function handleText(text) {
    setNewTech(text);
  }

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

```