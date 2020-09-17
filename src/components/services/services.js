import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Services extends Component {
  state = {
    allServices: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/services")
      .then((res) => {
        this.setState({
          allServices: res.data.services,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { allServices } = this.state;
    return (
      <div className="container-sm">
        <h1>ALL Services</h1>
        <div className="row">
          {allServices.map((item) => {
            return (
              <div className="col-4" key={item._id}>
                {/* <Link to={`/service-details/${item._id}`}>
                  <img src={allServices.serviceImage} alt="" />
                </Link> */}
                <h4>{allServices.serviceTitle}</h4>
                <p>{allServices.description}</p>
                {console.log(allServices)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Services;
