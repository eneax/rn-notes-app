import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context as NotesContext } from "../context/NotesContext";

const DetailsScreen = ({ route }) => {
  const { noteId } = route.params;
  const { state } = React.useContext(NotesContext);

  const noteDetails = state.find((note) => note.id === noteId);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleStyles}>{noteDetails.title}</Text>
      <Text style={styles.contentStyles}>{noteDetails.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 15,
  },
  titleStyles: {
    fontSize: 24,
    marginBottom: 10,
  },
  contentStyles: {
    fontSize: 16,
  },
});

export default DetailsScreen;
