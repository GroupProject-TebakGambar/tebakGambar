import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContexts";

const CardGame = () => {
  const { game, loading, fetchGame } = useContext(GameContext);

  const dataGame = game;

  return (
    <>
      <div
        className="flex space-x-4"
        style={{ marginLeft: 190, marginTop: 30, marginBottom: 20 }}
      >
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          style={{ marginLeft: 10 }}
          onClick={() => {
            fetchGame("Easy");
          }}
        >
          {" "}
          Easy{" "}
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            fetchGame("Medium");
          }}
        >
          {" "}
          Medium{" "}
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            fetchGame("Hard");
          }}
        >
          {" "}
          Hard{" "}
        </button>
      </div>
      {dataGame.map((el) => (
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            <img className="rounded-t-lg" src={el.imgUrl} alt="" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
            </a>
          </div>
          <div className="p-6 text-surface">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardGame;
