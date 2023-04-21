import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link, useParams } from "react-router-dom";
import { replaceNamePlaceholder, getData } from "../../services/api";
import { GET_BY_NAME } from "../../services/endPoints";
import Spinner from "../../components/spinner/Spinner";
import WestIcon from "@mui/icons-material/West";
import { DarkModeContext } from "../../context/DarkmodeContext";
import styles from "./BlockDetails.module.css";

const BlockDetails = () => {
  const { name } = useParams();
  const [countryDetail, setcountryDetail] = useState(null);
  const { state } = useContext(DarkModeContext);

  let noAccent = name.replace("é", "e");
  const endPoint = replaceNamePlaceholder(GET_BY_NAME, noAccent);

  useEffect(() => {
    getData(endPoint, setcountryDetail).then((res) =>
      setcountryDetail(res.data)
    );
  }, []);

  if (!countryDetail) {
    return <Spinner />;
  }
  console.log(countryDetail);

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: `${state.background}`
        }}
        className={styles.detailsContainer}
      >
        <Link
          to="/"
          style={{
            backgroundColor: `${state.elements}`,
            color: `${state.text}`,
          }}
          id={styles.back}
        >
          <WestIcon />
          <p>Back</p>
        </Link>
        {countryDetail.map((country) => {
          return (
            <div key={country.name.common} className={styles.main}>
              <section className={styles.left}>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className={styles.flag}
                />
              </section>
              <section
                style={{ color: `${state.text}` }}
                className={styles.right}
              >
                <h1 className={styles.countryName}>{country.name.common}</h1>
                <div className={styles.flex}>
                  <div>
                    <p>
                      Native Name: <span>{country.name.official} </span>
                    </p>
                    <p>
                      Population: <span>{country.population} </span>
                    </p>
                    <p>
                      Region: <span>{country.region} </span>
                    </p>
                    <p>
                      SubRegion: <span> {country.subregion}</span>
                    </p>
                    <p>
                      Capital: <span>{country.capital} </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Top Level Domain: <span>{country.tld} </span>
                    </p>
                    <p>
                      Currencies:
                      {Object.entries(country.currencies).map((currencie) => {
                        return (
                          <span key={currencie.length}> {currencie[0]}</span>
                        );
                      })}
                    </p>
                    <p>
                      Languages:
                      {Object.entries(country.languages).map(([key, value]) => {
                        return <span key={key}> {value} </span>;
                      })}
                    </p>
                  </div>
                </div>
                <div className={styles.borders}>
                  <p style={{ width: "11rem" }}>Border Countries:</p>
                  {(country.borders) ? (country.borders).map((border) => {
                    return (
                      <Link
                        to="/"
                        key={border}
                        style={{
                          color: `${state.text}`,
                          backgroundColor: `${state.elements}`,
                        }}
                        className={styles.links}
                      >
                        {" "}
                        {border}
                      </Link>
                    );
                  }):
                  <span>This country doesn't have borders</span>}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlockDetails;