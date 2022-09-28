import React, { useState } from "react";
import ReviewList from "./reviewList/ReviewList";
import NewReviewForm from "./reviewList/NewReviewForm";
import ReviewDetail from "./reviewList/ReviewDetail";

const SearchResultDetail = (props) => {
  const business = props.business;
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainReviewList, setMainReviewList] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleClick = () => {
    if (selectedReview != null) {
      setFormVisibleOnPage(false);
      setSelectedReview(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddingNewReviewToList = (newReview) => {
    const newMainReviewList = mainReviewList.concat(newReview);
    setMainReviewList(newMainReviewList);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedReview = (id) => {
    console.log(id);
    const selection = mainReviewList.filter((review) => review.id === id)[0];
    setSelectedReview(selection);
  };

  const handleDeletingReview = (id) => {
    const newMainReviewList = mainReviewList.filter(
      (review) => review.id !== id
    );
    setMainReviewList(newMainReviewList);
    setSelectedReview(null);
  };

  let curVisibleState = null;
  let buttonText = null;

  if (selectedReview != null) {
    curVisibleState = (
      <ReviewDetail
        review={selectedReview}
        onClickingDelete={handleDeletingReview}
      />
    );
    buttonText = "Return to Review List";
  } else if (formVisibleOnPage) {
    curVisibleState = (
      <NewReviewForm
        onNewReviewCreation={handleAddingNewReviewToList}
        business={business}
      />
    );
    buttonText = "Return to Review List";
  } else {
    curVisibleState = (
      <ReviewList
        reviewList={mainReviewList}
        onReviewSelection={handleChangingSelectedReview}
      />
    );
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
