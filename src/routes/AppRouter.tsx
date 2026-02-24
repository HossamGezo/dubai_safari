// Libraries
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// Components
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/error/NotFound";

// Lazy Loading Pages
const TourDetailsPage = React.lazy(
  () => import("@/pages/tour-details/TourDetailsPage"),
);
const About = React.lazy(() => import("@/pages/about/About"));
const Login = React.lazy(() => import("@/pages/forms/Login"));
const Register = React.lazy(() => import("@/pages/forms/Register"));
const ResetPassword = React.lazy(() => import("@/pages/forms/ResetPassword"));

// App Routes
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "tour/:id",
        Component: TourDetailsPage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

// Main Component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
