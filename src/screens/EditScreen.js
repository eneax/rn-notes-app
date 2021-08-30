import React from "react";
import { Text, View } from "react-native";

const EditScreen = ({ route }) => {
  const { noteId } = route.params;

  return (
    <View>
      <Text>Edit Note: {noteId}</Text>
    </View>
  );
};

export default EditScreen;
