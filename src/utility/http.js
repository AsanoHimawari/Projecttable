import axios from "axios";

const BACKEND_URL =
  "https://rn-proj-4f698-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function storeMovement(tableData) {
  const response = await axios.post(BACKEND_URL + `/tables.json`, tableData);
  const id = response.data.name;
  return id;
}

export async function fetchMoveMents() {
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
}

export function updateMovement(id, tableData) {
  return axios.put(BACKEND_URL + `/tables/${id}.json`, tableData);
}

export function deleteMovement(id) {
  return axios.delete(BACKEND_URL + `/tables/${id}.json`);
}
