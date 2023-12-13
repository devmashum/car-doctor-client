import ReactDOM from 'react-dom/client'
import router from './Routes/Routes.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto '>
    <React.StrictMode>

   <QueryClientProvider client={queryClient}>
   <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </QueryClientProvider>

    </React.StrictMode>
  </div>
);
