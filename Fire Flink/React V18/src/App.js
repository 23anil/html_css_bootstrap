import "./App.css";
import { Suspense, lazy } from "react";
import AutomaticBatching from "./Components/AutomaticBatching";
import Transitions from "./Components/Transitions-React/Transitions";
import Control from "./Components/Transitions-React/Control";
import UseID from "./Components/NewHooks/UseID";
import Usedeferred02 from "./Components/UseDeferred/Usedeferred02";
import UseSyncExternalStore01 from "./Components/UseSyncExternalStore/UseSyncExternalStore01";
import WidthExample from "./Components/UseSyncExternalStore/WidthExample";
import UseInsertionEffect from "./Components/UseInsertionEffect/UseInsertionEffect";
const Lazyp = lazy(() => import("./Components/Demo"));

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<h1>Loading ...</h1>}>
        <Lazyp />
      </Suspense> */}
      {/* <AutomaticBatching/> */}
      {/* <Transitions/> */}
      {/* <Control/> */}
      {/* <UseID />
      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas
        omnis vero aliquam exercitationem dolorum necessitatibus perferendis.
        Commodi, quo reiciendis maiores nisi ex voluptatum, dolorum distinctio,
        tempora eos et esse.
      </p>

      <UseID /> */}
      {/* <Usedeferred02/> */}
      {/* <UseSyncExternalStore01/> */}
      {/* <WidthExample/> */}
      <UseInsertionEffect/>
    </div>
  );
}

export default App;
