import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DarkModeContext } from "../../context/DarkmodeContext";

const names = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = ({ setregionName, regionName }) => {
  const { state } = useContext(DarkModeContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setregionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl
      sx={{ m: 1, width: 300 }}
      style={{ backgroundColor: `${state.elements}`, color: `${state.text}` }}
    >
      <InputLabel
        id="demo-multiple-name-label"
        style={{ color: `${state.text}` }}
      >
        Filter by Region
      </InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        // multiple
        value={regionName}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        style={{ color: `${state.text}`, padding: "0" }}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={{
              backgroundColor: `${state.elements}`,
              color: `${state.text}`,
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
