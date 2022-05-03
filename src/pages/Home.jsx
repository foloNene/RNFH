import React from "react";
import Announcement from "../components/Announcement";
import Mission from "../components/Mission";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <br />
      <br />
      <Mission />
    </div>
  );
};

export default Home;
