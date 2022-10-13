import { useContext, useEffect, useState } from "react";
import { React } from "react";

import { getDateAddDays } from "../utility/date";

import MovementsOutput from "../components/MovementsOutput";
import { MovementsContext } from "../store/movements-context";
import { fetchMoveMents } from "../utility/http";
import LoadingOverLay from "../components/Ui/loadingOverlay";

const RecentMovements = () => {
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

  const recentMovs = movementsCtx.movements.filter((mov) => {
    const today = new Date();
    const date7DaysNext = getDateAddDays(today, 7);

    return mov.date >= today && mov.date <= date7DaysNext;
  });
  return <MovementsOutput movements={recentMovs} period="This week" />;
};

export default RecentMovements;
