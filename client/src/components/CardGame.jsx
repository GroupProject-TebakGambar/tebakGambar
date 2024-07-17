import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContexts";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";

const CardGame = ({ idRoom, dataGame, dataRoom }) => {
    const [stage, setStage] = useState(0);
    const [answer, setAnswer] = useState("");

    const handleAnswer = async (e) => {
        e.preventDefault();
        try {
            if (answer === (dataGame && dataGame[stage]?.answer)) {
                setStage((prev) => prev + 1);
                if (localStorage.username === dataRoom?.owner) {
                    await updateDoc(doc(db, "rooms", idRoom), {
                        scoreOwner: Number(dataRoom?.scoreOwner) + 20,
                        scoreOpponent: Number(dataRoom?.scoreOpponent),
                    });
                } else {
                    await updateDoc(doc(db, "rooms", idRoom), {
                        scoreOwner: Number(dataRoom?.scoreOwner),
                        scoreOpponent: Number(dataRoom?.scoreOpponent) + 20,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-twe-ripple-init=""
                    data-twe-ripple-color="light"
                >
                    <img
                        className="rounded-t-lg"
                        src={dataGame && dataGame[stage]?.imgUrl}
                        alt=""
                    />
                    <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                    </a>
                </div>
                <form className="p-6 text-surface" onSubmit={handleAnswer}>
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                        <p>
                            {dataGame && dataGame[stage]?.id} -
                            {dataGame && dataGame[stage]?.level} -
                            {dataRoom?.owner}({dataRoom?.scoreOwner})-
                            {dataRoom?.opponent}({dataRoom?.scoreOpponent})
                        </p>
                    </h5>
                    <input
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value);
                        }}
                        type="text"
                        placeholder="Type your answer..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init=""
                        data-twe-ripple-color="light"
                    >
                        Button
                    </button>
                </form>
            </div>
            {/* ))} */}
        </>
    );
};

export default CardGame;
