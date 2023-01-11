import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./state";
import DataSource from "lib/types/Table";

export function setCurrCoordinates (state:InitialState, {payload}: PayloadAction<DataSource>) {
  state.key = payload.key;
  state.from = [payload.fromLat, payload.fromLng];
  state.to = [payload.toLat, payload.toLng];
}