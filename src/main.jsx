import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";

import router from './routes/routes';
import AuthProvider from './provider/AuthProvider';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children:[
//       {
//         path: "/",
//         element: <Home></Home>
//       }
//     ]
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  
  </React.StrictMode>,
)
