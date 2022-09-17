import "./App.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInControl from "./signIn/SignInControl";
import LandingPage from "./landingPage/LandingPage";
import Search from "./search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInControl />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
