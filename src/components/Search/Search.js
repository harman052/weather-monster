import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addCity,
  showSuggestionList,
  fetchData,
  anErrorOccurred
} from "../../store/actions";
import cityList from "../../cityList";
import SuggestedCityList from "../SuggestedCityList";
import getWheatherDetails from "../../endpoint";
import { searchPlaceholderText, notifications } from "../../config";
import { weatherEndpoint } from "../../endpointConfig";
import "./styles.scss";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      filteredList: []
    };
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredList = cityList.filter(item => {
      return item.name.toLowerCase().includes(userInput.toLowerCase());
    });
    this.setState({
      userInput: e.currentTarget.value,
      filteredList
    });
    this.props.showSuggestionList(true);
  };

  onClick = event => {
    event.stopPropagation();
    const { showSuggestionList } = this.props;
    const filteredList = cityList.filter(item => {
      return item.name.toLowerCase();
    });
    this.setState({ filteredList });
    showSuggestionList(true);
  };

  addNewCity = cityDetails => {
    const {
      activeCities,
      showSuggestionList,
      addCity,
      fetchData,
      anErrorOccurred
    } = this.props;
    showSuggestionList(false);
    if (activeCities.findIndex(city => city.id === cityDetails.id) > -1) {
      return;
    }
    showSuggestionList(false);
    this.setState({ userInput: "" });
    fetchData(true);
    const url = weatherEndpoint(cityDetails.id);
    getWheatherDetails(url).then(response => {
      if (response.statusCode === 500) {
        fetchData(false);
        anErrorOccurred(true);
        return;
      }
      addCity(response.data);
      fetchData(false);
    });
  };

  render() {
    const { userInput, filteredList } = this.state;
    const { isSuggestionListActive } = this.props;
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
          isSuggestionListActive={isSuggestionListActive}
        ></SuggestedCityList>
        <div className="loading-data-indicator">
          {this.props.isFetchingData ? notifications.loadingText : ""}
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  isError: PropTypes.bool.isRequired,
  addCity: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  anErrorOccurred: PropTypes.func.isRequired,
  showSuggestionList: PropTypes.func.isRequired,
  isSuggestionListActive: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  isError,
  activeCities,
  isFetchingData,
  isSuggestionListActive
}) => ({
  isError,
  activeCities,
  isFetchingData,
  isSuggestionListActive
});
const mapDispatchToProps = {
  addCity,
  fetchData,
  anErrorOccurred,
  showSuggestionList
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
