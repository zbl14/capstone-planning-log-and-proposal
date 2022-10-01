import React from "react";
import Review from "./Review";
import PropTypes from "prop-types";

const ReviewList = (props) => {
  return props.reviewList.length === 0 ? (
    <h1>No review yet</h1>
  ) : (
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
          formattedWaitTime={review.formattedWaitTime}
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
