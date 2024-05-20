import { log } from "console";

function Functions() {
  // number return Function
  let Add = (): number => {
    return 2 + 2;
  };
  console.log(Add());

  // not return Function
  let notreturned = (): void => {
    console.log("Anil");
  };
notreturned();

  return <div>Functions Type Script</div>;
}

export default Functions;
