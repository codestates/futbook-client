import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./mainModal.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
export const MainModal = ({ showModal, setShowModal, modalInfo }) => {
  const backRef = useRef();
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(5%)` : `translateY(-100%)`,
  });

  const closeModal = e => {
    if (backRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
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

  return (
    <>
      {showModal ? (
        <div className={styles.back} onClick={closeModal} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.container}>
                <div className={styles.title}>
                  <p>{modalInfo.name}</p>
                </div>
                <img
                  className={styles.pic}
                  src={modalInfo.thumnail}
                  alt="futsal"
                ></img>
                <div className={styles.location}>
                  <i class="fas fa-map-marked-alt"></i>
                  <p>{modalInfo.location}</p>
                </div>
                <div className={styles.price}>
                  <i class="fab fa-bitcoin"></i>
                  <p>{modalInfo.fee}</p>
                </div>
                <div className={styles.description}>
                  <div className={styles.description_tile}>
                    <i class="fas fa-layer-group"></i>
                    <p>시설 스펙</p>
                  </div>
                  <p>{modalInfo.description}</p>
                </div>
              </div>
              <div
                className={styles.close}
                onClick={() => setShowModal(prev => !prev)}
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

export default MainModal;
