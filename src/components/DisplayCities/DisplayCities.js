import React from "react";
import { connect } from "react-redux";
import { removeCity } from "../../store/actions";
import Card from "../Card";
import { notifications } from "../../config";
import "./styles.scss";

const noCitiesAdded = (
  <div className="no-cities-placeholder">
    <h3>{notifications.noCityAdded.heading}</h3>
    <div>{notifications.noCityAdded.text}</div>
  </div>
);

const DisplayCities = ({ cities, removeCity, isFetchingData }) => {
  return (
    <section className="active-city-card-wrapper">
      <section className="active-city-list">
        {cities && cities.length > 0
          ? cities
              .sort((cityA, cityB) => cityB.main.temp_max - cityA.main.temp_max)
              .map((city, index) => (
                <Card key={index} city={city} removeCity={removeCity}></Card>
              ))
          : isFetchingData
          ? ""
          : noCitiesAdded}
      </section>
    </section>
  );
};

const mapStateToProps = ({ cities, isFetchingData }) => ({
  cities,
  isFetchingData
});
const mapDispatchToProps = { removeCity };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCities);
