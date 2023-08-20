import { configureStore } from "@reduxjs/toolkit";
import { buttonReducer } from "./reducers/buttonReducer";

export const store = configureStore({
    reducer: {
        buttonReducer
    }
})

export default store;