import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Men from "./components/catagories/Men";
import Women from "./components/catagories/Women";

import AdminControl from "./components/admin/AdminControl";
import ProductList from "./components/productList/ProductList";
import ProductDiscription from "./components/productList/ProductDiscription";
import ShowCart from "./components/cart/ShowCart";
import Checkout from "./components/checkout/Checkout";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />

          <Route exact path="/admin" component={AdminControl} />
          <Route path={`/productlist/:tag`} component={ProductList} />
          <Route
            path={`/productdiscription/:id`}
            component={ProductDiscription}
          />
          <Route path="/cart" component={ShowCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
