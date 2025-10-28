import {createRoot} from "react-dom/client";

// React Router Dom
import AppRouter from "./routes/AppRouter";

// Styles
import "./index.css";

// Root
createRoot(document.getElementById("root")!).render(<AppRouter />);
