import React, { useState } from "react";
import { flushSync } from 'react-dom'

function AutomaticBatching() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(false);

  function handleclick() {
    setcount(count + 1);
    setdata(!data);
  }
  console.log("Anil");
  return (
    <div>
      <button onClick={handleclick}>update</button>
      <h1>Count:{count}</h1>
      <h1>Error:{String(data)}</h1>
    </div>
  );
}

export default AutomaticBatching;
