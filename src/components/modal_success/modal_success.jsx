import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import styles from "./modal_success.module.css";

const ModalSuccess = ({ showSuccess, setShowSuccess }) => {
  const history = useHistory();
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showSuccess ? 1 : 0,
    transform: showSuccess ? `translateY(5%)` : `translateY(-100%)`,
  });

  const closeSuccess = (e) => {
    if (backRef.current === e.target) {
      setShowSuccess(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (showSuccess && e.key === "Escape") {
        setShowSuccess(false);
      }
    },
    [setShowSuccess, showSuccess]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showSuccess ? (
        <div className={styles.back} onClick={closeSuccess} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div className={styles.left}></div>
              <div className={styles.right}>
                <div className={styles.title}>
                  예약완료 &nbsp;
                  <i className={`fas fa-check ${styles.check}`}></i>
                </div>
                <button
                  className={styles.btn_check}
                  onClick={() => {
                    history.push({
                      pathname: "check",
                    });
                  }}
                >
                  예약확인
                </button>
              </div>
              <div
                className={styles.close}
                onClick={() => setShowSuccess((prev) => !prev)}
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

export default ModalSuccess;
