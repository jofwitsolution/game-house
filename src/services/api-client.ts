import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5dc935535a5453e91c57a1133286a50",
  },
});
