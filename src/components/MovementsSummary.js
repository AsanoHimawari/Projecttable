import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovementsSummary = ({ data, period }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sum}>Now have {data.length} Subjects........</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aab6fe",
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 18,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovementsSummary;
