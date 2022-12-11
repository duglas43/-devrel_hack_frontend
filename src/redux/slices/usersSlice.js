import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (filters) => {
    let { sortBy, langs, page } = filters;
    let filtersQs = qs.stringify({ sortBy, langs, page });
    console.log(filtersQs);
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/?${filtersQs}`
    );
    return data;
  }
);

const initialState = {
  users: [],
  status: "loading", //loading, loaded, error
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const selectUsers = (state) => state.users;
export default usersSlice.reducer;
