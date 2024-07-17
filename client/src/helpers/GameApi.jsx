import axios from "axios";

const GameApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default GameApi;
