import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/modal/modal";
import Navbar from "../../components/navbar/navbar";
import VideoSection from "../../components/video_section/video_section";
import Stadium from "../../components/stadium/stadium";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router";
import { fetchData, getAllFutsalInfo, getUserInfo } from "../../actions";

const URL = process.env.REACT_APP_SERVER_URL;
const MainPage = props => {
  const userState = useSelector(state => state.userReducer);
  const futsalState = useSelector(state => state.futsalReducer);
  const tokenState = useSelector(state => state.signReducer);

  const dispatch = useDispatch();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  console.log("user", userState.userInfo);
  console.log("futsal", futsalState.futsalData);

  useEffect(() => {
    if (location.state !== undefined) {
      window.scroll({
        top: 990,
        behavior: "smooth",
      });
    }
    if (tokenState.sign.accessToken) {
      dispatch(
        fetchData(
          `${URL}/user/userinfo`,
          {
            headers: { authorization: `Bearer ${tokenState.sign.accessToken}` },
          },
          getUserInfo
        )
      );
    }
    dispatch(fetchData(`${URL}/futsal/allinfo`, {}, getAllFutsalInfo));
  }, []);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Navbar></Navbar>
      <VideoSection></VideoSection>
      <Stadium
        openModal={openModal}
        futsalDatas={futsalState.futsalData}
      ></Stadium>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
