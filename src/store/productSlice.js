import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: initailState,
  reducers: {},
});
