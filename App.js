import React from "react";

import { NotesProvider } from "./src/context/NotesContext";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <NotesProvider>
      <Navigation />
    </NotesProvider>
  );
};

export default App;
