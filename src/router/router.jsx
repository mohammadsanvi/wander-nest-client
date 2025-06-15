import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/AbouUs/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
        {
            index:true,
            Component:Home
        },
        {
          path:"register",
          Component:Register
        },
        {
          path:'login',
          Component:Login
        },
        {
          path:"about",
          Component:About
        }
    ]
  },
]);

export default router;