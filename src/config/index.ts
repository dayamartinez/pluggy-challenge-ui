import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URI! || "https://localhost:3001";

export const fetcher = (url: string) => axios(url).then((res) => res?.data);
