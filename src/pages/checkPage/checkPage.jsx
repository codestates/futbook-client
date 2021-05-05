import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./checkPage.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import CheckItem from "../../components/check_item/check_item";
import { checkBook, fetchData } from "../../actions";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
const CheckPage = () => {
  const bookingState = useSelector(state => state.bookingReducer);
  const tokenState = useSelector(state => state.signReducer);
  const userState = useSelector(state => state.userReducer);
  const futsalState = useSelector(state => state.futsalReducer);
  const dispatch = useDispatch();
  const [myBooking, setMyBooking] = useState(null);
  console.log("hi,there");
  const length = bookingState.bookingData.length;
  useEffect(() => {
    console.log("hi");
    window.scroll({
      top: 0,
    });
    dispatch(
      fetchData(
        `${URL}/booking/checkbook`,
        {
          headers: { authorization: `Bearer ${tokenState.sign.accessToken}` },
        },
        checkBook
      )
    );

    setMyBooking(bookingState.bookingData);
  }, [length]);

  const futsalDatas = futsalState.futsalData;
  const userId = userState.userInfo.id;

  // UI를 조건분기를 위한 임의 데이터
  // console.log(myBooking);
  const makePriceFormat = price => {
    price = String(price).slice(0, 3) + "," + String(price).slice(3);
    return `${price}원`;
  };

  const handleBtnDelete = async (futsal_Id, bookingDate) => {
    try {
      await axios.delete(`${URL}/booking/cancelbook`, {
        data: { futsal_Id, user_Id: userId, bookingDate },
        headers: { authorization: `Bearer ${tokenState.sign.accessToken}` },
      });

      dispatch(
        fetchData(
          `${URL}/booking/checkbook`,
          {
            headers: { authorization: `Bearer ${tokenState.sign.accessToken}` },
          },
          checkBook
        )
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Navbar link="listPage" accessToken={tokenState.sign.accessToken} />
      <div>
        <div className={styles.title}>
          <h1>예약현황</h1>
        </div>
        {Array.isArray(myBooking) && length !== 0 ? (
          myBooking.map(bookData => (
            <CheckItem
              futsalData={futsalDatas.find(
                data => data.id === bookData.futsal_Id
              )}
              bookDate={bookData.bookingDate}
              makePriceFormat={makePriceFormat}
              handleBtnDelete={handleBtnDelete}
            />
          ))
        ) : (
          <div className={styles.msg}>
            현재 예약된 풋살장이 존재하지 않습니다.
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CheckPage;
