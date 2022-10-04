import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Your Name" />
        <textarea name="comment" placeholder="Leave a review" />
        <Button type="submit" title={props.buttonText}>
          {props.button}
        </Button>
      </form>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
