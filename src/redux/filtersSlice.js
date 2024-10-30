import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filtes",
  initialState: { name: "" },
  reducer: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const selectNameFilter = (state) => state.filters.name;
export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
