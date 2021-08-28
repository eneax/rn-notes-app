import React from "react";

const NotesContext = React.createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [...state, { title: `Note #${state.length + 1}` }];
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [notesList, dispatch] = React.useReducer(notesReducer, []);

  const addNote = () => {
    dispatch({ type: "add_note" });
  };

  return (
    <NotesContext.Provider value={{ data: notesList, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
