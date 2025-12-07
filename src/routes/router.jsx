import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPass from "../components/Login/ForgotPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>Oops! An error occurred.</div>,
    children: [
        {
            index: true,
            element: <Home />,
        }
    ],
  },
  {
		path: '/auth',
		element: <AuthLayout />,
		errorElement: <div>Oops! An error occurred.</div>,
		hydrateFallbackElement: <div>Loading...</div>,
		children: [
			{
				path: '/auth/login',
				element: <Login />,
			},
			{
				path: '/auth/forgot-password',
				element: <ForgotPass />,
			},
			{
				path: '/auth/register',
				element: <Register />,
			},
		],
	},
]);

export default router;