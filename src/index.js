import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
// import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Protected from './components/Protected/Protected';
import { NoMatchPage } from './pages/NoMatchPage/NoMatchPage';
import AboutPage from './pages/AboutPage/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Protected><HomePage /></Protected>
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "about",
        element: <Protected><AboutPage /></Protected>
      },
      {
        path: "*",
        element: <NoMatchPage />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);