import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import LanguageProvider from "./Context/LanguageContext";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </Provider>
    </LanguageProvider>
  </React.StrictMode>
);
