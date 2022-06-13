import React from "react";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/NotFound"
import Home from "../pages/Home/Home";
import Tour from "../pages/Tour/Tour";
import Merch from "../pages/Merch/Merch";
import Cesta from "../pages/cesta/Cesta";

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
        path: "/merch",
        element: <Merch/>,
    },
    {
        path: "/cesta",
        element: <Cesta/>,
    }
]

export default routes