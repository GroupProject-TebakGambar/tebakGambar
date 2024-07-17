import axios from "axios";

const GameApi = axios.create({
  baseURL: "https://game.arlia.space",
});

export default GameApi;
