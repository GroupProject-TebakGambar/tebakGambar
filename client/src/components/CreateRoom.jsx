import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../helpers/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreateRoom() {
    const [level, setLevel] = useState("Pick one")
    const [room, setRoom] = useState('')
    const navigate = useNavigate()


    const owner = 'budi'
    const opponent = ''
    const scoreOwner = 0
    const scoreOpponent = 0

    // console.log(room)

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault()

                try {

                    const docRef = await addDoc(collection(db, "rooms"), {
                        nameRoom: `${room}`,
                        owner: `${owner}`,
                        opponent: `${opponent}`,
                        level: `${level}`,
                        scoreOwner: `${scoreOwner}`,
                        scoreOpponent: `${scoreOpponent}`,
                        createdAt: serverTimestamp()
                    });

                    navigate('/list-room')
                } catch (error) {
                    console.log(error, "waw")
                }
            }}>

                <input
                    onChange={(e) => { setRoom(e.target.value) }}
                    type="text"
                    placeholder="Create Game Room"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <label className="form-control w-full max-w-xs">
                    <span className="label-text">Pick the level</span>
                    <select className="select select-bordered" defaultValue={level} onChange={(e) => { setLevel(e.target.value) }}>
                        <option disabled value={"Pick one"}>Pick one</option>
                        <option value={"Easy"}>Easy</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Hard"}>Hard</option>
                    </select>
                </label>
                <button type="submit">Create</button>

            </form>
        </>
    )
}