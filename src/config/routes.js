import React from "react";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/NotFound"
import Home from "../pages/Home/Home";
import Tour from "../pages/Tour/Tour";
import Songs from "../pages/Songs/Songs";
import About from "../pages/About/About";


const routes = [
    {
        path: "/",
        element: <Home />,
        isPrivate:false
    },
    {
        path: "/login",
        element: <Login />,
        isPrivate:false
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/*",
        element: <PageNotFound />,
        isPrivate:true
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/tour",
        element: <Tour/>,
    },
    {
        path: "/songs",
        element: <Songs/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
]

export default routes