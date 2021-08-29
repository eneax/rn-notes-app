import React from "react";
import { View, Text, FlatList, Button } from "react-native";

import { Context as NotesContext } from "../context/NotesContext";

const HomeScreen = () => {
  const { state, addNote } = React.useContext(NotesContext);

  return (
    <View>
      <Button title="Add Note" onPress={addNote} />

      <FlatList
        keyExtractor={(note) => note.title}
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default HomeScreen;
