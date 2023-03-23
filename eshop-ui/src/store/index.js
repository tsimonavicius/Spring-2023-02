import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import user from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart,
    user
  }
});

export default store;
