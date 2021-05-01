import React from "react";
import Navbar from "../../components/navbar/navbar";
import VideoSection from "../../components/video_section/video_section";
import Stadium from "../../components/stadium/stadium";
import Footer from "../../components/footer/footer";
const MainPage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <VideoSection></VideoSection>
      <Stadium></Stadium>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
