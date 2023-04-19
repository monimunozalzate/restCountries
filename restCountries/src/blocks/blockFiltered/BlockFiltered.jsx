import React, { useEffect, useState } from "react";
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

const BlockFiltered = ({ setregionName, regionName }) => {
  console.log(regionName);
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
  console.log(handleRegion());
  const [region, setregion] = useState(null);

  useEffect(() => {
    getData(handleRegion(), region)
    console.log(getData(handleRegion(), region))
  }, [])
  
  if(!region){
    return <Spinner/>
  }

  return (
    <div>
        {
            region.map((country, index)=>{
                return <CardCountry key={index} country={country}/>
            })
        }
      
    </div>
  );
};

export default BlockFiltered;
