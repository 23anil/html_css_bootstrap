import EXxArray from "./Components/EXxArray";
import ExArray01 from "./Components/ExArray01";
import ExObject from "./Components/ExObject";
import Greeting from "./Components/Greeting";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let fullname = {
    Fname: "Anil",
    Lname: "Kumar",
  };
  let names = [
    { Fname: "Manju", Lname: "K S" },
    { Fname: "Raju", Lname: "M" },
    { Fname: "kiran", Lname: "K M" },
  ];
let data=[1,2,3,4,5]
  return (
    <div className="App text-center">
      <h1 className="text-warning">Type Script</h1>
      <Greeting name={"Anil Kumar"} count={10} isloggedin={true} />
      <ExObject fullname={fullname} />
      <EXxArray names={names} />
      <ExArray01 data={data}/>
      <Greeting name={"Anil Kumar"}  isloggedin={true} />
    </div>
  );
}

export default App;
