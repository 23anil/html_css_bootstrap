import React, { useState, useTransition } from "react";

function Transitions() {
  const [text, settext] = useState("");
  const [data, setdata] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handle(e) {
    settext(e.target.value);
    startTransition(() => {
      let l = [];
      for (let i = 1; i < 25000; i++) {
        l.push(e.target.value);
      }
      setdata(l);
    });
  }

let li=isPending ? <h1>@loading...</h1>:(data.map((val,idx)=>(<p key={idx}>{val}</p>)))
  return (
    <div>
      <input
        type="text"
        placeholder="Enter A text"
        value={text}
        onChange={handle}
      />
{/* {data.map((val, idx) => {
      return li= <div key={idx}>{val}</div>;
    })} */}
     
     {li}
    </div>
  );
}

export default Transitions;
