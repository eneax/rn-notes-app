import React from "react";

const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  return <NotesContext.Provider>{children}</NotesContext.Provider>;
};
