import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Spinner from "../../components/spinner/Spinner";
import styles from "./Input.module.css";

const Input = ({ allCountries }) => {
  const { state } = useContext(DarkModeContext);

  if (!allCountries) {
    return <Spinner />;
  }
  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: `${state.elements}`,
        color: `${state.text}`,
      }}
      className={styles.inputSearch}
    >
      <Autocomplete
        sx={{ color: `${state.text}`, backgroundColor: `${state.elements}` }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allCountries.map((option) => option.name.common)}
        renderInput={(params) => (
          <TextField
            sx={{
              color: `${state.text}`,
              backgroundColor: `${state.elements}`,
            }}
            {...params}
            label="Search for a country..."
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default Input;
