import React, { useEffect, useState, useContext } from "react";
import CardCountry from "../../components/card/CardCountry";
import { getData } from "../../services/api";
import {
  GET_REGION_AFRICA,
  GET_REGION_AMERICAS,
  GET_REGION_ASIA,
  GET_REGION_EUROPE,
  GET_REGION_OCEANIA,
} from "../../services/endPoints";
import Spinner from "../../components/spinner/Spinner";
import styles from "./Blockfiltered.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";

const BlockFiltered = ({ regionName }) => {
  const { state } = useContext(DarkModeContext);
// console.log(regionName)
  const handleRegion = () => {
    if (regionName == "Europe") {
      return GET_REGION_EUROPE;
    } else if (regionName == "Americas") {
      return GET_REGION_AMERICAS;
    } else if (regionName == "Africa") {
      return GET_REGION_AFRICA;
    } else if (regionName == "Asia") {
      return GET_REGION_ASIA;
    } else if (regionName == "Oceania") {
      return GET_REGION_OCEANIA;
    }
  };
  // console.log(handleRegion());
  const [region, setregion] = useState(null);

  useEffect(() => {
    getData(handleRegion(), setregion)
    .then((res) => setregion(res.data));
  }, [regionName]);

  if (!region) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className={styles.region} style={{ color: `${state.text}` }}>
        {regionName}
      </h1>
      <div className={styles.gridAllCountries}>
        {region.map((country, index) => {
          return <CardCountry key={index} country={country} />;
        })}
      </div>
    </>
  );
};

export default BlockFiltered;
