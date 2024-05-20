import React from "react";
import { Name } from "./datas";
type EXxArrayprops = {
  names: Name[];
};

function EXxArray(props: EXxArrayprops) {
  return (
    <div>
      {props.names.map((val, idx) => (
        <h1 key={idx}>
          {val.Fname} {val.Lname}
        </h1>
      ))}
    </div>
  );
}

export default EXxArray;
