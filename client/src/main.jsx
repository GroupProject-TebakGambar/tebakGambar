import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GameProvider from "./contexts/GameContexts.jsx";
import PlayPage from "./pages/PlayPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/play",
    element: <PlayPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameProvider>
    <RouterProvider router={router} />
  </GameProvider>
);
