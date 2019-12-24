import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addCity,
  showSuggestionList,
  requestInProgress,
  requestFailure
} from "../../store/actions";
import { cityActive } from "../../helpers";
import cityList from "../../cityList";
import SuggestedCityList from "../SuggestedCityList";
import { searchPlaceholderText, notifications } from "../../config";
import { getWeatherEndpoint } from "../../endpoint";
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

  openDropdown = event => {
    event.stopPropagation();
    this.props.showSuggestionList(true);
  };

  requestWeatherDetails = async cityId => {
    const { addCity, requestInProgress, requestFailure } = this.props;
    requestInProgress(true);
    const response = await getWeatherEndpoint(cityId);
    if (response.statusCode === 500) {
      requestInProgress(false);
      requestFailure(true);
      return;
    }
    addCity(response.data);
    requestInProgress(false);
  };

  addNewCity = cityDetails => {
    const { activeCities, showSuggestionList } = this.props;
    showSuggestionList(false);
    if (cityActive(activeCities, cityDetails.id)) {
      return;
    }
    this.requestWeatherDetails(cityDetails.id);
    this.setState(this.initialState);
  };

  render() {
    const { userInput, filteredList } = this.state;
    const { isSuggestionListActive, requestStatus, activeCities } = this.props;
    return (
      <section>
        <input
          title={searchPlaceholderText}
          type="search"
          value={userInput}
          className="city-input-field"
          placeholder={searchPlaceholderText}
          onChange={this.onChange}
          onClick={event => this.openDropdown(event)}
          onFocus={event => this.openDropdown(event)}
        />
        <SuggestedCityList
          filteredList={filteredList}
          addCity={this.addNewCity}
          isOpen={isSuggestionListActive}
          activeCities={activeCities}
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
