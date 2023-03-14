import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";

const store = configureStore({
  reducer: {
    accountSlice: accountSlice.reducer,
  },
});

export default store;
