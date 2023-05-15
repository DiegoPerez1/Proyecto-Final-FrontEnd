
import './Styles/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Start from './Components/Start.jsx';
import SignIn from './Components/SignIn.jsx';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Search from './Components/Search';
import LogIn from './Components/LogIn';
import Signin2 from './Components/Signin2';
import CupidoMusical from './Components/CupidoMusical';
import MusicaContextual from './Components/MusicaContextual';
import PlaylistMC from './Components/PlaylistMC';
import Profile from './Components/Profile';
import ProfileConfig from './Components/ProfileConfig';
import Playlists from './Components/Playlists';
import CreatePlaylist from './Components/CreatePlaylist';
import RecuperarCuenta from './Components/RecuperarCuenta.jsx'
import TerminosYCondicionnes from './Components/TerminosYCondicionnes';

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
    path: "/recover-account",
    element: <RecuperarCuenta />
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
    path: "/profile-config",
    element: <ProfileConfig />,
  },
  {
    path: "/create-playlist",
    element: <CreatePlaylist />,
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
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/terminos-condiciones",
    element: <TerminosYCondicionnes />
  },
  {
    path: "/cupidomusical",
    element: <CupidoMusical />,
  },
  {
    path: "/musica-contextual",
    element: <MusicaContextual />,
  },
  {
    path: "/playlistMC",
    element: <PlaylistMC />,
  },
  {
    path: "/playlist",
    element: <Playlists />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
