import React from "react";
import Button from "../button/button";
import styles from "./video_section.module.css";
const VideoSection = ({ accessToken, openNoAccessModal }) => {
  return (
    <div className={styles.container}>
      <video src="/videos/free_football_video.mp4" autoPlay loop muted />
      <h1>풋살장 예약은 풋북.com</h1>
      <p>더이상 기다리지 마세요!</p>
      <div className={styles.btns}>
        {accessToken ? (
          <Button
            className={styles.btn}
            path="/list"
            buttonStyle="two"
            buttonSize="large"
          >
            예약하기
          </Button>
        ) : (
          <button className={styles.noAccess_btn} onClick={openNoAccessModal}>
            예약하기
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
