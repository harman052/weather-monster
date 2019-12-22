import React from "react";
import { connect } from "react-redux";
import { notifications } from "../../config";
import "./styles.scss";

export const SuggestedCityList = ({
  isSuggestionListActive,
  filteredList,
  addCity
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

const mapStateToProps = ({ isSuggestionListActive }) => ({
  isSuggestionListActive
});

export default connect(mapStateToProps, null)(SuggestedCityList);
