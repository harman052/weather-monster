import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addCity,
  showSuggestionList,
  requestInProgress,
  requestFailure
} from "../../store/actions";
import cityList from "../../cityList";
import SuggestedCityList from "../SuggestedCityList";
import getWeatherDetails from "../../endpoint";
import { searchPlaceholderText, notifications } from "../../config";
import { getWeatherEndpoint } from "../../endpointConfig";
import "./styles.scss";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    userInput: "",
    filteredList: cityList
  };

  onChange = e => {
    const { showSuggestionList } = this.props;
    const userInput = e.currentTarget.value;
    const filteredList = cityList.filter(item =>
      item.name.toLowerCase().includes(userInput.toLowerCase())
    );
    this.setState({
      userInput,
      filteredList
    });
    showSuggestionList(true);
  };

  onClick = event => {
    event.stopPropagation();
    this.props.showSuggestionList(true);
  };

  requestWeatherDetails = cityId => {
    const { addCity, requestInProgress, requestFailure } = this.props;
    const url = getWeatherEndpoint(cityId);
    getWeatherDetails(url).then(response => {
      if (response.statusCode === 500) {
        requestInProgress(false);
        requestFailure(true);
        return;
      }
      addCity(response.data);
      requestInProgress(false);
    });
  };

  addNewCity = cityDetails => {
    const { activeCities, showSuggestionList, requestInProgress } = this.props;
    showSuggestionList(false);
    if (activeCities.findIndex(city => city.id === cityDetails.id) > -1) {
      return;
    }
    this.setState(this.initialState);
    requestInProgress(true);
    this.requestWeatherDetails(cityDetails.id);
  };

  render() {
    const { userInput, filteredList } = this.state;
    const { isSuggestionListActive, requestStatus } = this.props;
    return (
      <section>
        <input
          title={searchPlaceholderText}
          type="search"
          value={userInput}
          className="city-input-field"
          placeholder={searchPlaceholderText}
          onChange={this.onChange}
          onClick={event => this.onClick(event)}
        />
        <SuggestedCityList
          filteredList={filteredList}
          addCity={this.addNewCity}
          isOpen={isSuggestionListActive}
        ></SuggestedCityList>
        <div className="loading-data-indicator">
          {requestStatus.inProgress ? notifications.loadingText : ""}
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  addCity: PropTypes.func.isRequired,
  requestFailure: PropTypes.func.isRequired,
  requestInProgress: PropTypes.func.isRequired,
  showSuggestionList: PropTypes.func.isRequired,
  isSuggestionListActive: PropTypes.bool.isRequired,
  requestStatus: PropTypes.objectOf(PropTypes.bool).isRequired
};

const mapStateToProps = ({
  activeCities,
  requestStatus,
  isSuggestionListActive
}) => ({
  activeCities,
  requestStatus,
  isSuggestionListActive
});
const mapDispatchToProps = {
  addCity,
  requestInProgress,
  requestFailure,
  showSuggestionList
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
