import React from "react";

const ReviewDetail = (props) => {
  const { review } = props;
  return (
    <React.Fragment>
      <h1>Reveiw detail</h1>
      <h3>Comment: {review.comment}</h3>
      <h4>Vote Count: {review.voteCount}</h4>
    </React.Fragment>
  );
};

export default ReviewDetail;
