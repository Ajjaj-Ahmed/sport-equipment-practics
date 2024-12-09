import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layout/HomeLayout.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AllProducts from './layout/AllProducts.jsx';
import AddProducts from './layout/AddProducts.jsx';
import MyEquipment from './layout/MyEquipment.jsx';
import Register from './layout/Register.jsx';
import Login from './layout/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path:'/products',
    element:<AllProducts></AllProducts>
  },
  {
    path:'/addproduct',
    element:<AddProducts></AddProducts>
  },
  {
    path:'/mylist',
    element:<MyEquipment></MyEquipment>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<PrivateRoute><Login></Login></PrivateRoute>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
