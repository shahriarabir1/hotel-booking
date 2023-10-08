import { createSlice } from "@reduxjs/toolkit";

const Product = createSlice({
  name: "Products",
  initialState: {
    item: [],
    token: null,
    uid: null,
  },
  reducers: {
    setPriceData: (state, action) => {
      state.item.push(action.payload);
    },
    setAuthData: (state, action) => {
      const { token, uid } = action.payload;
      state.token = token;
      state.uid = uid;
    },
    clearAuthData: (state) => {
      state.token = null;
      state.uid = null;
    },
  },
});

export const { setPriceData, setAuthData, clearAuthData } = Product.actions;
export default Product.reducer;
