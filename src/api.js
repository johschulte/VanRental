import axios from "axios";

export const getVans = async (que) => {
  const data = await axios.get(que);
  if (!data.data.statusText === "OK") {
    throw new Error("Parameter is not a number!");
  } else {
    return data.data.vans;
  }
};

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
