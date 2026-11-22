import Home from '@pages/home';
import Main from '@pages/main';
import Starter from '@pages/starter';
import { createBrowserRouter, type RouteObject } from 'react-router';

const routes = [
  {
    element: <Main.Layout />,
    children: [
      {
        path: '/',
        element: <Home.Page />,
      },
      {
        path: 'starter',
        element: <Starter.Page />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
