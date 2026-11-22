import type { RouteObject } from "react-router"
import { createBrowserRouter } from "react-router"

import Main from "@pages/app"
import Home from "@pages/app/home"
import Starter from "@pages/app/starter"

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
