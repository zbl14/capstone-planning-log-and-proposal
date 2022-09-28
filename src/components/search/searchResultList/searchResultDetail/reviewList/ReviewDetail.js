import React from "react";
import PropTypes from "prop-types";

const ReviewDetail = (props) => {
  const { review, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Reveiw detail</h1>
      <h3>Comment: {review.comment}</h3>
      <h4>Vote Count: {review.voteCount}</h4>
      <button onClick={() => onClickingDelete(review.id)}>Delete Review</button>
    </React.Fragment>
  );
};

ReviewDetail.propTypes = {
  review: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default ReviewDetail;
