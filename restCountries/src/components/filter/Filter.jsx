import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Spinner from "../spinner/Spinner";
import { DarkModeContext } from "../../context/DarkmodeContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Filter = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const { state } = useContext(DarkModeContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // if (!regions) {
  //   return <Spinner />;
  // }
  return (
    <FormControl
      sx={{ m: 1, width: 300 }}
      style={{ backgroundColor: `${state.elements}` }}
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
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
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
