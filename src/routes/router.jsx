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
import ContestDetails from "../components/ui/ContestDetails";
import ManageContests from "../pages/Dashboard/Admin/ManageContests";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";

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
      {
        path: "/contest-details/:id",
        element: <ContestDetails />,
      },
      {
        path: "/leaderboard",
        element: <LeaderboardPage />,
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
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPass />,
      },
      {
        path: "register",
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
        path: "manage_users",
        element: <div>Manage Users</div>,
      },
      {
        path: "manage_contests",
        element: <ManageContests />,
      },
      {
        path: "participants",
        element: <div>Participants</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

export default router;
