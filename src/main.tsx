import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./Home.tsx";
import "./index.css";
import DetailMovie from "./DetailMovie.tsx";
import ListFavorite from "./ListFavorite.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ListFavorite />
  </React.StrictMode>
);
