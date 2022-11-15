import React from "react";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto mt-5 flex justify-center">
        <InfoCards></InfoCards>
      </div>
      <div className="max-w-7xl mx-auto mt-5 flex justify-center">
        <Services></Services>
      </div>
      <div className="md:mt-32 m-10">
        <MakeAppointment></MakeAppointment>
      </div>
    </div>
  );
};

export default Home;
