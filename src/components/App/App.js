import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showSuggestionList } from "../../store/actions";
import { header } from "../../config";
import Search from "../Search";
import DisplayActiveCities from "../DisplayActiveCities";
import "./App.scss";

App.propTypes = {
  showSuggestionList: PropTypes.func.isRequired
};

export function App({ showSuggestionList }) {
  return (
    <div className="app-container" onClick={() => showSuggestionList(false)}>
      <header>
        <h1>{header}</h1>
      </header>
      <Search />
      <DisplayActiveCities />
    </div>
  );
}

const mapDispatchToProps = { showSuggestionList };

export default connect(null, mapDispatchToProps)(App);
