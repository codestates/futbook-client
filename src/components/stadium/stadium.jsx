import React from "react";
import StadiumItem from "../stadium_item/stadium_item";
import styles from "./stadium.module.css";

function Stadium() {
  return (
    <div className={styles.stadium}>
      <h1>예약가능한 풋살장 현황</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            <StadiumItem
              src="images/inside_football1.jpeg"
              text="서울특별시 강남구 코드로 1길 가 풋살장"
              label="실내"
              path="/main"
            />
            <StadiumItem
              src="images/inside_football2.jpeg"
              text="서울특별시 강남구 코드로 2길 나 풋살장"
              label="실내"
              path="/main"
            />
            <StadiumItem
              src="images/outside_football1.jpeg"
              text="서울특별시 강남구 코드로 3길 다 풋살장"
              label="실외"
              path="/main"
            />
            <StadiumItem
              src="images/outside_football2.jpeg"
              text="서울특별시 강남구 코드로 4길 라 풋살장"
              label="실외"
              path="/main"
            />
            <StadiumItem
              src="images/outside_football3.jpeg"
              text="서울특별시 강남구 코드로 5길 마 풋살장"
              label="실외"
              path="/main"
            />
          </ul>
          <ul className={styles.items}></ul>
        </div>
      </div>
    </div>
  );
}

export default Stadium;
