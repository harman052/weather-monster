import React from "react";
import { connect } from "react-redux";
import { showSuggestionList } from "../../store/actions";
import { header } from "../../config";
import Search from "../Search";
import DisplayCities from "../DisplayCities";
import "./App.scss";

export function App({ showSuggestionList }) {
  return (
    <div className="app-container" onClick={() => showSuggestionList(false)}>
      <header>
        <h1>{header}</h1>
      </header>
      <Search />
      <DisplayCities />
    </div>
  );
}

const mapDispatchToProps = { showSuggestionList };

export default connect(null, mapDispatchToProps)(App);
