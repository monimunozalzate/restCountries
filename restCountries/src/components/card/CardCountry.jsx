import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Spinner from "../spinner/Spinner";
import styles from './CardCountry.module.css';
import {DarkModeContext} from '../../context/DarkmodeContext'

const CardCountry = ({country}) => {
  const {state} = useContext(DarkModeContext);
  // console.log(country)
  if(!country){
    return <Spinner/>
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={country.flags.png}
          alt={country.flags.alt}
        />
        <CardContent style={{padding:'1rem 1rem 2rem', backgroundColor:`${state.background}`}}>
          <Typography gutterBottom component="div" className={styles.name} style={{color:`${state.text}`}}>
            {country.name.common}
          </Typography>
          <Typography variant="body2" className={styles.characteristics} style={{color:`${state.text}`}}>
            Population: <span>{country.population}</span>
          </Typography>
          <Typography variant="body2" className={styles.characteristics} style={{color:`${state.text}`}}>
            Region: <span>{country.region}</span>
          </Typography>
          <Typography variant="body2" className={styles.characteristics} style={{color:`${state.text}`}}>
            Capital: <span>{country.capital}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCountry;
