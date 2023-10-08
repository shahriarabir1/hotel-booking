import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer.js";

export const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});
