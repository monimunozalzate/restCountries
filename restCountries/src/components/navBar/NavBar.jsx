import React from "react";
import styles from "./NavBar.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.title}>Where in the world?</h1>
      <div className={styles.mode}>
        <IconButton>
          <DarkModeIcon />
        </IconButton>
        <p className={styles.dark}>Dark Mode</p>
      </div>
    </div>
  );
};

export default NavBar;
