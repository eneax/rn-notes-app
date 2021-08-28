import React from "react";

const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  return <NotesContext.Provider value={5}>{children}</NotesContext.Provider>;
};

export default NotesContext;
