import React from "react";
import Categories from "./categories";
import Products from "./products";
import Offers from "./offers";
import Testimonials from "./testimonials";
import Brands from "./brands";
import Banner from "./banner";
function HomePage() {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <Offers />
      <Testimonials />
      <Brands />
    </div>
  );
}

export default HomePage;
