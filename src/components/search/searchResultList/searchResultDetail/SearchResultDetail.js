import React, { useState } from "react";
import ReviewList from "./reviewList/ReviewList";
import NewReviewForm from "./reviewList/NewReviewForm";

const SearchResultDetail = (props) => {
  const business = props.business;
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainReviewList, setMainReviewList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  };

  const handleAddingNewReviewToList = (newReview) => {
    const newMainReviewList = mainReviewList.concat(newReview);
    setMainReviewList(newMainReviewList);
    setFormVisibleOnPage(false);
  };

  let curVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    curVisibleState = (
      <NewReviewForm
        onNewReviewCreation={handleAddingNewReviewToList}
        business={business}
      />
    );
    buttonText = "Return to Review List";
  } else {
    curVisibleState = <ReviewList reviewList={mainReviewList} />;
    buttonText = "Add Review";
  }

  return (
    <React.Fragment>
      <h1>Reviews of {business.name}</h1>
      {curVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
};

export default SearchResultDetail;
