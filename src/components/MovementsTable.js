import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovementsTable = () => {
  // console.log(data);
  return (
    <View style={styles.containerHead}>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>รหัสวิชา</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>วิชา</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>วันที่</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>เวลา</Text>
      </View>
      <View style={styles.CourseNumContainer}>
        <Text style={styles.textHead}>ห้องสอบ</Text>
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
    justifyContent: "space-around",
    backgroundColor: "#7D5846",
    borderRadius: 4,
    minWidth: 80,
    shadowOffset: { width: 1, height: 1 },
    fontSize: 20,
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
