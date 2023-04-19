import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DarkModeContext } from "../../context/DarkmodeContext";

const Input = () => {
  const { state } = useContext(DarkModeContext);
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: `${state.elements}`,
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px", color: `${state.text}` }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: `${state.text}` }}
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default Input;
