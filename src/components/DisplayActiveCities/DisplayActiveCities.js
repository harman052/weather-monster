import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeCity } from "../../store/actions";
import UIState from "../UIState";
import Card from "../Card";
import { sortCities } from "../../helpers";
import { notifications } from "../../config";
import "./styles.scss";

const renderCities = (activeCities, removeCity, requestStatus) => {
  const { noCityAdded } = notifications;
  return activeCities && activeCities.length > 0 ? (
    sortCities(activeCities).map((city, index) => (
      <Card key={index} city={city} removeCity={removeCity}></Card>
    ))
  ) : requestStatus.inProgress ? (
    ""
  ) : (
    <UIState {...noCityAdded}></UIState>
  );
};

export const DisplayActiveCities = ({
  requestStatus,
  activeCities,
  removeCity
}) => {
  const { error } = notifications;
  return (
    <section className="active-city-card-wrapper">
      <section className="active-city-list">
        {requestStatus.failure ? (
          <UIState {...error}></UIState>
        ) : (
          renderCities(activeCities, removeCity, requestStatus)
        )}
      </section>
    </section>
  );
};

DisplayActiveCities.propTypes = {
  removeCity: PropTypes.func.isRequired,
  activeCities: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestStatus: PropTypes.objectOf(PropTypes.bool).isRequired
};

const mapStateToProps = ({ activeCities, requestStatus }) => ({
  activeCities,
  requestStatus
});
const mapDispatchToProps = { removeCity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayActiveCities);
