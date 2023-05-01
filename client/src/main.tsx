import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider as Header } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Header>
            <App />
        </Header>
    </React.StrictMode>
);
