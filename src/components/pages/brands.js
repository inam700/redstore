import React, { Component } from "react";
import logo1 from "../../resources/images/logo-coca-cola.png";
import logo2 from "../../resources/images/logo-godrej.png";
import logo3 from "../../resources/images/logo-oppo.png";
import logo4 from "../../resources/images/logo-paypal.png";
import logo5 from "../../resources/images/logo-philips.png";
class Brands extends Component {
  state = {
    brands: [
      {
        id: 1,
        image: logo5,
      },
      {
        id: 2,
        image: logo4,
      },
      {
        id: 3,
        image: logo3,
      },
      {
        id: 4,
        image: logo2,
      },
      {
        id: 5,
        image: logo1,
      },
    ],
  };
  render() {
    return (
      <div className="brands">
        <div className="container-sm">
          <div className="row">
            {this.state.brands.map((item) => {
              return (
                <div className="col-5" key={item.id}>
                  <img src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
