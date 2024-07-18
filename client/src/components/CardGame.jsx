import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContexts";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";

const CardGame = ({ idRoom, dataGame, dataRoom }) => {
  // const [stage, setStage] = useState(0);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate()

  const handleAnswer = async (e) => {
    e.preventDefault();
    try {
      if (answer === (dataGame && dataGame[dataRoom?.stage - 1]?.answer)) {

        // setStage((prev) => prev + 1);

        let pushData = await updateDoc(doc(db, "rooms", idRoom), {
          stage: (dataRoom?.stage + 1)
        })
        // console.log(dataRoom?.stage, "<<<<<Data Room Stage");
        // if (dataRoom?.stage == 5) {
        //   let text = dataRoom?.scoreOwner >= dataRoom?.scoreOpponent ? dataRoom?.scoreOwner + dataRoom?.owner : dataRoom?.scoreOpponent + dataRoom?.opponent
        //   console.log(text);
        //   Swal.fire({
        //     title: 'Congrats!!',
        //     text: text,
        //     icon: 'success',
        //     confirmButtonText: "Play Again"
        //   })
        // } 
        // else {
        //   let text = dataRoom?.scoreOwner >= dataRoom?.scoreOpponent ? dataRoom?.scoreOwner + dataRoom?.owner : dataRoom?.scoreOpponent + dataRoom?.opponent
        //   console.log(text);
        //   Swal.fire({
        //     title: 'You lose!!',
        //     text: text,
        //     icon: 'info',
        //     confirmButtonText: "Play Again"
        //   })
        // }

        if (localStorage.username === dataRoom?.owner) {
          await updateDoc(doc(db, "rooms", idRoom), {
            "scoreOwner": Number(dataRoom?.scoreOwner) + 20,
            "scoreOpponent": Number(dataRoom?.scoreOpponent),
          });
        } else {
          await updateDoc(doc(db, "rooms", idRoom), {
            "scoreOwner": Number(dataRoom?.scoreOwner),
            "scoreOpponent": Number(dataRoom?.scoreOpponent) + 20,
          });
        }
      }
      else {
        Swal.fire({
          title: 'Wrong Answer',
          text: 'Please check again!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    // console.log('data room berubah', dataRoom);
    let winner;
    if (dataRoom?.scoreOwner > dataRoom?.scoreOpponent) {
      winner = dataRoom?.owner
    } else {
      winner = dataRoom?.opponent
    }
    if (dataRoom?.stage == 5) {
      if (localStorage.username === winner) {     
        Swal.fire({
          title: 'Congrats!!',
          text: `${winner}, You win!`,
          icon: 'success',
          confirmButtonText: "Play Again"
        })
      } else {
        Swal.fire({
          title: 'You lose!!',
          text: `${localStorage.username}, You lose :(`,
          icon: 'error',
          confirmButtonText: "Play Again"
        })
      }
    }
  }, [dataRoom])

  return (
    <>
      <div className="size-50 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark" style={{ marginLeft: 40, marginRight: 40, marginTop: 20 }}>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-twe-ripple-init=""
          data-twe-ripple-color="light"
        >
          <img
            className="size-full rounded-t-lg"
            src={dataGame && dataGame[dataRoom?.stage - 1]?.imgUrl}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
          </a>
        </div>
        <form className="p-6 text-surface" onSubmit={handleAnswer}>
          <h5 className="mb-2 text-xl font-medium leading-tight">
            <p>
              {dataGame && dataGame[dataRoom?.stage - 1]?.id} -
              {dataGame && dataGame[dataRoom?.stage - 1]?.level} -
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
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            style={{ marginLeft: 230, marginTop: 20 }}
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Answer
          </button>
        </form>
      </div>
      {/* ))} */}
    </>
  );
};

export default CardGame;
