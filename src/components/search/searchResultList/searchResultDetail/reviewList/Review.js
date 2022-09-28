import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <h3>Reviewer: {props.name}</h3>
      <h4>
        Comment about {props.businessName}: {props.comment}
      </h4>
      <h4>Vote Count: {props.voteCount}</h4>
    </React.Fragment>
  );
};

Review.propsTypes = {
  name: PropTypes.string,
  businessName: PropTypes.string,
  comment: PropTypes.string,
  voteCount: PropTypes.number,
};

export default Review;
