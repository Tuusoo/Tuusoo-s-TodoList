import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const doingListSlice = createSlice({
  name: 'doingList',
  initialState,
  reducers: {
    addDoing: (state, action) => {
      state.unshift(action.payload);
    },
    removeDoing: (state, action) => {
      state.splice(action.payload,1)
    }
  }
})

export const { addDoing, removeDoing } = doingListSlice.actions;

export const selectDoingList = (state) => state.doingList;

export default doingListSlice.reducer;