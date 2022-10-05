import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { BackgroundSlideshow } from "./../landingPage/backgroundSlider/BackGroundSlider";
import styled from "styled-components";
import logo from "./../../assets/foodie-alliance-logo.png";
import { FoodieAllianceLogo } from "./../landingPage/LandingPage";

export const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.section`
  position: relative;
  background: radial-gradient(#e9a2a2, #dd6565, #eb4040, #ec1010);
  border-radius: 15px;
  padding: 0px 40px 20px 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 2px;
`;

export const FormControl = styled.section`
  position: relative;
  width: 350px;
  margin: 18px 0 18px;
  color: #fff;
  font-size: 12px;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 15px;
  color: #fff;
`;

export const Span = styled.span`
  display: inline-block;
  min-width: 5px;
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  font-size: 15px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 3px solid #fff;
  font-size: 15px;
  padding: 10px 0;
  &:focus,
  :valid {
    color: #2396ef;
    border-color: #2396ef;
  }
  &:focus + ${Label} ${Span}, :valid + ${Label} ${Span} {
    transform: translateY(-32px);
    color: #2396ef;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 14px 15px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #a381f3;
  background: linear-gradient(90deg, #b57fe7 20%, #b521e2 80%);
  cursor: pointer;
  color: #fff;
  text-transform: capitalize;
  font-size: 15px;
  &:hover {
    border-color: #ad75e0;
    background: linear-gradient(90deg, #a15ce2 20%, #b10ee2 80%);
  }
`;

const PTag = styled.p`
  margin: 0;
`;

export const SignInSignOut = () => {
  const [signInMsg, setSignInMsg] = useState(null);
  const [signOutMsg, setSignOutMsg] = useState(null);
  const [navigateToLandingPage, setNavigateToLandingPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (navigateToLandingPage) {
      interval = setInterval(() => navigate("/"), 3000);
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
          `You've successfully signed in as ${userCredential.user.email}! Redirect to home page after 3 seconds.`
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
        setSignOutMsg(
          "You have successfully signed out! Redirect to home page after 3 seconds."
        );
        setNavigateToLandingPage(true);
      })
      .catch(function (error) {
        setSignOutMsg(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      <Container>
        <FormContainer>
          <Link to="/">
            <FoodieAllianceLogo src={logo} alt="logo" />
          </Link>
          <Title>please login</Title>
          <FormControl>{signInMsg}</FormControl>
          <form onSubmit={doSignIn}>
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
              <Button type="submit">Sign in</Button>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "0",
                }}
              >
                <PTag>Don't have an account?</PTag>
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <PTag>Register</PTag>
                </Link>
              </div>
            </FormControl>
          </form>
          <FormControl>{signOutMsg}</FormControl>
          <Button onClick={doSignOut}>Sign out</Button>
        </FormContainer>
      </Container>
      <BackgroundSlideshow />
    </React.Fragment>
  );
};
