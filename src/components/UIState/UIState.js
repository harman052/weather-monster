import React from "react";
import "./styles.scss";

const UIState = ({ heading, text }) => {
  return (
    <section className="ui-state-indicator">
      <h3>{heading}</h3>
      <div>{text}</div>
    </section>
  );
};

export default UIState;
