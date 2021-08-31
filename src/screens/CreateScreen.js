import React from "react";

import { Context as NotesContext } from "../context/NotesContext";
import Form from "../components/Form";

const CreateScreen = ({ navigation }) => {
  const { addNote } = React.useContext(NotesContext);

  return (
    <Form
      onSubmit={(title, content) => {
        addNote(title, content, () => navigation.navigate("Notes"));
      }}
    />
  );
};

export default CreateScreen;
