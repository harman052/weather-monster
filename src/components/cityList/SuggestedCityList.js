import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

const SuggestedCityList = ({
  isSuggestionListDisplay,
  filteredList,
  addCity
}) => {
  if (!isSuggestionListDisplay) {
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
    return <p>No matches found.</p>;
  }
};

const mapStateToProps = ({ isSuggestionListDisplay }) => ({
  isSuggestionListDisplay
});

export default connect(mapStateToProps, null)(SuggestedCityList);
