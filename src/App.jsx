import React from "react";
import AppRoutes from "./routes/appRoutes/AppRoutes";
import DarkModeProvider, { DarkModeContext } from "./context/DarkmodeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <AppRoutes />
      </DarkModeProvider>
    </>
  );
}

export default App;
