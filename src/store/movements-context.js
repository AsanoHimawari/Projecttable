import { createContext, useReducer } from "react";

export const MovementsContext = createContext({
  movements: [],
  setMovement: (movements) => {},
  addMovement: ({ Subject, CourseNum, date, Times }) => {},
  updateMovement: (id, { Subject, CourseNum, date, Times }) => {},
  deleteMovement: (id) => {},
});

const movementsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      //id, data
      console.log(action.payload.id);
      const movIndex = state.findIndex((mov) => mov.id == action.payload.id);
      const updatableMove = state[movIndex]; //old mov
      const updatedMov = { ...updatableMove, ...action.payload.data }; // update old mov
      const updatedMovs = [...state]; // call old arr (mov)
      updatedMovs[movIndex] = updatedMov; // replace arr[index] = new mov
      console.log(movIndex, updatedMov);
      return updatedMovs;
    // console.log(state[movIndex]);
    case "DELETE":
      return state.filter((mov) => mov.id !== action.payload);
    default:
      return state;
  }
};

const MovementsContextProvider = ({ children }) => {
  const [movementsState, dispatch] = useReducer(
    movementsReducer,
    []
    // MOVEMENTS_DATA
  );

  const setMovement = (movements) => {
    dispatch({ type: "SET", payload: movements });
  };

  const addMovement = (movementData) => {
    dispatch({ type: "ADD", payload: movementData });
  };

  const deleteMovement = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateMovement = (id, movementData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: movementData } });
  };

  const value = {
    movements: movementsState,
    setMovement: setMovement,
    addMovement: addMovement,
    updateMovement: updateMovement,
    deleteMovement: deleteMovement,
  };

  return (
    <MovementsContext.Provider value={value}>
      {children}
    </MovementsContext.Provider>
  );
};

export default MovementsContextProvider;
