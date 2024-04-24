import React from "react";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import { useSelector } from "react-redux";

export const MainRouter = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Inicio /> : <LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
