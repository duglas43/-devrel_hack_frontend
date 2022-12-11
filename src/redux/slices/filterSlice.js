import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "stars",
  langs: [],
  page: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setLanguage(state, action) {
      state.langs.includes(action.payload)
        ? (state.langs = state.langs.filter((item) => item !== action.payload))
        : state.langs.push(action.payload);
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    clearFilters(state) {
      state.sortBy = "stars";
      state.langs = [];
      state.page = 1;
    },
  },
});
export const selectFilter = (state) => state.filters;
export const { setSortBy, setPage, setLanguage, clearFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
