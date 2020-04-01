import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import Layout from "../Layout";

export default function Home(props) {
  return (
    <div>
      <Layout>
        <Banner />
        <Slider />
      </Layout>
    </div>
  );
}
