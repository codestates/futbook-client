import React from "react";
import styles from "./check_item.module.css";

const CheckItem = ({
  futsalData,
  bookDate,
  makePriceFormat,
  handleBtnDelete,
}) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={futsalData.thumnail} alt="check" />
      <div className={styles.info}>
        <div className={styles.info_top}>
          <p className={styles.date}>{bookDate}</p>
          <h3 className={styles.title}>{futsalData.name}</h3>
          <p>&nbsp;</p>
          <p className={styles.address}>{futsalData.location}</p>
          <p className={styles.price}>{makePriceFormat(futsalData.fee)}</p>
        </div>
        <div className={styles.info_bottom}>
          <div>
            <p
              className={
                `${futsalData.stageType}` === "실외"
                  ? `${styles.label}`
                  : `${styles.label} ${styles.inside}`
              }
            >
              {futsalData.stageType}
            </p>
          </div>
          <div className={styles.cancel}>
            <button
              className={styles.cancel_btn}
              onClick={() => {
                handleBtnDelete(futsalData.id, bookDate);
              }}
            >
              예약취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckItem;
