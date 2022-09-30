import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Search from "./search/Search";
import SignUp from "./signIn/SignUp";
import SignInSignOut from "./signIn/SignInSignOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignInSignOut />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
