import React from "react";
import PropTypes from "prop-types";

const DisplayMessage = ({ message, condition }) =>
  condition ? <p>{message}</p> : "";

DisplayMessage.propTypes = {
  message: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired
};

export default DisplayMessage;
