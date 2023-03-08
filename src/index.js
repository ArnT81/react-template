import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
// import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { UserDeviceProvider } from './context/UserDeviceContext';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Protected from './components/Protected';
import { NoMatchPage } from './pages/NoMatchPage/NoMatchPage';
import AboutPage from './pages/AboutPage/AboutPage';
import UsersPage from './pages/UsersPage/UsersPage';
import { getUsers } from './helpers/users';
import SingleUser from './components/UserSingle/UserSingle';
import UsersList from './components/UsersList/UsersList';
import TooltipPage from './pages/TooltipPage/TooltipPage';
import ModalPage from './pages/ModalPage/ModalPage';
import FormPage from './pages/FormPage/FormPage';


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
        path: "tooltip",
        element: <TooltipPage />
      },
      {
        path: "modal",
        element: <ModalPage />
      },
      {
        path: "form",
        element: <FormPage />
      },
      {
        path: "users",
        element: <Protected><UsersPage /></Protected>,
        children: [
          {
            path: "allusers",
            element: <UsersList />,
            loader: getUsers,
          },
          {
            path: ":id",
            element: <SingleUser />,
            loader: ({ params }) => getUsers(params)
          }
        ]
      },
      {
        path: "react-template",
        element: <Protected/>
      },
      {
        path: "*",
        element: <NoMatchPage />
      },
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <UserDeviceProvider>
      <RouterProvider router={router} />
    </UserDeviceProvider>
  </AuthContextProvider>
);