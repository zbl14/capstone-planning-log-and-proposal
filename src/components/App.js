import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInControl from "./signIn/SignInControl";
import LandingPage from "./landingPage/LandingPage";
import Search from "./search/Search";
import SignUp from "./signIn/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignInControl />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
