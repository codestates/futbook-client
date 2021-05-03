import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import Navbar from "../../components/navbar/navbar";
import VideoSection from "../../components/video_section/video_section";
import Stadium from "../../components/stadium/stadium";
import Footer from "../../components/footer/footer";
const MainPage = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
