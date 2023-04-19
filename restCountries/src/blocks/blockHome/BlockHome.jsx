import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";
import BlockFiltered from "../blockFiltered/BlockFiltered";
import { getData } from "../../services/api";
import {
  GET_REGION_AFRICA,
  GET_REGION_AMERICAS,
  GET_REGION_ASIA,
  GET_REGION_EUROPE,
  GET_REGION_OCEANIA,
} from "../../services/endPoints";

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);
  const [regionName, setregionName] = useState([]);
  // console.log(regionName);
  return (
    <div
      className={styles.homeContainer}
      style={{ backgroundColor: `${state.background}` }}
    >
      <section className={styles.upper}>
        <Input />
        <Filter regionName={regionName} setregionName={setregionName} />
      </section>
      {!regionName.length == 0 ? (
        <BlockFiltered regionName={regionName} setregionName={setregionName} />
      ) : (
        <BlockAllcountries />
      )}
    </div>
  );
};

export default BlockHome;
