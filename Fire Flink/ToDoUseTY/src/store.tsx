import { createStore } from "redux";
import reducer from "./Components/toReducer";
  
export let store=createStore(reducer);