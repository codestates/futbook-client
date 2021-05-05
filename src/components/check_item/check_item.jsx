import React from "react";
import styles from "./check_item.module.css";

const CheckItem = ({ img, date, title, address, label, price }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={img} alt="check" />
      <div className={styles.info}>
        <div className={styles.info_top}>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.title}>{title}</h3>
          <p>&nbsp;</p>
          <p className={styles.address}>{address}</p>
          <p className={styles.price}>{`${price}원`}</p>
        </div>
        <div className={styles.info_bottom}>
          <div>
            <p
              className={
                label === "실외"
                  ? `${styles.label}`
                  : `${styles.label} ${styles.inside}`
              }
            >
              {label}
            </p>
          </div>
          <div className={styles.cancel}>
            <button className={styles.cancel_btn}>예약취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckItem;
