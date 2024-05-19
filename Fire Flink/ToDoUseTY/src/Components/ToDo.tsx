import React, { useState } from "react";

function ToDo() {
  const [Name, setName] = useState("");
  console.log(Name);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter A name"
        value={Name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default ToDo;
