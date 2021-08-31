import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import { Context as NotesContext } from "../context/NotesContext";

const EditScreen = ({ route }) => {
  const { noteId } = route.params;
  const { state } = React.useContext(NotesContext);
  const noteDetails = state.find(({ id }) => id === noteId);

  const [title, setTitle] = React.useState(noteDetails.title);
  const [content, setContent] = React.useState(noteDetails.content);

  return (
    <View style={styles.screenContainerStyles}>
      <Text style={styles.labelStyles}>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
        style={styles.inputStyles}
      />

      <Text style={styles.labelStyles}>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
        style={styles.inputStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainerStyles: {
    padding: 15,
  },
  labelStyles: {
    fontSize: 20,
    marginBottom: 5,
  },
  inputStyles: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
  },
});

export default EditScreen;
