import ReactDOM from 'react-dom/client'
import router from './Routes/Routes.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto '>
    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>
  </div>
);
