import SideBar from "../components/SideBar";

const PlayPage = (props) => {
    const { username } = props;

    return (
        <>
            <div className="opacity-90">
                <SideBar username={username} />
            </div>
        </>
    );
};

export default PlayPage;
