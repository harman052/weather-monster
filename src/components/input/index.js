import React, { Component } from "react";
import { connect } from "react-redux";
import { addCity, showSuggestionList } from "../../store/actions";
import cityList from "../../cityList";
import SuggestedCityList from "../cityList/SuggestedCityList";
import getWheatherDetails from "../../endpoint";
import { weatherEndpoint } from "../../config";
import "./styles.scss";

class Input extends Component {
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
    this.setState({
      filteredList,
      loading: false
    });
    showSuggestionList(true);
  };

  addCity = cityDetails => {
    const { cities, showSuggestionList } = this.props;
    showSuggestionList(false);
    if (cities.findIndex(city => city.id === cityDetails.id) > -1) {
      return;
    }
    showSuggestionList(false);
    this.setState({ loading: true, userInput: "" });
    const url = weatherEndpoint(cityDetails.id);
    getWheatherDetails(url).then(response => {
      this.props.addCity(response.data);
      this.setState({ loading: false });
    });
  };

  render() {
    const { userInput, filteredList, loading } = this.state;
    return (
      <div>
        <input
          type="search"
          value={userInput}
          className="city-input-field"
          placeholder="Enter city name here"
          onChange={this.onChange}
          onClick={event => this.onClick(event)}
        />
        <SuggestedCityList
          filteredList={filteredList}
          addCity={this.addCity}
        ></SuggestedCityList>
        <div>{loading ? "Loading..." : ""}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cities } = state;
  return { cities };
};

const mapDispatchToProps = { addCity, showSuggestionList };

export default connect(mapStateToProps, mapDispatchToProps)(Input);
