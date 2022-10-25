import { useContext, useState, useEffect } from "react";
import { React } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { MovementsContext } from "../store/movements-context";
import MovementsOutput from "../components/MovementsOutput";
import MovementsList from "../components/MovementsList";
import LoadingOverLay from "../components/Ui/loadingOverlay";
import { fetchMoveMents } from "../utility/http";
import { getDateAddDays } from "../utility/date";

const Home = ({ movements }) => {
  const [isFetching, setIsFetching] = useState(true);
  const movementsCtx = useContext(MovementsContext);

  useEffect(() => {
    async function getMovement() {
      setIsFetching(true);
      const movements = await fetchMoveMents();
      setIsFetching(false);
      movementsCtx.setMovement(movements);
    }

    getMovement();
  }, []);

  if (isFetching) {
    return <LoadingOverLay />;
  }

  const recentMovs = movementsCtx?.movements?.filter((mov) => {
    const today = new Date();
    const date7DaysNext = getDateAddDays(today, 2);

    return mov.date > today && mov.date <= date7DaysNext;
  });
  return <MovementsOutput movements={recentMovs} period="This week" />;
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    // backgroundColor: "#fff",
    marginVertical: "40%",
  },
});

export default Home;
