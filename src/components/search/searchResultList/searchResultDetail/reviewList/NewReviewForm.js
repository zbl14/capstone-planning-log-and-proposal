import React from "react";
// import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const NewReviewForm = (props) => {
  const { business } = props;
  console.log(business.id);
  const handleNewReviewFormSubmission = (event) => {
    event.preventDefault();
    props.onNewReviewCreation({
      name: event.target.name.value,
      comment: event.target.comment.value,
      businessName: business.name,
      voteCount: 0,
      businessId: business.id,
      // id: v4(),
    });
  };
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewReviewFormSubmission}
        buttonText="Add a review"
      />
    </React.Fragment>
  );
};

NewReviewForm.propTypes = {
  onNewReviewCreation: PropTypes.func,
};

export default NewReviewForm;
