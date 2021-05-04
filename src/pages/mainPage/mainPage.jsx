import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/modal";
import Navbar from "../../components/navbar/navbar";
import VideoSection from "../../components/video_section/video_section";
import Stadium from "../../components/stadium/stadium";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router";
const MainPage = (props) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (location.state !== undefined) {
      window.scroll({
        top: 990,
        behavior: "smooth",
      });
    }
  });

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Navbar></Navbar>
      <VideoSection></VideoSection>
      <Stadium openModal={openModal}></Stadium>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
