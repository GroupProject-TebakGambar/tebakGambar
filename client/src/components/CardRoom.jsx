import { Link } from "react-router-dom";

const CardRoom = () => {
  return (
    <>
      <div className="justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Room Name
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Username1
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">VS</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Username2
        </p>

        <button
          type="button"
          class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled
        >
          Username1 Wins
        </button>
      </div>

      <div className="justify-content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/create/room">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Room Name
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Username1
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">VS</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Username2
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          ></svg>
        </a>
      </div>

      <div className="justify-content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/create/room"}>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-lg"
            style={{ marginLeft: 270, marginTop: 20 }}
          >
            Create Room
          </button>
        </Link>
      </div>
    </>
  );
};

export default CardRoom
