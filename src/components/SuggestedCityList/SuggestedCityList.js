import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const SuggestedCityList = ({ addCity, filteredList, isOpen }) => {
  if (!isOpen) {
    return null;
  }
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
};

SuggestedCityList.propTypes = {
  addCity: PropTypes.func.isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default SuggestedCityList;
