import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AllCrops from "../pages/AllCrops";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/allcrops",
    element: <AllCrops />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;