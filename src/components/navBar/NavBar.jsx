import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { DarkModeContext } from "../../context/DarkmodeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const NavBar = () => {
  const { state, dispatch } = useContext(DarkModeContext);
 
  return (
    <div
      className={styles.navBar}
      style={{ backgroundColor: `${state.elements}` }}
    >
      <h1 className={styles.title} style={{ color: `${state.text}` }}>
        Where in the world?
      </h1>
      <div className={styles.mode}>
        <IconButton
          onClick={() => {
            dispatch(
              state.bgFlag === "light" ? { type: "dark" } : { type: "light" }
            );
          }}
        >
          {state.bgFlag == "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeOutlinedIcon style={{ color: `${state.text}` }} />
          )}
        </IconButton>
        {state.bgFlag == "light" ? (
          <p className={styles.dark} style={{ color: `${state.text}` }}>
            Dark Mode
          </p>
        ) : (
          <p className={styles.dark} style={{ color: `${state.text}` }}>
            Light Mode
          </p>
        )}
      </div>
    </div>
  );
};

export default NavBar;
