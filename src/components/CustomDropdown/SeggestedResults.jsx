import React from "react";
import { NavLink } from "react-router-dom";

const SuggestedResults = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="suggested-results">
      {results.map((tour) => (
        <div key={tour.id} className="suggestion-item">
          <NavLink to={`/tour-details/${tour.id}`} className="text-dark">
            {tour.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default SuggestedResults;
