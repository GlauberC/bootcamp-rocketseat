# useCallback evita que uma função seja montada toda vezes que o valor do estado alterar  
```js
  import React, { useState, useEffect, useMemo, useCallback } from "react";
  ...

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [newTech, tech]);

  const handleText = useCallback(text => {
    setNewTech(text);
  }, []);
  ...


```