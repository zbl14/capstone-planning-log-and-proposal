import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate, Link } from "react-router-dom";
import { BackgroundSlideshow } from "./backgroundSlider/BackGroundSlider";
import TopNav from "../TopNav";
import logo from "./../../assets/foodie-alliance-logo.png";
import styled from "styled-components";

export const FoodieAllianceLogo = styled.img`
  width: 150px;
  margin: 30px 0;
`;

const SearchArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalBackground = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.section`
  width: 400px;
  height: 400px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const CloseBtnContainer = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  display: inline-block;
  text-align: center;
  margin: 10px 0 10px;
  font-size: 1.5rem;
`;

const Footer = styled.section`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnableBtn = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: crimson;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const LandingPage = () => {
  const navigate = useNavigate();

  const search = (term, location, sortBy) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    const encodedSortBy = encodeURI(sortBy);
    navigate(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&sort_by=${encodedSortBy}`
    );
  };

  const useSessionModal = () => {
    const session = "firstOpen";
    const [showModal, setShowModal] = useState(false);
    const hideModal = () => {
      const modalKey = "modalSession";
      sessionStorage.setItem(modalKey, session);
      setShowModal(false);
    };

    useEffect(() => {
      const modalKey = "modalSession";
      const modalSession = sessionStorage.getItem(modalKey);
      setShowModal(modalSession !== session);
    }, [session]);
    return [showModal, hideModal];
  };

  const [showModal, hideModal] = useSessionModal();

  return (
    <React.Fragment>
      {showModal ? (
        <ModalBackground>
          <ModalContainer>
            <CloseBtnContainer>
              <CloseBtn onClick={hideModal}>X</CloseBtn>
            </CloseBtnContainer>
            <Title>IMPORTANT NOTICE</Title>
            <p>
              This app is in development and requires CORS-anywhere to accessing
              data from an API.
            </p>
            <p>
              Simply click the Enable Now button, which will direct you to a
              website for requesting temporary access to the demo server of
              CORS-anywhere.
            </p>
            <p>
              You also can enable it later, by clicking "CORS Enable" in the
              top-left corner
            </p>
            <Footer>
              <CancelBtn onClick={hideModal}>Enable Later</CancelBtn>
              <EnableBtn onClick={hideModal}>
                <a
                  href="https://cors-anywhere.herokuapp.com/corsdemo"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Enable Now
                </a>
              </EnableBtn>
            </Footer>
          </ModalContainer>
        </ModalBackground>
      ) : (
        <div>
          <TopNav />
          <SearchArea>
            <Link to="/">
              <FoodieAllianceLogo src={logo} alt="logo" />
            </Link>
            <SearchBar search={search} />
          </SearchArea>
        </div>
      )}
      <BackgroundSlideshow />
    </React.Fragment>
  );
};
