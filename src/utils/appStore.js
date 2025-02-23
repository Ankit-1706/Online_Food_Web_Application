import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";

const appStore = configureStore({
    reducer : { // This reducer contains small reducer's of all each slice.
        cart: cartReducer, // This whole big reducer is a App Reducer.
    },
});

export default appStore;