import React, { useState } from "react";
import UseDeferred01 from "./UseDeferred01";

function Usedeferred02() {
  const [data, setdata] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Text"
        value={data}
        onChange={(e) => {
          setdata(e.target.value);
        }}
    />
    <UseDeferred01 data={data}/>
    </div>
  );
}

export default Usedeferred02;
