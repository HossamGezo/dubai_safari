// Libraries
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// Components
import AppRouter from "./routes/AppRouter";

// Styles
import "./index.css";

// Root
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
