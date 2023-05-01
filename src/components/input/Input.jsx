import React, { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Input.module.css";

const Input = ({ handleCountrySearch, disabled }) => {
  const { state } = useContext(DarkModeContext);

  return (
    <Paper
      className={styles.inputSearch}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        backgroundColor: `${state.elements}`,
        color: `${state.text}`,
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
        placeholder="Search by country..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleCountrySearch}
        // disabled={disabled}
      />
    </Paper>
  );
};

export default Input;
