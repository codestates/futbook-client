import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { DatePicker, Textarea } from "react-rainbow-components";
import styles from "./modal.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
export const Modal = ({
  showModal,
  setShowModal,
  modalInfo,
  makeDateFormat,
  openSuccess,
}) => {
  const signState = useSelector((state) => state.signReducer);
  const [datePicked, setDatePicked] = useState(new Date());
  const [bookErrMsg, setbookErrMsg] = useState(null);
  const backRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(5%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (backRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (showModal && e.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleBookingBtn = async () => {
    try {
      const day = makeDateFormat(datePicked);
      const accessToken = signState.sign.accessToken;
      await axios.post(
        `${URL}/booking/bookfutsal`,
        { futsal_Id: modalInfo.id, bookingDate: day },
        { headers: { authorization: `Bearer ${accessToken}` } }
      );
      setShowModal((prev) => !prev);
      openSuccess();
    } catch (err) {
      setbookErrMsg("해당 날짜는 이미 예약이 완료된 날짜입니다.");
    }
  };

  return (
    <>
      {showModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.left}>
                <img
                  className={styles.pic}
                  src={modalInfo.thumnail}
                  alt="futsal"
                ></img>
                <p className={styles.title}>
                  {`${modalInfo.location} ${modalInfo.name}`}
                </p>
                <p className={styles.price}>{`${modalInfo.fee}`}</p>
              </div>
              <div className={styles.right}>
                <DatePicker
                  className={styles.datepick}
                  minDate={new Date()}
                  maxDate={new Date(2022, 1, 1)}
                  required
                  formatStyle="large"
                  placeholder="날짜를 선택해 주세요."
                  value={datePicked}
                  label="예약가능한 날짜"
                  onChange={(value) => setDatePicked(value)}
                />

                <Textarea
                  className={styles.textarea}
                  style={styles.input}
                  name="description"
                  label="요청사항"
                  placeholder="요청사항이 있으시다면 적어주세요."
                />
                <button
                  className={styles.btn_booking}
                  onClick={() => {
                    handleBookingBtn();
                  }}
                >
                  예약하기
                </button>
              </div>
              <div
                className={styles.close}
                onClick={() => setShowModal((prev) => !prev)}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
