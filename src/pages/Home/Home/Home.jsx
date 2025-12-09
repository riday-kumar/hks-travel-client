import React from "react";
import Banner from "../Banner/Banner";
import Advartisements from "../Advartisements/Advartisements";
import LatestTickets from "../LatestTickets/LatestTickets";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advartisements></Advartisements>
      <LatestTickets></LatestTickets>
    </div>
  );
};

export default Home;
