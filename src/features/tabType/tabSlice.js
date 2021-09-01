import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "todo",
    state: true,
  },{
    title: "doing",
    state: false,
  },{
    title: "done",
    state: false,
  }
];

export const tabSlice = createSlice({
  name: 'tabName',
  initialState: initialState,
  reducers: {
    clickTodo: (state) => {
      state[0].state = true;
      state[1].state = false;
      state[2].state = false;
    },
    clickDoing: (state) => {
      state[0].state = false;
      state[1].state = true;
      state[2].state = false;
    },
    clickDone: (state) => {
      state[0].state = false;
      state[1].state = false;
      state[2].state = true;
    }
  }
})

export const { clickTodo, clickDoing, clickDone } = tabSlice.actions;

export const selectTab = (state) => state.tab;

export default tabSlice.reducer;