import React, { useEffect, useState, useContext } from "react";
import CardCountry from "../../components/card/CardCountry";
import { getData } from "../../services/api";
import Spinner from "../../components/spinner/Spinner";
import styles from "./Blockfiltered.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";

const BlockFiltered = ({ regionName, countriesFiltered }) => {
  console.log(countriesFiltered)
  const { state } = useContext(DarkModeContext);
  const GET_REGION_EUROPE = "region/europe";
  const GET_REGION_OCEANIA = "region/oceania";
  const GET_REGION_ASIA = "region/asia";
  const GET_REGION_AMERICAS = "region/americas";
  const GET_REGION_AFRICA = "region/africa";
  const GET_ALL = "all";

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
    } else if (regionName == "All") {
      return GET_ALL;
    }
  };
  
  const [region, setregion] = useState(null);

  useEffect(() => {
    getData(handleRegion(), setregion).then((res) => setregion(res.data));
  }, [regionName]);

  
  if (!region) {
    return <Spinner />;
  }

  return (
    <>
      {regionName == "All" ? (
        null
      ) : <h1 className={styles.region} style={{ color: `${state.text}` }}>
      {regionName}
    </h1>}
   {countriesFiltered.length > 0 ? 
     <div className={styles.gridAllCountries}>
     {countriesFiltered.map((country, index) => {
       return <CardCountry key={index} country={country} />;
     })}
   </div>:
     <div className={styles.gridAllCountries}>
     {region.map((country, index) => {
       return <CardCountry key={index} country={country} />;
     })}
   </div>
  }
    
    </>
  );
};

export default BlockFiltered;
