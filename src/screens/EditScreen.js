import React from "react";

import { Context as NotesContext } from "../context/NotesContext";
import Form from "../components/Form";

const EditScreen = ({ navigation, route }) => {
  const { noteId } = route.params;
  const { state, editNote } = React.useContext(NotesContext);
  const noteDetails = state.find(({ id }) => id === noteId);

  return (
    <Form
      initialValues={{ title: noteDetails.title, content: noteDetails.content }}
      onSubmit={(title, content) => {
        editNote(noteId, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
