import React, { Component } from "react";
import { connect } from "react-redux";
import { addCity, showSuggestionList, fetchData } from "../../store/actions";
import cityList from "../../cityList";
import SuggestedCityList from "../SuggestedCityList";
import getWheatherDetails from "../../endpoint";
import {
  weatherEndpoint,
  searchPlaceholderText,
  notifications
} from "../../config";
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
      return item.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;
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
    const { cities, showSuggestionList, addCity, fetchData } = this.props;
    showSuggestionList(false);
    if (cities.findIndex(city => city.id === cityDetails.id) > -1) {
      return;
    }
    showSuggestionList(false);
    this.setState({ userInput: "" });
    fetchData(true);
    const url = weatherEndpoint(cityDetails.id);
    getWheatherDetails(url).then(response => {
      addCity(response.data);
      fetchData(false);
    });
  };

  render() {
    const { userInput, filteredList } = this.state;
    return (
      <section>
        <input
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
        ></SuggestedCityList>
        <div className="loading-data-indicator">
          {this.props.isFetchingData ? notifications.loadingText : ""}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ cities, isFetchingData }) => ({
  cities,
  isFetchingData
});
const mapDispatchToProps = { addCity, showSuggestionList, fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
