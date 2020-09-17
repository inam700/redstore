import React from "react";
import "./resources/styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages";
import Products from "./components/products/products";
import Header from "./components/header_footer/header";
import Footer from "./components/header_footer/footer";
import SingleProduct from "./components/products/singleProduct";
import Contact from "./components/contact";
import Services from "./components/services/services";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={Products} />
          <Route path="/product-details/:productId" component={SingleProduct} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
