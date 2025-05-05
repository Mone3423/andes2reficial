import React, { useState } from "react";
import { popularsDataBolivia } from "../../utils/data"; // Importa la data correctamente

const SimpleSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtra solo si hay datos y si la búsqueda no está vacía
    const filteredResults =
      popularsDataBolivia && popularsDataBolivia.length > 0
        ? popularsDataBolivia.filter((tour) =>
            tour.title.toLowerCase().includes(value.toLowerCase())
          )
        : [];

    onSearchResults(filteredResults); // Envía los resultados al componente padre
  };

return (
    <div 
      className="input-group"
      style={{ 
        width: "100%",
        maxWidth: "500px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <span 
        className="input-group-text"
        style={{ 
          background: "#ec8317",
          border: "none",
          padding: "0 20px"
        }}
      >
        <i 
          className="bi bi-search"
          style={{ color: "#ecf0f1", fontSize: "1.2rem" }}
        ></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search tours"
        value={query}
        onChange={handleSearch}
        style={{
          background: "#ecf0f1",
          border: "none",
          padding: "15px 20px",
          color: "#2c3e50",
          fontSize: "1rem",
          fontWeight: "500"
        }}
      />
    </div>
  );
};

export default SimpleSearch;
