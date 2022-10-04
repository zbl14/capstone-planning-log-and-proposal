import React from "react";
import PropTypes from "prop-types";
import { Button, Input, TextField, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <Box component="form">
        <form onSubmit={props.formSubmissionHandler}>
          <Grid container direction="column">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              sx={{ mb: 3, maxWidth: 300 }}
            />
            <TextField
              name="comment"
              placeholder="Leave a review"
              variant="outlined"
              sx={{ mb: 3, maxWidth: 500 }}
              multiline
              rows={4}
            />
          </Grid>
          <Button type="submit" title={props.buttonText}>
            {props.button}
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
