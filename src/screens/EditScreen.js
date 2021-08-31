import React from "react";

import { Context as NotesContext } from "../context/NotesContext";
import Form from "../components/Form";

const EditScreen = ({ route }) => {
  const { noteId } = route.params;
  const { state } = React.useContext(NotesContext);
  const noteDetails = state.find(({ id }) => id === noteId);

  return (
    <Form
      initialValues={{ title: noteDetails.title, content: noteDetails.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

export default EditScreen;
