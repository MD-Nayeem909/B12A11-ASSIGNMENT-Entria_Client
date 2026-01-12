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
import Dashboard from "../pages/Dashboard/Common/OverView";
import CreateContestForm from "../components/contest/CreateContestForm/CreateContestForm";
import ContestDetails from "../components/contest/ContestDetails/ContestDetails";
import ManageContests from "../pages/Dashboard/Admin/ManageContests";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";
import SubmitEntryPage from "../pages/SubmitEntryPage/SubmitEntryPage";
import MyCreatedContestsPage from "../pages/Dashboard/ContestCreator/MyCreatedContestsPage";
import SubmittedTasks from "../pages/Dashboard/ContestCreator/SubmittedTasks";
import Profile from "../pages/ProfilePage/ProfilePage";
import ContestsPage from "../pages/AllContests/ContestsPage";
import MyParticipatedContestsPage from "../pages/Dashboard/Users/MyParticipatedContestsPage";
import MyWinningContests from "../pages/Dashboard/Users/MyWinningContests";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import CheckoutPage from "../pages/Payment/CheckoutPage";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Payment/PaymentCancel";
import CreatorRoute from "./CreatorRoute";

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
        path: "/contest-details/:id",
        children: [
          {
            index: true,
            element: (
                <ContestDetails />
            ),
          },
          {
            path: "submit_entry",
            element: (
              <PrivateRoute>
                <SubmitEntryPage />
              </PrivateRoute>
            ),
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
    hydrateFallbackElement: <LoadingSpinner />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Error404 />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
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
        path: "checkout/:contestId",
        element: <CheckoutPage />,
      },
      {
        path: "payment_success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment_cancel",
        element: <PaymentCancel />,
      },
      {
        path: "created_contests",
        element: (
          <CreatorRoute>
            <MyCreatedContestsPage />
          </CreatorRoute>
        ),
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
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage_contests",
        element: (
          <AdminRoute>
            <ManageContests />
          </AdminRoute>
        ),
      },
      {
        path: "submitted_tasks/:id",
        element: <SubmittedTasks />,
      },
      {
        path: "edit_contest",
        element: <CreateContestForm />,
      },
    ],
  },
]);

export default router;
