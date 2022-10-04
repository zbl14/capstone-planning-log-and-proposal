import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const ReviewDetail = (props) => {
  const { review, onClickingDelete, onClickingUpvote, onClickingDownvote } =
    props;
  return (
    <React.Fragment>
      <h1>Reveiw detail</h1>
      <h3>Comment: {review.comment}</h3>
      <h4>Vote Count: {review.voteCount}</h4>
      <Button onClick={() => onClickingUpvote(review.id)} title="Like">
        <ThumbUpAltIcon />
      </Button>
      <Button onClick={() => onClickingDownvote(review.id)} title="Dislike">
        <ThumbDownAltIcon />
      </Button>
      <Button onClick={props.onClickingEdit} title="Revise Review">
        <DriveFileRenameOutlineIcon color="success" />
      </Button>
      <Button onClick={() => onClickingDelete(review.id)} title="Delete Review">
        <DeleteForeverIcon color="error" />
      </Button>
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
