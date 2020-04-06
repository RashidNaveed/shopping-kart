import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import Layout from "../Layout";

export default function Home(props) {
  const user = localStorage.getItem("users") || {};
  if (Object.keys(user).length === 0) {
    localStorage.setItem("users", JSON.stringify({}));
  }

  return (
    <div>
      <Layout>
        <Banner />
        <Slider />
      </Layout>
    </div>
  );
}
