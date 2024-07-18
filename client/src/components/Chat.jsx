import { useEffect, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import socket from "../socket";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState(""); //input
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);

    useEffect(() => {
        socket.on("message", (args) => {
            console.log(args);
        });

        socket.on("connect", () => {
            navigator.mediaDevices
                .getUserMedia({ audio: true, video: false })
                .then((stream) => {
                    let mediaRecorder = new MediaRecorder(stream);
                    let audioChunks = [];

                    mediaRecorder.addEventListener("dataavailable", (event) => {
                        audioChunks.push(event.data);
                    });

                    mediaRecorder.addEventListener("stop", () => {
                        let audioBlob = new Blob(audioChunks);
                        audioChunks = [];
                        let fileReader = new FileReader();
                        fileReader.readAsDataURL(audioBlob);
                        fileReader.onloadend = () => {
                            let base64String = fileReader.result;
                            socket.emit("audioStream", base64String);
                        };
                    });

                    mediaRecorderRef.current = mediaRecorder;
                })
                .catch((error) => {
                    console.error("Error capturing audio", error);
                });
        });

        socket.on("audioStream", (audioData) => {
            let newData = audioData.split(";")[1].split(",");
            if (newData[1]) {
                newData[0] = "data:audio/ogg;";
                newData = newData[0] + "base64," + newData[1];
                setMessages((prev) => [...prev, newData]);
            }
        });
        socket.on("new:message", (args) => {
            setMessages((prev) => [...prev, args]);
        });

        return () => {
            socket.off("message");
            socket.off("connect");
            socket.off("audioStream");
            socket.off("new:message");
        };
    }, []);

    const onTypingText = (e) => {
        setTextMessage(e.target.value);
    };
    const processRecord = (e) => {
        e.preventDefault();
        mediaRecorderRef.current?.start();
        setIsRecording(true);
    };
    const handleSendMsgOrAudio = (e) => {
        e.preventDefault();
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
        if (textMessage) {
            socket.emit("clientMessage", textMessage);
        }
        setTextMessage("");
    };

    return (
        <>
            <div className="h-full relative">
                <div className="container-fluid p-5 flex flex-col absolute bottom-[70px] left-0 right-0 top-0 scroll-pl-6 snap-y overflow-y-auto">
                    <div className="self-end mb-2">
                        <div className="flex items-center justify-end">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
                                Selamat Datang !!
                            </div>
                        </div>
                    </div>

                    <div className="self-end mb-2">
                        <div className="flex items-center justify-end">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
                                Mari kita main tebak gambar
                            </div>
                        </div>
                    </div>


                    {messages.map((el, idx) => {
                        if (
                            typeof el === "string" &&
                            el.split(";")[0] === "data:audio/ogg"
                        ) {
                            return (
                                <div
                                    key={idx}
                                    className={
                                        el.id === socket.id
                                            ? "self-end mb-2 flex items-center"
                                            : "self-start mb-2 flex items-center"
                                    }
                                >
                                    <audio autoPlay key={idx} controls>
                                        <source src={el} type="audio/ogg" />
                                    </audio>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={idx}
                                    className={
                                        el.id === socket.id
                                            ? "self-end mb-2 flex items-center"
                                            : "self-start mb-2 flex items-center"
                                    }
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
                                        {el.message}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>

                <form
                    onSubmit={handleSendMsgOrAudio}
                    className="mt-2 absolute bottom-2 left-5 right-5 flex items-center"
                >
                    <input
                        disabled={isRecording}
                        value={textMessage}
                        onChange={onTypingText}
                        type="text"
                        placeholder="Type your message..."
                        className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    {textMessage || isRecording ? (
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 ml-2 rounded-lg"
                        >
                            <BsFillSendFill />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={processRecord}
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 ml-2 rounded-lg"
                        >
                            <FaMicrophone />
                        </button>
                    )}
                </form>
            </div>
        </>
    );
};

export default Chat;
