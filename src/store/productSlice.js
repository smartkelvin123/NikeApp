import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initailState = {
  products: products,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initailState,
  reducers: {},
});
