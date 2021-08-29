import React from "react";
import { View, Text } from "react-native";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default DetailsScreen;
