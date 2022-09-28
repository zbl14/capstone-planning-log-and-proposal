import React from "react";
import Review from "./Review";
import PropTypes from "prop-types";

const ReviewList = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <hr />
      {props.reviewList.map((review) => (
        <Review
          whenReviewClicked={props.onReviewSelection}
          name={review.name}
          comment={review.comment}
          businessName={review.businessName}
          businessId={review.businessId}
          voteCount={review.voteCount}
          id={review.id}
          key={review.id}
        />
      ))}
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  reviewList: PropTypes.array,
  whenReviewClicked: PropTypes.func,
};

export default ReviewList;
