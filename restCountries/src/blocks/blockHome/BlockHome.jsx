import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Filter from "../../components/filter/Filter";
import styles from "./BlockHome.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import BlockAllcountries from "../blockAllCountries/BlockAllcountries";
import BlockFiltered from "../blockFiltered/BlockFiltered";
import NavBar from "../../components/navBar/NavBar";
import { getData, replaceNamePlaceholder } from "../../services/api";
import { GET_ALL, GET_BY_NAME } from "../../services/endPoints";
import Spinner from "../../components/spinner/Spinner";

const BlockHome = () => {
  const { state } = useContext(DarkModeContext);
  const [regionName, setregionName] = useState([]);
  const [allCountries, setallCountries] = useState(null);
  const [countryName, setcountryName] = useState("");

  const endPoint = replaceNamePlaceholder(GET_BY_NAME, countryName);

  useEffect(() => {
    getData(GET_ALL, setallCountries);
    // getData(endPoint, setcountryName).then((res) =>
    //   console.log(res.data)
    // );
  }, []);
  // console.log(regionName);

  const handleCountrySearch = (e) => {
    setcountryName(e.target.value);
    // console.log(e)
    const paisesBuscados = [];
    for(let i = 0 ; i < allCountries.length; i++){
      if(allCountries[i].name.common.includes(e.target.value)){
        paisesBuscados.push(allCountries[i]);
      }
    }
    console.log(paisesBuscados)
  };


  // if (!countryName) {
  //   return <Spinner />;
  // }
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
          <BlockAllcountries allCountries={allCountries} />
        )}
      </div>
    </div>
  );
};

export default BlockHome;
