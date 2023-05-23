import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SectionTop from "./components/sectionTop/SectionTop";
import SectionRight from "./components/sectionRight/SectionRight";
import MusicPage from "./pages/MusicPage";
import StoriesPage from "./pages/StoriesPage";
import FamilyGamesPage from "./pages/FamilyGamesPage";
import BloggingPage from "./pages/BloggingPage";
import MusicPlayPage from "./pages/MusicPlayPage";
import { Provider } from "react-redux";
import store from "./store";
import BottomBar from "./components/bottomBar/BottomBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%", backgroundColor: "#ff9c1f", flex: 1 }}>
            <SectionTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Music" element={<MusicPage />} />
              <Route path="/Stories" element={<StoriesPage />} />
              <Route path="/FamilyGames" element={<FamilyGamesPage />} />
              <Route path="/Blogging" element={<BloggingPage />} />
              <Route path="/Music/:id" element={<MusicPlayPage />} />
            </Routes>
          </div>
          <SectionRight />
        </div>
        <BottomBar />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
