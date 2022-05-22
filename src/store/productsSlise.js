import {createSlice} from "@reduxjs/toolkit";
import productsData from "../data/mockProducts.js";

export const productsSlise = createSlice({
  name: `products`,
  initialState: {
    products: productsData
  },
  reducers: {

  },
});

export const {} = productsSlise.actions;
export const selectProducts = (state) => state.products.products;
export default productsSlise.reducer;
