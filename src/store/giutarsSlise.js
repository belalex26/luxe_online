import {createSlice} from "@reduxjs/toolkit";
import guitarsData from "../data/mockGuitars.js";

export const guitarsSlise = createSlice({
  name: `guitars`,
  initialState: {
    guitars: guitarsData
  },
  reducers: {

  },
});

export const {} = guitarsSlise.actions;
export const selectGuitars = (state) => state.guitars.guitars;
export default guitarsSlise.reducer;
