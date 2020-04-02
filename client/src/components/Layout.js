import React, { Component } from "react";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div>{children}</div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}
