import { createBrowserRouter } from "react-router";

import { AppLayout } from "./pages/_layouts/app";
import { Main } from "./pages/app/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Main /> }],
  },
]);
