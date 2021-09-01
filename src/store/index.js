import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tabType/tabSlice"

export const store = configureStore({
  reducer: {
    tab: tabReducer,
  }
})