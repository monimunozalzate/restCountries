import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Spinner from "../spinner/Spinner";
import styles from "./CardCountry.module.css";
import { DarkModeContext } from "../../context/DarkmodeContext";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/utils";

const CardCountry = ({ country }) => {
  const { state } = useContext(DarkModeContext);
  let countryName = country.name.common;
  countryName = countryName.toLowerCase();
  // console.log(countryName)
  const [toDetails, settoDetails] = useState(`/details/${countryName}`);

  if (!country) {
    return <Spinner />;
  }
  return (
    <Link to={toDetails} onClick={scrollToTop} className={styles.toDetails}>
      <Card sx={{ maxWidth: 345, minWidth:192, backgroundColor: `${state.elements}` }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={country.flags.png}
            alt={country.flags.alt}
          />
          <CardContent
            style={{
              padding: "1rem 1rem 2rem",
              backgroundColor: `${state.elements}`,
            }}
          >
            <Typography
              gutterBottom
              component="div"
              className={styles.name}
              style={{ color: `${state.text}` }}
            >
              {country.name.common}
            </Typography>
            <Typography
              variant="body2"
              className={styles.characteristics}
              style={{ color: `${state.text}` }}
            >
              Population: <span>{country.population}</span>
            </Typography>
            <Typography
              variant="body2"
              className={styles.characteristics}
              style={{ color: `${state.text}` }}
            >
              Region: <span>{country.region}</span>
            </Typography>
            <Typography
              variant="body2"
              className={styles.characteristics}
              style={{ color: `${state.text}` }}
            >
              Capital: <span>{country.capital}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardCountry;
