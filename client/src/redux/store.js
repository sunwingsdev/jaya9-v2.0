import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/baseApi";
import authReducer from "./slices/authSlice";

// const validateAuthMiddleware = (store) => (next) => (action) => {
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user");

//   if (!token || !user) {
//     store.dispatch(logout());
//   }

//   return next(action);
// };

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
