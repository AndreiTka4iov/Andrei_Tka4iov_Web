import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home/homeSlice";
import globalSlice from "./global/globalSlice";

const rootReducer = combineReducers({
  homeSlice,
  globalSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
