import Footer from "components/Common/Footer/Footer";
import Banner from "components/Home/Banner/Banner";
import BannerTitle from "components/Home/BannerTitle/BannerTitle";
import RecentFindCard from "components/Home/RecentFindCard/RecentFindCard";
import Saying from "components/Home/SayIng/Saying";
import SecondHandCard from "components/Home/SecondHandCard/SecondHandCard";
import SignUp from "components/Home/SignUp/SignUp";
import React from "react";
import NavBar from "../Home/NavBar/NavBar";

const HomePages = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <BannerTitle />
      <RecentFindCard />
      <SecondHandCard />
      <Saying />
      <SignUp />
      <Footer />
    </>
  );
};

export default HomePages;
