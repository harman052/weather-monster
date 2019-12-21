import React from "react";
import { connect } from "react-redux";
import { removeCity, showSuggestionList } from "./store/actions";
import { header } from "./config";
import Input from "./components/input";
import DisplayCities from "./components/displayCities/DisplayCities";
import "./App.scss";

function App({ cities, removeCity, showSuggestionList }) {
  return (
    <div className="app-container" onClick={() => showSuggestionList(false)}>
      <h1 className="app-header">{header}</h1>
      <Input></Input>
      <DisplayCities cityList={cities} removeCity={removeCity}></DisplayCities>
    </div>
  );
}

const mapStateToProps = state => {
  const { cities, isSuggestionListDisplay } = state;
  return { cities, isSuggestionListDisplay };
};

const mapDispatchToProps = {
  removeCity,
  showSuggestionList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
