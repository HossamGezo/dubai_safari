import {createRoot} from "react-dom/client";

// Routes
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";

// CSS
import "./index.css";

// App Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello My New Project</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
