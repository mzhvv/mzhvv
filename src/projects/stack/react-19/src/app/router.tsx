import type { RouteObject } from "react-router"
import { createBrowserRouter } from "react-router"

import Main from "@pages/main"
import Home from "@pages/home"
import Starter from "@pages/starter"

const routes = [
  {
    element: <Main.Layout />,
    children: [
      {
        path: "/",
        element: <Home.Page />,
      },
      {
        path: "starter",
        element: <Starter.Page />,
      },
    ],
  },
] satisfies RouteObject[]

export const router = createBrowserRouter(routes)
