import { createContext, useState } from "react";
import GameApi from "../helpers/GameApi";

export const GameContext = createContext({
  game: [],
  loading: false,
  fetchGame: () => {},
});

export default function GameProvider(props) {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGame(level) {
    setLoading(true);
    const { data } = await GameApi({
      url: `/game?level=${level}`,
      method: "GET",
    });
    setGame(data);
    setLoading(false);
  }

  return (
    <GameContext.Provider
      value={{
        game,
        loading,
        fetchGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
