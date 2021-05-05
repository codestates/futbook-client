import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./checkPage.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import CheckItem from "../../components/check_item/check_item";

const CheckPage = () => {
  const bookingState = useSelector((state) => state.bookingReducer);
  const tokenState = useSelector((state) => state.signReducer);

  const [modalInfo, setModalInfo] = useState(null);
  const [bookingDatas, setBookingDatas] = useState(bookingState.bookingData);

  // UI를 조건분기를 위한 임의 데이터
  const isExist = true;

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

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <>
      <Navbar link="listPage" accessToken={tokenState.sign.accessToken} />
      <div>
        <div className={styles.title}>
          <h1>예약현황</h1>
        </div>
        {isExist ? (
          <CheckItem
            img="/images/inside_football1.jpeg"
            date="2021/05/22"
            title="가 풋살장"
            address="서울특별시 강남구 코드로 1길 스테이츠빌딩 1층"
            label="실내"
            price="200,000"
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default CheckPage;
