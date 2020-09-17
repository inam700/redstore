import React, { Component } from "react";
import category1 from "../../resources/images/category-1.jpg";
import category2 from "../../resources/images/category-2.jpg";
import category3 from "../../resources/images/category-3.jpg";

class Categories extends Component {
  state = {
    categories: [
      {
        id: 1,
        image: category2,
      },
      {
        id: 2,
        image: category3,
      },
      {
        id: 3,
        image: category1,
      },
    ],
  };
  render() {
    return (
      <div className="categories">
        <div className="container-sm">
          <div className="row">
            {this.state.categories.map((item) => {
              return (
                <div className="col-3" key={item.id}>
                  <img src={item.image} alt="Category" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
