import React, { Component } from "react";
import p1 from "../../resources/images/product-1.jpg";
import p2 from "../../resources/images/product-2.jpg";
import p3 from "../../resources/images/product-3.jpg";
import p4 from "../../resources/images/product-4.jpg";
import { Link } from "react-router-dom";
class Products extends Component {
  state = {
    featuredProducts: [
      {
        id: 1,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p1,
      },
      {
        id: 2,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p2,
      },
      {
        id: 3,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p3,
      },
      {
        id: 4,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p4,
      },
    ],
  };
  render() {
    return (
      <div className="container-sm">
        <div className="row row-2">
          <h2>All Products</h2>
        </div>
        <div className="row">
          {this.state.featuredProducts.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <Link to={`/product-details/${item._id}`}>
                  <img src={item.image} alt="" />
                </Link>
                <h4>{item.title}</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
    );
  }
}

export default Products;
