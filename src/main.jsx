import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes.jsx';
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
