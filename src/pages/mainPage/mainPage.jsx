import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainModal from "../../components/mainmodal/mainModal";
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
  const [modalInfo, setModalInfo] = useState(null);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

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

  const makePriceFormat = price => {
    price = String(price).slice(0, 3) + "," + String(price).slice(3);
    return `${price}원`;
  };

  const getModalInfo = modalInfo => {
    setModalInfo({ ...modalInfo, fee: makePriceFormat(modalInfo.fee) });
  };

  return (
    <>
      <MainModal
        modalInfo={modalInfo}
        showModal={showModal}
        setShowModal={setShowModal}
      ></MainModal>
      <Navbar accessToken={tokenState.sign.accessToken}></Navbar>
      <VideoSection></VideoSection>
      <Stadium
        openModal={openModal}
        futsalDatas={futsalState.futsalData}
        getModalInfo={getModalInfo}
      ></Stadium>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
