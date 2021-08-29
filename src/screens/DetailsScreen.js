import React from "react";
import { View, Text } from "react-native";

import { Context as NotesContext } from "../context/NotesContext";

const DetailsScreen = ({ route }) => {
  const { noteId } = route.params;
  const { state } = React.useContext(NotesContext);

  const noteDetails = state.find((note) => note.id === noteId);

  return (
    <View>
      <Text>{noteDetails.title}</Text>
    </View>
  );
};

export default DetailsScreen;
