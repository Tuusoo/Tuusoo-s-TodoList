import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      state.splice(action.payload,1)
    }
  }
})

export const { addTodo, removeTodo } = todoListSlice.actions;

export const selectTodoList = (state) => state.todoList;

export default todoListSlice.reducer;