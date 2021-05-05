import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./modal_access.module.css";

const AccessModal = ({ showFail, setShowFail }) => {
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
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
              <div className={styles.msg}>
                <i class="fas fa-exclamation-circle"></i>
                <p>로그인이 필요한 페이지입니다.</p>
              </div>
              <button className={styles.btn_signIn}>로그인하러 가기</button>
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

export default AccessModal;
