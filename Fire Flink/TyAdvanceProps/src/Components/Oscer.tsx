import React from "react";
type oscerprops = {
  children: React.ReactNode;
};
function Oscer(props: oscerprops) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Oscer;
