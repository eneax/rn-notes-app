import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context as NotesContext } from "../context/NotesContext";

const HomeScreen = ({ navigation }) => {
  const { state, deleteNote } = React.useContext(NotesContext);

  return (
    <View>
      <Text style={styles.headingStyles}>
        Your personal collection of notes.
      </Text>

      <FlatList
        keyExtractor={(note) => note.title}
        data={state}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Note Details", { noteId: item.id })
              }
            >
              <View style={styles.noteContainerStyles}>
                <Text style={styles.noteTitleStyles}>
                  {item.title} - {item.id}
                </Text>

                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyles: {
    fontSize: 16,
    padding: 15,
  },
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
