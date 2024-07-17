import { useParams } from "react-router-dom";
import CardGame from "../components/CardGame";
import { doc } from "firebase/firestore";
import { db } from "../helpers/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContexts";


const PlayPage = (props) => {
  const { username } = props;
  const { idRoom } = useParams()
  const { game, fetchGame } = useContext(GameContext);
  const dataGame = game;

  const [value, loading, error] = useDocument(
    doc(db, 'rooms', `${idRoom}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    console.log(value && value.data().level, "<<<<<VALUE");
    // console.log(loading, ">>>>>>>>>LOADING");
    // console.log(error, "<<<<<<<<<<ERRORRRRR");
    fetchGame(value && value.data().level)
  }, [value])

  return (
    <>
      <CardGame dataGame={dataGame} dataRoom={value && value.data()} />
    </>
  );
};

export default PlayPage;
