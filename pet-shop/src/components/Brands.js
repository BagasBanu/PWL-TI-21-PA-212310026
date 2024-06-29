import React from "react";
import "./Brands.css";

const brands = [
  "path-to-premier-logo",
  "path-to-hills-logo",
  // Add all brand logos here
];

function Brands() {
  return (
    <section className="brands">
      {brands.map((brand, index) => (
        <img key={index} src={brand} alt={`Brand ${index}`} />
      ))}
    </section>
  );
}

export default Brands;
