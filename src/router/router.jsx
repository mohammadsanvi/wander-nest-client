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
import AllPackages from "../Pages/Packages/AllPackages";
import PackageDetails from "../Pages/Home/PackageDetails/packageDetails";
import { param } from "framer-motion/client";
import ManageMyPackages from "../Pages/AbouUs/MyPackages/ManageMyPackages";
import MyBookings from "../Pages/MyBookings/MyBookings";

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
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        )
      },
      {
        path: "manage-packages",
        element: (
          <PrivateRoute>
            <ManageMyPackages></ManageMyPackages>
          </PrivateRoute>
        )
      },
      {
        path: "packages",
        Component: AllPackages,
        loader: () => fetch('http://localhost:3000/tour-packages')
      },
      {
        path: "packages/package-details/:id",
        element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/tour-packages/${params.id}`)
      }
    ]

  },
]);

export default router;