import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { DatePicker, Textarea } from "react-rainbow-components";
import styles from "./modal.module.css";
import Button from "../button/button";

export const Modal = ({ showModal, setShowModal }) => {
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

  const [datePicked, setDatePicked] = useState(new Date());

  return (
    <>
      {showModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.left}>
                <img
                  className={styles.pic}
                  src="/images/outside_football2.jpeg"
                  alt="futsal"
                ></img>
                <p className={styles.title}>
                  서울특별시 강남구 가 코드로 1길 가 풋살장
                </p>
                <p className={styles.price}>15,0000원</p>
              </div>
              <div className={styles.right}>
                <DatePicker
                  className={styles.datepick}
                  minDate={new Date()}
                  maxDate={new Date(2021, 4, 22)}
                  required
                  formatStyle="large"
                  placeholder="날짜를 선택해 주세요."
                  value={datePicked}
                  label="예약가능한 날짜"
                  onChange={(value) => setDatePicked(value)}
                />
                {console.log(datePicked)}
                <Textarea
                  className={styles.textarea}
                  style={styles.input}
                  name="description"
                  label="요청사항"
                  placeholder="요청사항이 있으시다면 적어주세요."
                />
                <button
                  className={styles.btn_booking}
                  onClick={() => setShowModal((prev) => !prev)}
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
