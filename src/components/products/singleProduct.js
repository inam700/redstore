import React, { Component } from "react";
import image from "../../resources/images/gallery-1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
class SingleProduct extends Component {
  state = {
    products: [],
  };
  // componentDidMount = () => {
  //   const { id } = this.props.match.params;
  //   axios
  //     .get(`http://localhost:3001/products/${id}`)
  //     .then((res) => {
  //       this.setState({
  //         products: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  render() {
    const { id, name, price, desc, productImage } = this.state.products;
    return (
      <div className="container-sm single-product">
        <div className="row">
          <div className="col-2" key={id}>
            <img src={productImage} width="100%" alt="Gallery-Img" />
          </div>
          <div className="col-2">
            <h1>{name}</h1>
            <h4>${price}</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <Link to="/" className="btn">
              Add to Cart
            </Link>
            <h3>Product Details</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
