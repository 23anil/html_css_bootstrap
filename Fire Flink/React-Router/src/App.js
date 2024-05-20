import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import ChildHome from "./components/ChildHome";
import ChildAbout from "./components/ChildAbout";
import ChildTeam from "./components/ChildTeam";
import Childcontact from "./components/Childcontact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>} />
          <Route path="/home" element={<Home/>}>
            <Route path="child" element={<ChildHome />} />
            <Route path="Cap" element={<ChildAbout />} />
            <Route path="CTP" element={<ChildTeam />} />
            <Route path="CcP" element={<Childcontact />} />
          </Route>
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
