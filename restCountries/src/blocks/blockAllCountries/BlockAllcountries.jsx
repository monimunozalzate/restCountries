import React, { useState, useEffect } from "react";
import CardCountry from "../../components/card/CardCountry";
import { getData } from "../../services/api";
import { GET_ALL } from "../../services/endPoints";
import Spinner from "../../components/spinner/Spinner";
import styles from './BlockAllCountries.module.css'

const BlockAllcountries = () => {
  const [allCountries, setallCountries] = useState(null);
  useEffect(() => {
    getData(GET_ALL, setallCountries);
  }, []);
//   console.log(allCountries);

  if (!allCountries) {
    return <Spinner />;
  }
  return (
    <div className={styles.gridAllCountries}>
      {allCountries.map((country, index )=> {
        return <CardCountry key={index} country={country} />;
      })}
    </div>
  );
};

export default BlockAllcountries;
