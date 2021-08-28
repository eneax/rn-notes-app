import React from "react";

const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  const notesList = [{ title: "Note #1" }, { title: "Note #2" }];

  return (
    <NotesContext.Provider value={notesList}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
