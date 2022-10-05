import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@mui/material";

const Review = (props) => {
  const { comment } = props;
  return (
    <React.Fragment>
      <div onClick={() => props.whenReviewClicked(props.id)}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ mr: 3 }} alt={props.name} src="#" />
          <h2 style={{ margin: 0 }}>{props.name}</h2>
        </Box>
        <Typography variant="subtitle1">
          <em>{props.formattedWaitTime}</em>
        </Typography>
        <Typography sx={{ fontSize: "24px" }}>
          {comment.length < 200
            ? comment
            : comment.slice(0, 200) + "...Read more"}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Vote#: {props.voteCount}
        </Typography>
        <hr />
      </div>
    </React.Fragment>
  );
};

Review.propsTypes = {
  name: PropTypes.string,
  businessName: PropTypes.string,
  comment: PropTypes.string,
  voteCount: PropTypes.number,
  whenReviewClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string,
};

export default Review;
