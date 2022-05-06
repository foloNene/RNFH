import React from "react";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

const Gallary = () => {
  return (
    <>
      <Slider />
      <br />
      <br />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Gallary;
