import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { db } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListRoom() {
    const navigate = useNavigate()
    const [isJoinEnable, setIsJoinEnable] = useState(true)

    const [value, loading, error] = useCollection(
        collection(db, 'rooms'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );


    return (
        <>
            {value && value.docs.map((el, i) => {
                const room = el.data()

                return (
                    <div className="card bg-base-100 w-96 shadow-xl" key={i}>
                        <div className="card-body">
                            <h2 className="card-title">{room.nameRoom}</h2>
                            <p>{room.owner} vs {room.opponent}</p>
                            <p>{room.level}</p>
                            <div className="card-actions justify-end">
                                {console.log(room.opponent, "<<<<<<<<<<<<<<<<<<")}
                                <button className="btn btn-primary" disabled={room.opponent ? true : false} onClick={() => { navigate('/game') }}>{room.opponent ? "-" : "join"}</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => { navigate('/create-room') }}>Add Room</button>
        </>
    )
}