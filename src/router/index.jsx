import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/layout";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
          {
              index: true,
              element: <HomePage />
          },
          {
              path: "about",
              element: <AboutPage />
          },
          {
            path: "/profile/:id",
            element: <ProfilePage />,
            errorElement: <ErrorPage />,
          },
      ],
  },
]);

export default router;
