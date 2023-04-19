import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);

  return (
    <div
      className={styles.homeContainer}
      style={{ backgroundColor: `${state.background}` }}
    >
      <section className={styles.upper}>
        <Input />
        <Filter />
      </section>
      <BlockAllcountries/>
    
    </div>
  );
};

export default BlockHome;
