import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MovementsList from "./MovementsList";
import MovementsSummary from "./MovementsSummary";
import MovementsTable from "./MovementsTable";

const MovementsOutput = ({ movements, period }) => {
  return (
    <View style={styles.container}>
      <MovementsSummary data={movements} period={period} />
      <MovementsTable data={movements} />
      <MovementsList data={movements} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#e8eaf6",
  },
});

export default MovementsOutput;
