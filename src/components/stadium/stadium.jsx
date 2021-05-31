import React from "react";
import StadiumItem from "../stadium_item/stadium_item";
import styles from "./stadium.module.css";

const Stadium = ({ openModal, futsalDatas, getModalInfo }) => {
  return (
    <div className={styles.stadium}>
      <h1>예약가능한 풋살장 현황</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            {futsalDatas.map((data, idx) => (
              <StadiumItem
                key={idx}
                openModal={openModal}
                img={data.thumnail}
                title={`${data.location} ${data.name}`}
                label={data.stageType}
                data={data}
                getModalInfo={getModalInfo}
                path="/main"
              />
            ))}
          </ul>
          <ul className={styles.items}></ul>
        </div>
      </div>
    </div>
  );
};

export default Stadium;
