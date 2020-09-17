import React, { Component } from "react";
import p1 from "../../resources/images/product-1.jpg";
import p2 from "../../resources/images/product-2.jpg";
import p3 from "../../resources/images/product-3.jpg";
import p4 from "../../resources/images/product-4.jpg";
import p5 from "../../resources/images/product-5.jpg";
import p6 from "../../resources/images/product-6.jpg";
import p7 from "../../resources/images/product-7.jpg";
import p8 from "../../resources/images/product-8.jpg";
import p9 from "../../resources/images/product-9.jpg";
import p10 from "../../resources/images/product-10.jpg";
import p11 from "../../resources/images/product-11.jpg";
import p12 from "../../resources/images/product-12.jpg";
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
    latestProducts1: [
      {
        id: 1,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p5,
      },
      {
        id: 2,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p6,
      },
      {
        id: 3,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p7,
      },
      {
        id: 4,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p8,
      },
    ],
    latestProducts2: [
      {
        id: 1,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p9,
      },
      {
        id: 2,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p10,
      },
      {
        id: 3,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p11,
      },
      {
        id: 4,
        title: "Red Printed T-Shirt",
        price: 50.0,
        image: p12,
      },
    ],
  };
  render() {
    return (
      <div className="container-sm">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {this.state.featuredProducts.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <Link to={`/product-details/${item.id}`}>
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
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {this.state.latestProducts1.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <Link tto={`/product-details/${item.id}`}>
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
        <div className="row">
          {this.state.latestProducts2.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <Link to={`/product-details/${item.id}`}>
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
      </div>
    );
  }
}

export default Products;
