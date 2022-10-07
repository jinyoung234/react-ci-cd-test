/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export function useFetch<T>(initialType: string): {
  data: T;
  fetchAPI: (type: string) => Promise<T>;
  setData: React.Dispatch<React.SetStateAction<T>>;
} {
  const [data, setData] = useState([] as T);

  async function fetchAPI(type: string) {
    const res = await client.get(`${type}`);
    return res.data;
  }

  useEffect(() => {
    fetchAPI(initialType).then((res) => setData(res));
    console.log(data);
  }, []);

  return {
    data,
    fetchAPI,
    setData,
  };
}
