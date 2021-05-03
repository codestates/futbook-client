import React, { useEffect } from "react";
import styles from "./listPage.module.css";
import ListItem from "../../components/list_item/list_item";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function ListPage() {
  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);
  return (
    <>
      <Navbar link="listPage" />
      <div>
        <div className={styles.title}>
          <h1>풋살장 예약하기</h1>
        </div>
        <ListItem
          img="/images/inside_football1.jpeg"
          date="2021/05/01"
          title="가 풋살장"
          address="서울특별시 강남구 코드로 1길 스테이츠빌딩 1층"
          label="실내"
          price="11,0000원"
        />

        <ListItem
          img="/images/inside_football2.jpeg"
          date="2021/05/01"
          title="나 풋살장"
          address="서울특별시 강남구 코드로 2길 스테이츠빌딩 2층"
          label="실내"
          price="12,0000원"
        />

        <ListItem
          img="/images/outside_football1.jpeg"
          date="2021/05/01"
          title="다 풋살장"
          address="서울특별시 강남구 코드로 3길 스테이츠빌딩 3층"
          label="실외"
          price="13,0000원"
        />
        <ListItem
          img="/images/outside_football2.jpeg"
          date="2021/05/01"
          title="라 풋살장"
          address="서울특별시 강남구 코드로 4길"
          label="실외"
          price="14,0000원"
        />
        <ListItem
          img="/images/outside_football3.jpeg"
          date="2021/05/01"
          title="마 풋살장"
          address="서울특별시 강남구 코드로 5길"
          label="실외"
          price="15,0000원"
        />
      </div>
      <Footer />
    </>
  );
}

export default ListPage;
