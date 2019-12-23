import React from "react";
import PropTypes from "prop-types";
import { notifications } from "../../config";
import "./styles.scss";

export const SuggestedCityList = ({
  addCity,
  filteredList,
  isSuggestionListActive
}) => {
  if (!isSuggestionListActive) {
    return null;
  }
  if (filteredList.length > 0) {
    return (
      <section className="suggested-city-list">
        {filteredList.map((item, index) => (
          <div
            className="suggested-city-list-item"
            key={index}
            onClick={() => addCity(item)}
          >
            {item.name}
          </div>
        ))}
      </section>
    );
  } else {
    return <p>{notifications.noMatchesFound}</p>;
  }
};

SuggestedCityList.propTypes = {
  addCity: PropTypes.func.isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSuggestionListActive: PropTypes.bool.isRequired
};

export default SuggestedCityList;
