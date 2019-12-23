# useMemo evita calculos desnecessários no render
```js
  import React, { useState, useEffect, useMemo } from "react";
  ...

  const techSize = useMemo(() => tech.length, [tech]);

  ...
   <strong>Você tem {techSize} tecnologias</strong>
  ...


```