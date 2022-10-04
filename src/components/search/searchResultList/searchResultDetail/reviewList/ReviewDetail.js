import React from "react";
import PropTypes from "prop-types";
import { Button, Box, Avatar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const ReviewDetail = (props) => {
  const { review, onClickingDelete, onClickingUpvote, onClickingDownvote } =
    props;
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ mr: 3 }} alt={review.name} src="#" />
        <h2 style={{ margin: 0 }}>{review.name}</h2>
      </Box>
      <Typography variant="subtitle1">
        <em>{review.formattedWaitTime}</em>
      </Typography>
      <Typography sx={{ fontSize: "24px" }}>{review.comment}</Typography>
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        Vote#: {review.voteCount}
      </Typography>
      <Button onClick={() => onClickingUpvote(review.id)} title="Like">
        <ThumbUpAltIcon fontSize="large" />
      </Button>
      <Button onClick={() => onClickingDownvote(review.id)} title="Dislike">
        <ThumbDownAltIcon fontSize="large" />
      </Button>
      <Button onClick={props.onClickingEdit} title="Revise Review">
        <DriveFileRenameOutlineIcon color="success" fontSize="large" />
      </Button>
      <Button onClick={() => onClickingDelete(review.id)} title="Delete Review">
        <DeleteForeverIcon color="error" fontSize="large" />
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
