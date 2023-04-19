import axios from "axios";

const API = axios.create({
  baseURL: `https://restcountries.com/v3.1/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getData(path, setData = null) {
  try {
    const response = await API.get(path);
    if (!response.data) {
      throw new Error("Data is null or undefined");
    }
    if (setData) {
      setData(response.data);
    }
    return response;
  } catch (error) {
    // if (error.res.status === 403) {
    //   throw new Error("User not authorized");
    // } 
     if (error.response.status === 404) {
      throw new Error("Not found");
    } else if (error.request) {
      console.log(error.request);
    }
  }
}
