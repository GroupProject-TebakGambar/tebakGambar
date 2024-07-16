import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div>
          <SideBar />
        </div>
        <div>
          <Chat />
        </div>
      </section>
    </>
  );
};

export default HomePage;
