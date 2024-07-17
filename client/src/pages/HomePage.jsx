import { Link } from "react-router-dom";
import PlayPage from "./PlayPage";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.getElementById("my_modal_4").showModal();
  }, []);

  return (
    <>
      <PlayPage />
      <dialog id="my_modal_4" className="modal">
        <div className="justify-center items-center flex flex-col  modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-2xl">Tebak Gambar</h3>
          <div className="modal-action">
            <form method="dialog">
              <input
                type="text"
                placeholder="Input Your Username"
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
