import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../helpers/firebase";

const CreateRoomPage = () => {
    const [level, setLevel] = useState("Pick one");
    const [room, setRoom] = useState("");
    const navigate = useNavigate();

    const owner = localStorage.username;
    const opponent = "";
    const scoreOwner = 0;
    const scoreOpponent = 0;

    return (
        <>
            <div
                className="justify-center items-center flex flex-col  modal-box w-11/12 max-w-5xl"
                style={{ marginTop: 300, marginLeft: 20 }}
            >
                <div className="modal-action">
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();

                            try {
                              console.log("ini masuk ga di bawah try");
                                const docRef = await addDoc(
                                    collection(db, "rooms"),
                                    {
                                        nameRoom: `${room}`,
                                        owner: `${owner}`,
                                        opponent: `${opponent}`,
                                        level: `${level}`,
                                        scoreOwner: `${scoreOwner}`,
                                        scoreOpponent: `${scoreOpponent}`,
                                        createdAt: serverTimestamp(),
                                    }
                                );
                                // console.log(docRef,"INI DOCREF DOANG YA");
                                // console.log(docRef.id,"INI DOCREF");
                                // console.log("ini log diatas navigate");
                                navigate(`/play/${docRef.id}`);
                            } catch (error) {
                                console.log(error, "waw");
                            }
                        }}
                    >
                        {/* <form className="max-w-sm mx-auto"> */}
                            <h3 className="font-bold text-2xl" style={{marginLeft:35, marginBottom:10}}>Create Room</h3>
                            <input
                                onChange={(e) => {
                                    setRoom(e.target.value);
                                }}
                                type="text"
                                placeholder="Create Game Room"
                                className="input input-bordered input-primary w-full max-w-xs"
                            />
                            <label
                                htmlFor="small"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                style={{ marginLeft: 85, marginTop: 20 }}
                            >
                                LEVEL
                            </label>
                            <select
                                defaultValue={level}
                                onChange={(e) => {
                                    setLevel(e.target.value);
                                }}
                                id="small"
                                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{marginBottom:20}}
                            >
                                <option disabled value={"Pick one"}>Choose Your Level</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        {/* <Link to={"/play"}> */}
                            <button
                                type="submit"
                                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                style={{ marginLeft: 60 }}
                            >
                                CREATE
                            </button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateRoomPage;
