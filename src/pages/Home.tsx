import { useEffect, useState } from "react";
import { BoxChat, SideBar } from "../components";

const Home = () => {
    const [openSideBar, setOpenSideBar] = useState<Boolean>(false);

    return (
        <div className="grid grid-cols-12 text-white w-screen h-screen relative">
            <SideBar
                openSideBar={openSideBar}
                setOpenSideBar={setOpenSideBar}
            />
            <BoxChat setOpenSideBar={setOpenSideBar} />
        </div>
    );
};

export default Home;
