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
import CreateContestForm from "../components/contest/CreateContestForm/CreateContestForm";
import ContestDetails from "../components/ui/ContestDetails";
import ManageContests from "../pages/Dashboard/Admin/ManageContests";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";
import SubmitEntryPage from "../pages/SubmitEntryPage/SubmitEntryPage";
import MyCreatedContestsPage from "../pages/Dashboard/ContestCreator/MyCreatedContestsPage";
import Profile from "../pages/ProfilePage/ProfilePage";
import ContestsPage from "../pages/AllContests/ContestsPage";
import MyParticipatedContestsPage from "../pages/Dashboard/Users/MyParticipatedContestsPage";
import MyWinningContests from "../pages/Dashboard/Users/MyWinningContests";
import Payment from "../pages/Dashboard/Payment/Payment";

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
        element: <ContestsPage />,
      },
      {
        path: "/my_contests",
        element: <div>My Contests</div>,
      },

      {
        path: "/contest-details/:id",
        children: [
          {
            index: true,
            element: <ContestDetails />,
          },
          {
            path: "submit_entry",
            element: <SubmitEntryPage />,
          },
        ],
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
        path: "my_profile",
        element: <Profile />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "created_contests",
        element: <MyCreatedContestsPage />,
      },
      {
        path: "create_contest_form",
        element: <CreateContestForm />,
      },
      {
        path: "my_winning_contests",
        element: <MyWinningContests />,
      },
      {
        path: "my_participated_contests",
        element: <MyParticipatedContestsPage />,
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
        path: "submitted_tasks",
        element: <div>Submitted Tasks</div>,
      },
      {
        path: "edit_contest",
        element: <div>Submitted Tasks Page</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

export default router;
