import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context as NotesContext } from "../context/NotesContext";

const HomeScreen = () => {
  const { state, addNote, deleteNote } = React.useContext(NotesContext);

  return (
    <View>
      <Button title="Add Note" onPress={addNote} />

      <FlatList
        keyExtractor={(note) => note.title}
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.noteContainerStyles}>
              <Text style={styles.noteTitleStyles}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteNote(item.id)}>
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  noteTitleStyles: {
    fontSize: 18,
  },
});

export default HomeScreen;
