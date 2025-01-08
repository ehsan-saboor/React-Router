import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
