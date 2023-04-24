import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";
import BlockFiltered from "../blockFiltered/BlockFiltered";
import NavBar from "../../components/navBar/NavBar";
import { getData } from "../../services/api";
import { GET_ALL } from '../../services/endpoints';

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);
  const [regionName, setregionName] = useState([]);
  const [allCountries, setallCountries] = useState(null);

  useEffect(() => {
    getData(GET_ALL, setallCountries);
  }, []);
  // console.log(regionName);

  return (
    <div  style={{
      backgroundColor: `${state.background}`,
    }}>
    <NavBar />
    <div
      className={styles.homeContainer}
    >
      <section className={styles.upper}>
        <Input className={styles.search} allCountries={allCountries}/>
        <Filter className={styles.filter} regionName={regionName} setregionName={setregionName} />
      </section>
      {!regionName.length == 0 ? (
        <BlockFiltered regionName={regionName} setregionName={setregionName} />
      ) : (
        <BlockAllcountries allCountries={allCountries} />
      )}
    </div>
    </div >
  );
};

export default BlockHome;
