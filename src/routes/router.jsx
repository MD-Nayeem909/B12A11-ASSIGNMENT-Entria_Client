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
import Error404 from "../components/ui/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />,
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
    errorElement: <Error404 />,
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
    errorElement: <Error404 />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/manage-users",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-contests",
        element: <div>All Contest</div>,
      },
    ],
  },
  {
    path: "/sidebar",
    element: <DashboardLayout />,
    errorElement: <Error404 />,
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
