import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <Main />, index: true },
      { path: "/todo", element: <Todo />, index: true }
      // { path: "/products", element: <DynamicProductsIndex />, index: true },
      // { path: "/products/:id", element: <DynamicProductsId /> },
    ]
  }
];
