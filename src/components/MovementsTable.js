import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovementsTable = () => {
  // console.log(data);
  return (
    <View style={styles.containerHead}>

      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>ID</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>Subject</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>Date</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>Time</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containerHead: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 6,
    elevation: 0,
    justifyContent: "space-between",
    backgroundColor: "#7D5846",
    borderRadius: 4,
    minWidth: 80,
    shadowOffset: { width: 1, height: 1 },
  },
  CourseNumContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  textHead: {
    fontSize: 16,
    fontWeight: "500",
    color: "#F0E9E3",
  },
});

export default MovementsTable;
