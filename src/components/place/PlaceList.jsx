import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme/styles";
import PlaceItem from "./PlaceItem";

function PlaceList({ places }) {
  const onSelect = () => {
    console.log("select");
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some !
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={onSelect} />}
    />
  );
}

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },
});
