import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Form = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);

  return (
    <View style={styles.screenContainerStyles}>
      <Text style={styles.labelStyles}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyles}
      />

      <Text style={styles.labelStyles}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.inputStyles}
      />

      <Button title="Save note" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

Form.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  screenContainerStyles: {
    padding: 15,
  },
  labelStyles: {
    fontSize: 20,
    marginBottom: 5,
  },
  inputStyles: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
  },
});

export default Form;
