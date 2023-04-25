import React from "react";
import CardCountry from "../../components/card/CardCountry";
import Spinner from "../../components/spinner/Spinner";
import styles from './BlockAllCountries.module.css'

const BlockAllcountries = ({allCountries}) => {
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
