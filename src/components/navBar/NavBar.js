import React from "react";
import SearchBar from "../landingPage/searchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/foodie-alliance-logo.png";
import styled from "styled-components";

const NavBarWrapper = styled.section`
  display: flex;
  background-color: #d32323;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.button`
  font-size: 16px;
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

const NavBar = (props) => {
  return (
    <React.Fragment>
      <NavBarWrapper>
        <Link to="/">
          <img src={logo} alt="logo" width="70px" />
        </Link>
        <SearchBar
          term={props.term}
          location={props.location}
          sort_by={props.sortBy}
          search={props.search}
        />
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
      </NavBarWrapper>
    </React.Fragment>
  );
};

export default NavBar;
