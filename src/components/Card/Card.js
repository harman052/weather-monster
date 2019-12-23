import React from "react";
import PropTypes from "prop-types";
import { units } from "../../config";
import constants from "../../constants";
import "./styles.scss";

const Card = ({ city, removeCity }) => {
  return (
    <article
      className="card"
      onClick={() => removeCity(city.id)}
      title="Click to remove this city"
    >
      <strong>{city.name}</strong>
      <div>
        <span className="min-temp-label">Min</span> {city.main.temp_min}
        &deg;{units === constants.units.METRIC ? "C" : "F"}
      </div>
      <div>
        <span className="max-temp-label">Max</span> {city.main.temp_max}
        &deg;{units === constants.units.METRIC ? "C" : "F"}
      </div>
    </article>
  );
};

Card.propTypes = {
  city: PropTypes.object.isRequired,
  removeCity: PropTypes.func.isRequired
};

export default Card;
