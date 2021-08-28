import React from "react";

const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  const [notesList, setNotesList] = React.useState([]);

  const addNote = () => {
    setNotesList([...notesList, { title: `Note ${notesList.length + 1}` }]);
  };

  return (
    <NotesContext.Provider value={{ data: notesList, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
