import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/AbouUs/About";
import PrivateRoute from "./PrivateRoute";
import AddTourPackage from "../Pages/AddTourPackage/AddTourPackage";
import AllPackages from "../Pages/Packge/AllPackages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "add-package",
        element: (
          <PrivateRoute>
            <AddTourPackage />
          </PrivateRoute>
        )
      },
      {
        path:"packages",
        Component:AllPackages
      }
    ]
  },
]);

export default router;