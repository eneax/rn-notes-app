import React from "react";
import { View, Text, FlatList, Button } from "react-native";

import NotesContext from "../context/NotesContext";

const HomeScreen = () => {
  const { data, addNote } = React.useContext(NotesContext);

  return (
    <View>
      <Button title="Add Note" onPress={addNote} />

      <FlatList
        keyExtractor={(note) => note.title}
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default HomeScreen;
