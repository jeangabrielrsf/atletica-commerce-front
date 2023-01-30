import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
