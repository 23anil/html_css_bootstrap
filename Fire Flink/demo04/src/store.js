import { configureStore } from "@reduxjs/toolkit";
import getdata from './components/cRS'
export let stroe=configureStore({reducer:{
    values:getdata
}})