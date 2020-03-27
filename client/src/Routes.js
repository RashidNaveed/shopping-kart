import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Men from "./components/catagories/Men";
import Women from "./components/catagories/Women";
// import AddProduct from "./components/Admin/AddProduct";
// import DeleteProduct from "./components/Admin/DeleteProduct";
// import ItemTable from "./components/Admin/ItemTable";
import AdminControl from "./components/Admin/AdminControl";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          {/* <Route exact path="/products/add" component={AddProduct} /> */}
          {/* <Route exact path="/products/edit" component={ItemTable} /> */}
          <Route exact path="/admin" component={AdminControl} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
