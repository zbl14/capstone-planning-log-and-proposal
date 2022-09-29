import React, { useState } from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [navigateToLandingPage, setNavigateToLandingPage] = useState(false);

  const navigate = useNavigate();

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
      })
      .then(
        setTimeout(() => {
          setNavigateToLandingPage(true);
        }, 5000)
      )
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  };
  return navigateToLandingPage ? (
    navigate("/")
  ) : (
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
