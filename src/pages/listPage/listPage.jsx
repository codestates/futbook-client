import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./listPage.module.css";
import ListItem from "../../components/list_item/list_item";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
import ModalSuccess from "../../components/modal_success/modal_success";
import ModalFail from "../../components/modal_fail/modal_fail";
const ListPage = () => {
  const futsalState = useSelector((state) => state.futsalReducer);
  const tokenState = useSelector((state) => state.signReducer);

  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  const [modalInfo, setModalInfo] = useState(null);
  const [futsalDatas, setFutsalDatas] = useState(futsalState.futsalData);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openSuccess = () => {
    setShowSuccess((prev) => !prev);
  };

  const openFail = () => {
    setShowFail((prev) => !prev);
  };

  const makePriceFormat = (price) => {
    price = String(price).slice(0, 3) + "," + String(price).slice(3);
    return `${price}원`;
  };

  const makeDateFormat = (day) => {
    const aux = (num) => {
      if (num < 10) {
        return "0" + String(num);
      } else {
        return String(num);
      }
    };

    const today = day || new Date();

    const yyyy = today.getFullYear();
    const month = aux(today.getMonth() + 1);
    const dd = aux(today.getDate());

    const format = [yyyy, month, dd].join("/");

    return format;
  };

  const handleModal = (modalInfo) => {
    setModalInfo({ ...modalInfo, fee: makePriceFormat(modalInfo.fee) });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);
  return (
    <>
      <Modal
        makeDateFormat={makeDateFormat}
        modalInfo={modalInfo}
        showModal={showModal}
        setShowModal={setShowModal}
        openSuccess={openSuccess}
        openFail={openFail}
      ></Modal>
      <ModalSuccess showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
      <ModalFail showFail={showFail} setShowFail={setShowFail} />
      <Navbar link="listPage" acessToken={tokenState.sign.acessToken} />
      <div>
        <div className={styles.title}>
          <h1>풋살장 예약하기</h1>
        </div>
        {futsalDatas.map((data, idx) => (
          <ListItem
            key={idx}
            openModal={openModal}
            img={data.thumnail}
            date={makeDateFormat()}
            title={data.name}
            address={data.location}
            label={data.stageType}
            price={makePriceFormat(data.fee)}
            handleModal={handleModal}
            data={data}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ListPage;
