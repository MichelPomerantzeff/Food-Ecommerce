import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./features/bagSlice";

const store = configureStore({
    reducer: {
        bag: bagSlice,
    },
});

export default store;