import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeCity } from "../../store/actions";
import UIState from "../UIState";
import Card from "../Card";
import { notifications } from "../../config";
import "./styles.scss";

export const DisplayActiveCities = ({
  isError,
  activeCities,
  removeCity,
  isFetchingData
}) => {
  const { noCityAdded, error } = notifications;
  return (
    <section className="active-city-card-wrapper">
      <section className="active-city-list">
        {isError ? (
          <UIState {...error}></UIState>
        ) : activeCities && activeCities.length > 0 ? (
          activeCities
            .sort((cityA, cityB) => cityB.main.temp_max - cityA.main.temp_max)
            .map((city, index) => (
              <Card key={index} city={city} removeCity={removeCity}></Card>
            ))
        ) : isFetchingData ? (
          ""
        ) : (
          <UIState {...noCityAdded}></UIState>
        )}
      </section>
    </section>
  );
};

DisplayActiveCities.propTypes = {
  isError: PropTypes.bool.isRequired,
  removeCity: PropTypes.func.isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  activeCities: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({ isError, activeCities, isFetchingData }) => ({
  isError,
  activeCities,
  isFetchingData
});
const mapDispatchToProps = { removeCity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayActiveCities);
