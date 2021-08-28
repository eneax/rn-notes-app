import React from "react";
import { View, Text } from "react-native";

import NotesContext from "../context/NotesContext";

const HomeScreen = () => {
  const value = React.useContext(NotesContext);

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>NotesContext value: {value}</Text>
    </View>
  );
};

export default HomeScreen;
