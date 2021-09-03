import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context as NotesContext } from "../context/NotesContext";

const DetailsScreen = ({ navigation, route }) => {
  const { noteId } = route.params;
  const { state } = React.useContext(NotesContext);

  const noteDetails = state.find((note) => note.id === noteId);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit Note", { noteId })}
        >
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
