import axios from "axios";

export const getVans = async (que) => {
  const data = await axios.get(que);
  if (!data.data.statusText === "OK") {
    throw new Error("Parameter is not a number!");
  } else {
    return data.data.vans;
  }
};
