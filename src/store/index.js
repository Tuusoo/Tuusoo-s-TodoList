import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tabType/tabSlice"
import todoListSlice from "../features/todoList/todoListSlice"
import doingListSlice from "../features/doingList/doingListSlice"
import doneListSlice from "../features/doneList/doneListSlice"

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    todoList: todoListSlice,
    doingList: doingListSlice,
    doneList: doneListSlice,
  }
})