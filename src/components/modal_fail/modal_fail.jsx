import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./modal_fail.module.css";

const ModalFail = ({ showFail, setShowFail }) => {
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showFail ? 1 : 0,
    transform: showFail ? `translateY(5%)` : `translateY(-100%)`,
  });

  const closeFail = e => {
    if (backRef.current === e.target) {
      setShowFail(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (showFail && e.key === "Escape") {
        setShowFail(false);
      }
    },
    [setShowFail, showFail]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showFail ? (
        <div className={styles.back} onClick={closeFail} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div
                className={styles.close}
                onClick={() => setShowFail(prev => !prev)}
              >
                <i className="fas fa-times"></i>
              </div>

              <div className={styles.container}>
                <div className={styles.title}>
                  <p className={styles.title_msg}>예약실패</p>
                  <i className="fas fa-times"></i>
                </div>
                <p className={styles.side_msg}>
                  *해당 날짜는 이미 예약이 완료되었습니다.
                </p>
              </div>
              <button
                className={styles.btn_close}
                onClick={() => setShowFail(prev => !prev)}
              >
                닫기
              </button>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default ModalFail;
