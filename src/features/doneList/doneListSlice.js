import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const doneListSlice = createSlice({
  name: 'doneList',
  initialState,
  reducers: {
    addDone: (state, action) => {
      state.unshift(action.payload);
    }
  }
})

export const { addDone } = doneListSlice.actions;

export const selectDoneList = (state) => state.doneList;

export default doneListSlice.reducer;