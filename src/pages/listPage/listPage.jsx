import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./listPage.module.css";
import ListItem from "../../components/list_item/list_item";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
const ListPage = () => {
  const futsalState = useSelector(state => state.futsalReducer);

  const [showModal, setShowModal] = useState(false);

  const [futsalDatas, setFutsalDatas] = useState(futsalState.futsalData);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const makePriceFormat = price => {
    price = String(price).slice(0, 3) + "," + String(price).slice(3);
    return `${price}원`;
  };

  const makeDateFormat = () => {
    const aux = num => {
      if (num < 10) {
        return "0" + String(num);
      } else {
        return String(num);
      }
    };

    const today = new Date();

    const yyyy = today.getFullYear();
    const month = aux(today.getMonth() + 1);
    const dd = aux(today.getDate());

    const format = [yyyy, month, dd].join("/");

    return format;
  };

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Navbar link="listPage" />
      <div>
        <div className={styles.title}>
          <h1>풋살장 예약하기</h1>
        </div>
        {futsalDatas.map((data, idx) => (
          <ListItem
            openModal={openModal}
            img={data.thumnail}
            date={makeDateFormat()}
            title={data.name}
            address={data.location}
            label={data.stageType}
            price={makePriceFormat(data.fee)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ListPage;
