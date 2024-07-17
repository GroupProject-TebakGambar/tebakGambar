import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../helpers/firebase";
import { collection } from "firebase/firestore";

// const RoomListPage = () => {
//     return (
//         <>
//             <div
//                 className="justify-center grid gap-4 grid-cols-2"
//                 style={{ marginLeft: 15, marginRight: 15, marginTop: 50 }}
//             >
//                 <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
//                     <a href="#">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                             Room Name
//                         </h5>
//                     </a>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         Username1
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         VS
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         Username2
//                     </p>

//                     <button
//                         type="button"
//                         className="text-white bg-rose-500 dark:bg-rose-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                         disabled
//                     >
//                         Username1 <br />
//                         WINNERS !!!
//                     </button>
//                 </div>

//                 <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
//                     <a href="/create/room">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                             Room Name
//                         </h5>
//                     </a>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         Username1
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         VS
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         Username2
//                     </p>
//                     <button
//                         type="button"
//                         className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                         style={{ marginLeft: 10 }}
//                     >
//                         Join
//                     </button>
//                 </div>

//                 <Link to={"/create/room"}>
//                     <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <button
//                             type="button"
//                             className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                             style={{ marginLeft: 50 }}
//                         >
//                             Create New Room
//                         </button>
//                     </div>
//                 </Link>
//             </div>
//         </>
//     );
// };

// export default RoomListPage;



export default function ListRoom() {
    const navigate = useNavigate();
    const [isJoinEnable, setIsJoinEnable] = useState(true);

    const [value, loading, error] = useCollection(collection(db, "rooms"), {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    return (
        <>
            {value &&
                value.docs.map((el, i) => {
                    const room = el.data();

                    return (
                        <div
                            className="justify-center grid gap-4 grid-cols-2"
                            style={{
                                marginLeft: 15,
                                marginRight: 15,
                                marginTop: 50,
                            }}
                        >
                            <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Room Name
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Username1
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    VS
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Username2
                                </p>

                                <button
                                    type="button"
                                    className="text-white bg-rose-500 dark:bg-rose-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    disabled
                                >
                                    Username1 <br />
                                    WINNERS !!!
                                </button>
                            </div>

                            <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                                <a href="/create/room">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Room Name
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Username1
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    VS
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Username2
                                </p>
                                <button
                                    type="button"
                                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    style={{ marginLeft: 10 }}
                                >
                                    Join
                                </button>
                            </div>

                            <Link to={"/create-room"}>
                                <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <button
                                        type="button"
                                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        style={{ marginLeft: 50 }}
                                    >
                                        Create New Room
                                    </button>
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </>
    );
}
