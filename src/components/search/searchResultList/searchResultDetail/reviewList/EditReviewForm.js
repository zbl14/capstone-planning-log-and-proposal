import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const EditReviewForm = (props) => {
  const { review } = props;
  const handleEditReviewFormSubmission = (event) => {
    event.preventDefault();
    props.onEditReview({
      name: event.target.name.value,
      comment: event.target.comment.value,
      businessName: review.businessName,
      voteCount: review.voteCount,
      businessId: review.businessId,
      id: review.id,
    });
  };
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditReviewFormSubmission}
        buttonText="Revise Review"
        button=<DriveFileRenameOutlineIcon color="success" fontSize="large" />
      />
    </React.Fragment>
  );
};

EditReviewForm.propTypes = {
  review: PropTypes.object,
  onEditReview: PropTypes.func,
};

export default EditReviewForm;
