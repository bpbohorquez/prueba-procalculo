import React from "react";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";

export const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
