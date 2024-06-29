import React from "react";
import "./Products.css";

const products = [
  { name: "Sanol Medicine", price: "Rp 100.000", image: "path-to-your-image" },
  // Add all products here
];

function Products() {
  return (
    <section className="products">
      {products.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </section>
  );
}

export default Products;
