import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Spinner from "../spinner/Spinner";
import styles from './CardCountry.module.css';

const CardCountry = ({country}) => {
  // console.log(country)
  if(!country){
    return <Spinner/>
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50%"
          image={country.flags.png}
          alt={country.flags.alt}
        />
        <CardContent style={{padding:'1rem 1rem 2rem'}}>
          <Typography gutterBottom component="div" className={styles.name}>
            {country.name.common}
          </Typography>
          <Typography variant="body2" className={styles.characteristics}>
            Population: <span>{country.population}</span>
          </Typography>
          <Typography variant="body2" className={styles.characteristics}>
            Region: <span>{country.region}</span>
          </Typography>
          <Typography variant="body2" className={styles.characteristics}>
            Capital: <span>{country.capital}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCountry;
