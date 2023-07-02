import { configureStore } from "@reduxjs/toolkit";
import { Login } from "./slices/LoginSlice";
import { LoginSliceC } from "./slices/loginSliceC";


export const store = configureStore({
  reducer: {
   LoginSlice:Login,
   login: LoginSliceC
  },
});

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;