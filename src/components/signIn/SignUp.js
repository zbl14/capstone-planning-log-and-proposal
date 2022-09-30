import React, { useEffect, useState } from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [navigateToLandingPage, setNavigateToLandingPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (navigateToLandingPage) {
      interval = setInterval(() => navigate("/"), 5000);
    }
    return () => (interval ? clearInterval(interval) : null);
  }, [navigateToLandingPage, navigate]);

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
        setNavigateToLandingPage(true);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  };

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;