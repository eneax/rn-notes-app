import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "get_notes":
      // replaced state with response from API (single source of truth)
      return action.payload;
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
    case "edit_note":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    default:
      return state;
  }
};

const getNotes = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/notes");

    dispatch({ type: "get_notes", payload: response.data }); // response.data === [{}, {}, {}]
  };
};

const addNote = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_note", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteNote = (dispatch) => {
  return (id) => dispatch({ type: "delete_note", payload: id });
};

const editNote = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_note", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { getNotes, addNote, deleteNote, editNote },
  []
);
