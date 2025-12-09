import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPass from "../components/Login/ForgotPass";
import Home from "../pages/Home/Home";
import LoadingSpinner from "../components/common/LoadingSpinner";
import DashboardLayout from "../layout/DashboardLayout";
import Error404 from "../components/ui/Error404";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import CreateContestForm from "../components/ui/CreateContestForm";
import AllContests from "../pages/AllContests/AllContests";

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
      {
        path: "/contests",
        element: <AllContests />,
      },
      {
        path: "/my_contests",
        element: <div>My Contests</div>,
      },
      {
        path: "/create-contest-form",
        element: <CreateContestForm />,
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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/manage-users",
        element: <div>Manage Users</div>,
      },
      {
        path: "/dashboard/manage-contests",
        element: <div>Manage Contests</div>,
      },
      {
        path: "/dashboard/settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

export default router;
