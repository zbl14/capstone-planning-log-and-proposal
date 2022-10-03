import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNavStyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 9rem;
`;

const LeftWrapper = styled.section``;

const RightWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  margin-left: 1.5rem;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 black;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    color: black;
    text-decoration: underline;
    box-shadow: inset 200px 0 0 0 #fff;
  }
`;

const NavButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  margin-left: 1.5rem;
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
`;

const TopNav = () => {
  return (
    <React.Fragment>
      <TopNavStyledWrapper>
        <LeftWrapper>
          <NavLink
            href="https://cors-anywhere.herokuapp.com/corsdemo"
            target="_blank"
          >
            CORS Enable
          </NavLink>
          <NavLink
            href="https://github.com/zbl14/foodie-alliance.git"
            target="_blank"
          >
            GitHub
          </NavLink>
          <NavLink
            href="https://github.com/zbl14/foodie-alliance/blob/main/README.md"
            target="_blank"
          >
            About
          </NavLink>
          <NavLink href="mailto:ifthereisoneday@gmail.com">Contact US</NavLink>
        </LeftWrapper>
        <RightWrapper>
          <NavButton>
            <Link to="/sign-in" style={{ textDecoration: "none" }}>
              Sign In / Sign Out
            </Link>
          </NavButton>
          <NavButton>
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </NavButton>
        </RightWrapper>
      </TopNavStyledWrapper>
    </React.Fragment>
  );
};

export default TopNav;
