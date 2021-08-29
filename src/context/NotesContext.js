import createDataContext from "./createDataContext";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999999),
          title: `Note #${state.length + Math.floor(Math.random() * 9999999)}`,
        },
      ];
    case "delete_note":
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const addNote = (dispatch) => {
  return () => dispatch({ type: "add_note" });
};

const deleteNote = (dispatch) => {
  return (id) => dispatch({ type: "delete_note", payload: id });
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNote, deleteNote },
  []
);
