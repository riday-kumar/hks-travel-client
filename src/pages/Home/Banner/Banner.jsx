import React from "react";
import Container from "../../../components/Container";

const Banner = ({ title, subTitle }) => {
  return (
    <div className="bg-[url(/src/assets/banner-bg.jpg)] bg-black/30 bg-blend-overlay bg-no-repeat bg-cover flex justify-center items-center min-h-96">
      <Container>
        <div className="text-white">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-2xl font-medium">{subTitle}</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
