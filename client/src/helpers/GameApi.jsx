import axios from "axios";

const GameApi = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://game.arlia.space"
});

export default GameApi;
