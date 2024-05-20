import React from "react";
type ExArray01props = {
  data: number[];
};
function ExArray01(props: ExArray01props) {
  return (
    <div>
      {props.data.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
    </div>
  );
}

export default ExArray01;
