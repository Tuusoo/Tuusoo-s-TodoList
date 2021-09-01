import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: true,
  doing: false,
  done: false,
}

export const tabSlice = createSlice({
  name: 'tabName',
  initialState: initialState,
  reducers: {
    clickTodo: (state) => {
      state.todo = true;
      state.doing = false;
      state.done = false;
    },
    clickDoing: (state) => {
      state.todo = false;
      state.doing = true;
      state.done = false;
    },
    clickDone: (state) => {
      state.todo = false;
      state.doing = false;
      state.done = true;
    }
  }
})

export const { clickTodo, clickDoing, clickDone } = tabSlice.actions;

export const tabSelector = (state) => state.tabName.value;

export default tabSlice.reducer;