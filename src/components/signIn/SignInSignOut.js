import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignInSignOut = () => {
  const [signInMsg, setSignInMsg] = useState(null);
  const [signOutMsg, setSignOutMsg] = useState(null);
  const [navigateToLandingPage, setNavigateToLandingPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (navigateToLandingPage) {
      interval = setInterval(() => navigate("/"), 5000);
    }
    return () => (interval ? clearInterval(interval) : null);
  }, [navigateToLandingPage, navigate]);

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInMsg(
          `You've successfully signed in as ${userCredential.user.email}!`
        );
        setNavigateToLandingPage(true);
      })
      .catch((error) => {
        setSignInMsg(`There was an error signing in: ${error.message}!`);
      });
  };

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutMsg("You have successfully signed out!");
        setNavigateToLandingPage(true);
      })
      .catch(function (error) {
        setSignOutMsg(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      {signInMsg}
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
      <h1>Sign Out</h1>
      {signOutMsg}
      <br />
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
};

export default SignInSignOut;
