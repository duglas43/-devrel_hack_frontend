import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import usersSlice from "./slices/usersSlice";
const store = configureStore({
  reducer: {
    filters: filterSlice,
    users: usersSlice,
  },
});
export default store;
