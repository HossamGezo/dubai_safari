// React Router Dom
import {createBrowserRouter, RouterProvider} from "react-router";

// Components
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

// App Routes
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {index: true, Component: Home},
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
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
