import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../index';


import initialState, { InitialState } from './state';
import * as reducers from './reducers';


const Slice = createSlice({
  name: "Map",
  initialState,
  reducers,
})

export const {actions} = Slice;
export const getState = (state: RootState) => state.mapReducer as InitialState;

export default Slice.reducer;