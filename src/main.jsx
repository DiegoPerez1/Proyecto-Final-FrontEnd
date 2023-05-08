import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import '../Styles/index.css'
import Start from '../Components/Start.jsx';
import SignIn from '../Components/SignIn.jsx';
import Navbar from '../Components/NavBar';
import Home from '../Components/Home';
import Search from '../Components/Search';
import LogIn from '../Components/LogIn';
import Signin2 from '../Components/Signin2';
import Profile from '../Components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signin-2",
    element: <Signin2 />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/nav",
    element: <Navbar />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

