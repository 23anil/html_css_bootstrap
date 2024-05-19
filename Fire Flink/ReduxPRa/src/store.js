import { createStore } from "redux";
import reducer from "./Components/toReducer";

let store=createStore(reducer);
export default store;