import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";

import mapReducer from './Map'

export const rootReducer: Reducer = combineReducers({
  mapReducer
});

export const store = configureStore({
  reducer: rootReducer
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
