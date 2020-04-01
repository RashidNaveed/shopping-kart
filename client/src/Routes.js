import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Men from "./components/catagories/Men";
import Women from "./components/catagories/Women";
// import AddProduct from "./components/Admin/AddProduct";
// import DeleteProduct from "./components/Admin/DeleteProduct";
// import ItemTable from "./components/Admin/ItemTable";
import AdminControl from "./components/admin/AdminControl";
import ProductList from "./components/productList/ProductList";
import ProductDiscription from "./components/productList/ProductDiscription";
import ShowCart from "./components/cart/ShowCart";
import Header from "./components/homepage/Header";

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
          <Route path={`/productlist/:tag`} component={ProductList} />
          <Route
            path={`/productdiscription/:id`}
            component={ProductDiscription}
          />
          <Route path="/cart" component={ShowCart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
