import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "@/store/slice/api";
import counterReducer from "./slice/CartSlice/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
  [productsAPI.reducerPath]: productsAPI.reducer,
  counter: counterReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
setupListeners(store.dispatch);
