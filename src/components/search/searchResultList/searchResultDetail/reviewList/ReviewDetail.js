import React from "react";
import PropTypes from "prop-types";

const ReviewDetail = (props) => {
  const { review, onClickingDelete, onClickingUpvote, onClickingDownvote } =
    props;
  return (
    <React.Fragment>
      <h1>Reveiw detail</h1>
      <h3>Comment: {review.comment}</h3>
      <h4>Vote Count: {review.voteCount}</h4>
      <button onClick={() => onClickingUpvote(review.id)}>Upvote</button>
      <button onClick={() => onClickingDownvote(review.id)}>Downvote</button>
      <button onClick={props.onClickingEdit}>Revise Review</button>
      <button onClick={() => onClickingDelete(review.id)}>Delete Review</button>
    </React.Fragment>
  );
};

ReviewDetail.propTypes = {
  review: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingUpvote: PropTypes.func,
  onClickingDownvote: PropTypes.func,
};

export default ReviewDetail;
