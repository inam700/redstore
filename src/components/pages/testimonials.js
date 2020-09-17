import React, { Component } from "react";
import user1 from "../../resources/images/user-1.png";
import user2 from "../../resources/images/user-2.png";
import user3 from "../../resources/images/user-3.png";

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        name: "Black Widow",
        desc:
          "Hello That was an amazing experience working with this Man. Hello That was an amazing experience working with this Man.Hello That was an amazing experience working with this Man.",
        image: user3,
      },
      {
        id: 2,
        name: "Black Widow",
        desc:
          "Hello That was an amazing experience working with this Man. Hello That was an amazing experience working with this Man.Hello That was an amazing experience working with this Man.",

        image: user2,
      },
      {
        id: 3,
        name: "Black Widow",
        desc:
          "Hello That was an amazing experience working with this Man. Hello That was an amazing experience working with this Man.Hello That was an amazing experience working with this Man.",
        image: user1,
      },
    ],
  };
  render() {
    return (
      <div className="testimonial">
        <div className="container-sm">
          <div className="row">
            {this.state.testimonials.map((item) => {
              return (
                <div className="col-3" key={item.id}>
                  <i className="fas fa-quote-left"></i>
                  <p>{item.desc}</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
