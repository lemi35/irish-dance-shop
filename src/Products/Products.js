import React from "react";
import "./Products.css";
import celticArch from "../assets/celtic_arch.jpg";
import Card from "../components/Card";

function Products({result}) {
  return (
    <>
      <section className="card-container">
      {result}
      </section>
    </>
  );
}
export default Products;
