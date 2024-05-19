import React from "react";
import AdvanceProps from "./Components/AdvanceProps";
import Heading from "./Components/Heading";
import Oscer from "./Components/Oscer";

function App() {
  return (
    <div className="App">
      <AdvanceProps show={"fullfiled"} />
      <Heading>Hii @ Anil</Heading>
      <Oscer>
      <Heading>Hii @ Sunil</Heading>
      </Oscer>
    </div>
  );
}

export default App;
