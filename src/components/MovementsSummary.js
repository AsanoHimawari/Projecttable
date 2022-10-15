import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovementsSummary = ({ data,}) => {
  // console.log(data);
  return (
    <View>
      <Text style={styles.sum}>วิชาเรียนทั้งหมด {data.length} วิชา</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#BB8D76",
  //   padding: 8,
  //   borderRadius: 6,
  //   flexDirection: "column",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  sum: {
    fontSize: 15,
    fontWeight: "500",
    color: "#7D5846",
    alignItems: "center",
    textDecorationLine: 'underline',
    
  },
});

export default MovementsSummary;
