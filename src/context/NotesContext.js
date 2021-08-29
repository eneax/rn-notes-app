import createDataContext from "./createDataContext";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_note":
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

const addNote = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_note", payload: { title, content } });
    callback();
  };
};

const deleteNote = (dispatch) => {
  return (id) => dispatch({ type: "delete_note", payload: id });
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNote, deleteNote },
  []
);
