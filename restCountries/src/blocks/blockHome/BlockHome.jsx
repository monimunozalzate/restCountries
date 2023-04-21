import React, { useContext, useState } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";
import BlockFiltered from "../blockFiltered/BlockFiltered";
import NavBar from "../../components/navBar/NavBar";

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);
  const [regionName, setregionName] = useState([]);
  // console.log(regionName);
  return (
    <div  style={{
      backgroundColor: `${state.background}`,
    }}>
    <NavBar/>
    <div
      className={styles.homeContainer}
    >
      <section className={styles.upper}>
        <Input className={styles.search}/>
        <Filter className={styles.filter} regionName={regionName} setregionName={setregionName} />
      </section>
      {!regionName.length == 0 ? (
        <BlockFiltered regionName={regionName} setregionName={setregionName} />
      ) : (
        <BlockAllcountries />
      )}
    </div>
    </div >
  );
};

export default BlockHome;
