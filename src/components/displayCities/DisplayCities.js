import React from "react";
import "./styles.scss";

const DisplayCities = ({ cityList, removeCity }) => {
  return (
    <section className="active-city-card-wrapper">
      <section className="active-city-list">
        {cityList
          .sort((cityA, cityB) => cityB.main.temp_max - cityA.main.temp_max)
          .map((city, index) => (
            <article
              key={index}
              className="city-card"
              onClick={() => removeCity(city.id)}
            >
              <strong>{city.name}</strong>
              <div>
                <span className="min-temp-label">Min</span> {city.main.temp_min}
                &deg;C{" "}
              </div>
              <div>
                <span className="max-temp-label">Max</span> {city.main.temp_max}
                &deg;C{" "}
              </div>
            </article>
          ))}
      </section>
    </section>
  );
};

export default DisplayCities;
