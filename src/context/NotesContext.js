import createDataContext from "./createDataContext";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [...state, { title: `Note #${state.length + 1}` }];
    default:
      return state;
  }
};

const addNote = (dispatch) => {
  return () => dispatch({ type: "add_note" });
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNote },
  []
);
