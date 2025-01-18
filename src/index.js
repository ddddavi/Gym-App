import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Contatti from './pages/Contatti.jsx'
import Info from './pages/Info.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/contatti",
    element: <Contatti/>
  },
  {
    path: "/info",
    element: <Info/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>

);


