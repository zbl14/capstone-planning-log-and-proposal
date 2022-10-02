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
  margin-left: 1.5rem;
`;

const NavButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  margin-left: 1.5rem;
`;

const TopNav = () => {
  return (
    <React.Fragment>
      <TopNavStyledWrapper>
        <LeftWrapper>
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
          <NavLink
            href="https://cors-anywhere.herokuapp.com/corsdemo"
            target="_blank"
          >
            cors enable
          </NavLink>
          <NavButton>
            <Link to="/sign-in">Sign In / Sign Out</Link>
          </NavButton>
          <NavButton>
            <Link to="/sign-up">Sign Up</Link>
          </NavButton>
        </RightWrapper>
      </TopNavStyledWrapper>
    </React.Fragment>
  );
};

export default TopNav;
