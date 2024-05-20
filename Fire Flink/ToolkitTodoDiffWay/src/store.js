import { configureStore } from "@reduxjs/toolkit";
import CS from './Components/aR'

export let store=configureStore({
    reducer:{
        app:CS
    },
})