import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./reducers/game-reducer";

const rootReducer = {
  [gameReducer.name]: gameReducer.reducer,
};

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export const store = createReduxStore();

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
