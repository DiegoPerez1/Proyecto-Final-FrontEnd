<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "../Styles/index.css";
import Start from "../Components/Start.jsx";
import SignIn from "../Components/SignIn.jsx";
import Navbar from "../Components/NavBar";
import Home from "../Components/Home";
import Search from "../Components/Search";
import LogIn from "../Components/LogIn";
import Signin2 from "../Components/Signin2";
import Profile from "../Components/Profile";
import ProfileConfig from "../Components/ProfileConfig";
import CupidoMusical from "../Components/CupidoMusical";
=======
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
<<<<<<< HEAD
import CupidoMusical from '../Components/CupidoMusical';
import MusicaContextual from '../Components/MusicaContextual';
import PlaylistMC from '../Components/PlaylistMC';
=======
import Profile from '../Components/Profile';
import ProfileConfig from '../Components/ProfileConfig';
>>>>>>> 0f6e26b9ed52ee8d657198272480ecf52f0873c3
>>>>>>> 378cc6aa981fb249e2360227543b70a138d722ce

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
    element: <Profile />,
  },
  {
    path: "/profile-config",
    element: <ProfileConfig />,
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
  },
  {
    path: "/cupido",
    element: <CupidoMusical />,
  },
  {
    path: "/musicacontextual",
    element: <MusicaContextual />,
  },
  {
    path: "/playlistMC",
    element: <PlaylistMC />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
