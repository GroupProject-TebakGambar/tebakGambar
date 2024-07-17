import { Link } from "react-router-dom";
import PlayPage from "./PlayPage";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import socket from "../socket";

const HomePage = () => {
    const [textUsername, setTextUsername] = useState("");
    const [username, setUsername] = useState("");
    // const [messages, setMessages] = useState([]);

    useEffect(() => {
        document.getElementById("my_modal_4").showModal();

        // socket.on("new:message", (args) => {
        //     setMessages((prev) => {
        //         return [...prev, args];
        //     });
        // });
    }, []);

    const submitUsername = (e) => {
        e.preventDefault();
        if (textUsername) {
            socket.auth = { username: textUsername };
            socket.disconnect().connect();
            setUsername(textUsername);
            document.getElementById("my_modal_4").close();
        }
    };
    const onChangeUsername = (e) => {
        setTextUsername(e.target.value);
    };

    return (
        <>
            <SideBar />
            <dialog id="my_modal_4" className="modal">
                <div className="justify-center items-center flex flex-col  modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-2xl">Tebak Gambar</h3>
                    <div className="modal-action">
                        <form method="dialog" onSubmit={submitUsername}>
                            <input
                                type="text"
                                placeholder="Input Your Username"
                                value={textUsername}
                                onChange={onChangeUsername}
                                className="w-90 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg">
                                Play!
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default HomePage;
