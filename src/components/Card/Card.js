import React from "react";
import "./styles.scss";

const Card = ({ city, removeCity }) => {
  return (
    <article className="card" onClick={() => removeCity(city.id)}>
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
  );
};

export default Card;
