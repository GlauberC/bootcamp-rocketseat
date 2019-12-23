# useEffect substitui as funções de ciclo de vida
```js
  import React, { useState, useEffect } from "react";
  ...


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

  ...

```