import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routes/routes';
import LanguageProvider from './Context/LanguageContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
      </LanguageProvider>
  </React.StrictMode>,
);
