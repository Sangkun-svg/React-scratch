import React from "react";
import ReactDOM from "react-dom/client";
import { AuthConetextProvider } from "./context/authContext";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthConetextProvider>
    <App />
  </AuthConetextProvider>
);
