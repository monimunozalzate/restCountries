import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";
import BlockFiltered from "../blockFiltered/BlockFiltered";
import NavBar from "../../components/navBar/NavBar";
import { getData } from "../../services/api";

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);
  const [regionName, setregionName] = useState([]);
  const [allCountries, setallCountries] = useState([]);
  const [countryName, setcountryName] = useState("");
  const [countriesFiltered, setCountriesFiltered] = useState([]);

  const GET_ALL = "all";
  
  useEffect(() => {
    getData(GET_ALL, setallCountries);
  }, []);

  const handleCountrySearch = (e) => {
    setcountryName(e.target.value);

    const paisesBuscados = [];
    for (let i = 0; i < allCountries.length; i++) {
      if (
        allCountries[i].name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        paisesBuscados.push(allCountries[i]);
      }
    }
    setCountriesFiltered(paisesBuscados);
  };

  return (
    <div
      style={{
        backgroundColor: `${state.background}`,
      }}
    >
      <NavBar />
      <div className={styles.homeContainer}>
        <section className={styles.upper}>
          <Input
            className={styles.search}
            countryName={countryName}
            handleCountrySearch={handleCountrySearch}
            disabled={!regionName.length == 0}
          />
          <Filter
            className={styles.filter}
            regionName={regionName}
            setregionName={setregionName}
          />
        </section>
        {!regionName.length == 0 ? (
          <BlockFiltered
            regionName={regionName}
            setregionName={setregionName}
          />
        ) : (
          <BlockAllcountries
            allCountries={
              countriesFiltered.length > 0 ? countriesFiltered : allCountries
            }
          />
        )}
      </div>
    </div>
  );
};

export default BlockHome;
