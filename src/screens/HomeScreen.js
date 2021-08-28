import React from "react";
import { View, Text, FlatList } from "react-native";

import NotesContext from "../context/NotesContext";

const HomeScreen = () => {
  const notesList = React.useContext(NotesContext);

  return (
    <View>
      <FlatList
        keyExtractor={(note) => note.title}
        data={notesList}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default HomeScreen;
