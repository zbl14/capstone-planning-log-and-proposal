import React, { useEffect, useState } from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { BackgroundSlideshow } from "./../landingPage/backgroundSlider/BackGroundSlider";
import {
  Container,
  FormContainer,
  FormControl,
  Label,
  Span,
  Input,
  Button,
} from "./SignInSignOut";
import logo from "./../../assets/foodie-alliance-logo.png";
import { FoodieAllianceLogo } from "./../landingPage/LandingPage";

export const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [navigateToLandingPage, setNavigateToLandingPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (navigateToLandingPage) {
      interval = setInterval(() => navigate("/"), 3000);
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
          `You've successfully signed up, ${userCredential.user.email}! Redirect to home page after 3 seconds.`
        );
        setNavigateToLandingPage(true);
      })
      .catch((error) => {
        setSignUpSuccess(
          `There was an error signing up: ${error.message}! Redirect to home page after 3 seconds.`
        );
      });
  };

  return (
    <React.Fragment>
      <Container>
        <FormContainer>
          <Link to="/">
            <FoodieAllianceLogo src={logo} alt="logo" />
          </Link>
          <form onSubmit={doSignUp}>
            <FormControl>
              <Input type="text" name="signinEmail" required />
              <Label>
                <Span>Email</Span>
              </Label>
            </FormControl>
            <FormControl>
              <Input type="password" name="signinPassword" required />
              <Label>
                <Span>Password</Span>
              </Label>
            </FormControl>
            <FormControl>
              <Button type="submit">Sign up</Button>
            </FormControl>
          </form>
          <FormControl>{signUpSuccess}</FormControl>
        </FormContainer>
      </Container>
      <BackgroundSlideshow />
    </React.Fragment>
  );
};
