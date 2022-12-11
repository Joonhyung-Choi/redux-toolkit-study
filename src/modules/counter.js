import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      return (state = state + 1);
    },
    decrease: (state) => {
      return (state = state - 1);
    },
  },
});

export default counterSlice;

export const { increase, decrease } = counterSlice.actions;
