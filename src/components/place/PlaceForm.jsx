import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../theme/styles";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const handleTitle = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View style={styles.label}>
        <Text>Title</Text>
        <TextInput
          onChangeText={handleTitle}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
