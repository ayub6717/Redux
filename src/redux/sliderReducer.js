// sliderReducer.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSliders = () => async (dispatch) => {
  try {
    const response = await axios.get('https://staging.martvill.techvill.net/api/sliders');
    dispatch(setSliders(response.data));
  } catch (error) {
    // Handle error
  }
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: { sliders: [] },
  reducers: {
    setSliders: (state, action) => {
      state.sliders = action.payload;
    },
  },
});

export const { setSliders } = sliderSlice.actions;

export default sliderSlice.reducer;
