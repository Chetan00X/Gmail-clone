import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mail-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { mail: mailSlice.reducer, user: userSlice.reducer },
});

export default store;
