// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for fetching data
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await axios.get('https://staging.martvill.techvill.net/api/user/products');
    return response.data;
  }
);

// Create the product slice
const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
