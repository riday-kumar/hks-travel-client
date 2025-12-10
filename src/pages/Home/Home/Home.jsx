import React from "react";
import Banner from "../Banner/Banner";
import Advartisements from "../Advartisements/Advartisements";
import LatestTickets from "../LatestTickets/LatestTickets";
import PopularRoutes from "../PopularRoutes/PopularRoutes";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
      <Banner
        title="Online Ticketing Made Easy!"
        subTitle="Buy tickets online hassle-free"
      ></Banner>
      <Advartisements></Advartisements>
      <LatestTickets></LatestTickets>
      <PopularRoutes></PopularRoutes>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
