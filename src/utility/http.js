import axios from "axios";

const BACKEND_URL =
  "https://cs-projct-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function storeMovement(tableData) {
  try {
    const response = await axios.post(BACKEND_URL + `/tables.json`, tableData);
    const id = response.data.name;
    return id;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoveMents() {
  try {
    const response = await axios.get(BACKEND_URL + `/tables.json`);
    const movements = [];

    for (const key in response.data) {
      const movementobj = {
        id: key,
        CourseNum: response.data[key].CourseNum,
        date: new Date(response.data[key].date),
        Subject: response.data[key].Subject,
        Times: response.data[key].Times,
      };
      movements.push(movementobj);
    }
    return movements;
  } catch (error) {
    console.error(error);
  }
}

export async function updateMovement(id, tableData) {
  try {
    return await axios.put(BACKEND_URL + `/tables/${id}.json`, tableData);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteMovement(id) {
  try {
    return await axios.delete(BACKEND_URL + `/tables/${id}.json`);
  } catch (error) {
    console.error(error);
  }
}
