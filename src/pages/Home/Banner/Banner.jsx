import React from "react";
import banner from "../../../assets/heroOne.webp";
import Container from "../../../components/Container";

const Banner = () => {
  return (
    <div className="w-full">
      <img className="w-full min-h-96" src={banner} alt="" />
      <Container>
        <form className="border-2 border-gray-200/30 shadow-xl py-10 px-3 rounded-lg">
          <fieldset className="fieldset grid grid-cols-5">
            <div>
              <label className="label">Depart From</label>
              <input
                className="input"
                placeholder=""
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="label">Depart From</label>
              <input className="input" placeholder="" type="text" name="" />
            </div>
            <div>
              <label className="label">Journey Date</label>
              <input
                className="input"
                placeholder=""
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="label">Person Number</label>
              <input
                className="input"
                placeholder=""
                type="number"
                name=""
                id=""
              />
            </div>
            <div>
              <input className="input" type="submit" value="Search" />
            </div>
          </fieldset>
        </form>
      </Container>
    </div>
  );
};

export default Banner;
