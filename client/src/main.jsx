import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GameProvider from "./contexts/GameContexts.jsx";
import PlayPage from "./pages/PlayPage.jsx";
import RoomListPage from "./pages/RoomListPage.jsx";
import CreateRoomPage from "./pages/CreateRoomPage.jsx";

const router = createBrowserRouter([
    {
        element: <HomePage />,
        children: [
            {
                path: "/play/:idRoom",
                element: <PlayPage />,
            },
            {
                path: "/",
                element: <RoomListPage />,
            },
            {
                path: "/create-room",
                element: <CreateRoomPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <GameProvider>
        <RouterProvider router={router} />
    </GameProvider>
);
