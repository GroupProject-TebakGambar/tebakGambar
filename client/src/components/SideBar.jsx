import CardGame from "./CardGame";
import Chat from "./Chat";

const SideBar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <div className="grid grid-cols-2 h-full w-full">
            <div className="bg-amber-500">
              <CardGame />
            </div>
            <div className="bg-violet-500">
              <Chat />
            </div>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-accent-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <span
              className="flex-1 ms-3 whitespace-nowrap font-bold text-2xl text-red-700"
              style={{ marginLeft: 50, fontStyle: "italic" }}
            >
              Tebak Gambar
            </span>
            <li>
              <div className="flex">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    style={{ marginLeft: 10 }}
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt=""
                  />
                  <span className="top-0 left-9 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                </div>
                <div className="flex items-center w-50 p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  username1
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    style={{ marginLeft: 10 }}
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt=""
                  />
                  <span className="top-0 left-9 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                </div>
                <div className="flex items-center w-50 p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  username2
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    style={{ marginLeft: 10 }}
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt=""
                  />
                  <span className="top-0 left-9 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                </div>
                <div className="flex items-center w-50 p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  username3
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
