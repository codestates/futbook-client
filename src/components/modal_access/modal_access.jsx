import React, { useRef, useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router";
import { useSpring, animated } from "react-spring";
import styles from "./modal_access.module.css";

const AccessModal = ({ showNoAccessModal, setShowNoAccessModal }) => {
  const history = useHistory();
  const backRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showNoAccessModal ? 1 : 0,
    transform: showNoAccessModal ? `translateY(5%)` : `translateY(-100%)`,
  });

  const closeFail = e => {
    if (backRef.current === e.target) {
      setShowNoAccessModal(false);
    }
  };

  const handleBtnLogin = () => {
    history.push("/");
  };

  const keyPress = useCallback(
    e => {
      if (showNoAccessModal && e.key === "Escape") {
        setShowNoAccessModal(false);
      }
    },
    [setShowNoAccessModal, showNoAccessModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showNoAccessModal ? (
        <div className={styles.back} onClick={closeFail} ref={backRef}>
          <animated.div style={animation}>
            <div className={styles.wrap}>
              <div
                className={styles.close}
                onClick={() => setShowNoAccessModal(prev => !prev)}
              >
                <i className="fas fa-times"></i>
              </div>
              <div className={styles.msg}>
                <i class="fas fa-exclamation-circle"></i>
                <p>로그인이 필요한 페이지입니다.</p>
              </div>
              <button className={styles.btn_signIn} onClick={handleBtnLogin}>
                로그인하러 가기
              </button>
              <button
                className={styles.btn_close}
                onClick={() => setShowNoAccessModal(prev => !prev)}
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
