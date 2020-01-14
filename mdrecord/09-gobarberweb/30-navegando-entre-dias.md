- src/pages/Dashboard/index.js

```js
import React, { useState, useMemo } from "react";
import { format, subDays, addDays } from "date-fns";
import pt from "date-fns/locale/pt";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import api from "~/services/api";

import { Container, Time } from "./styles";

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="FFF" />
        </button>
      </header>
      
      ...


```