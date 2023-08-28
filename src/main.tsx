import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";

import "./i18n.ts";
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
