import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error } from "./pages/Error/Error.tsx";
import { Layout } from "./layout/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
