import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPass from "../components/Login/ForgotPass";
import Home from "../pages/Home/Home";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Sidebar from "../components/Dashboard/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>Oops! An error occurred.</div>,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <div>Oops! An error occurred.</div>,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPass />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <div>Oops! An error occurred.</div>,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    },
  {
    path: "/sidebar",
    element: <DashboardLayout />,
    errorElement: <div>Oops! An error occurred.</div>,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "/sidebar",
        element: <Sidebar />,
      },
    ],
    },
]);

export default router;
