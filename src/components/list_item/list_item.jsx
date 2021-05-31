import React from "react";
import styles from "./list_item.module.css";

const ListItem = ({
  openModal,
  handleModal,
  img,
  date,
  title,
  address,
  label,
  price,
  data,
}) => {
  return (
    <div
      className={styles.item}
      onClick={() => {
        openModal();
        handleModal(data);
      }}
    >
      <img className={styles.image} src={img} alt="list" />
      <div className={styles.info}>
        <div className={styles.info_top}>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>&nbsp;</p>
          <p>{address}</p>
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
          <div className={styles.price}>
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
