import {
    faCamera,
    faChevronLeft,
    faComment,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import sideBarBG from "../../assets/SideBarBG.jpg";
import ChatList from "../ChatList/ChatList";

interface Props {
    openSideBar: Boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<Boolean>>;
}

const SideBar = ({ openSideBar, setOpenSideBar }: Props) => {
    return (
        <>
            {/* Background support click out -> close hamburger menu */}
            {openSideBar && (
                <div
                    className="w-full h-full absolute z-10"
                    onClick={() => setOpenSideBar(false)}
                ></div>
            )}
            {/* Chat list background image */}
            <div
                className={`absolute h-full md:w-3/12 bg-cover top-0 left-0 ${
                    openSideBar
                        ? "w-9/12  md:w-full z-10 shadow-md"
                        : "hidden md:block"
                }`}
                style={{ backgroundImage: `url(${sideBarBG})` }}
            />
            {/* Chat list */}
            <div
                className={` ${
                    openSideBar
                        ? "absolute w-9/12 md:relative md:w-full z-10 shadow-md"
                        : "hidden"
                } md:col-span-3  bg-cover h-full md:inline-block`}
                id="style-1"
                style={{
                    background:
                        "linear-gradient(170.7deg, rgba(15, 12, 41, 0.87) 0%, rgba(48, 43, 99, 0.91) 43.23%, rgba(36, 36, 62, 0.91) 90.22%)",
                    opacity: "0.8",
                }}
            >
                <h1 className="font-bold text-5xl text-left pt-10 px-6 pb-0">
                    Frione
                </h1>
                <div className="md:hidden absolute top-10 right-8">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="w-8 h-8"
                        onClick={() => setOpenSideBar(false)}
                    />
                </div>
                <div className="bg-black/30 rounded-full mx-6 mt-5 py-3 flex items-center gap-3 pl-6">
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                    <input
                        type="text"
                        name="search"
                        className="bg-transparent outline-none font-semibold"
                        placeholder="Find..."
                    />
                </div>
                <ChatList />
                <div className="flex gap-10 md:gap-16 py-2 pb-0 items-center justify-center">
                    <div>
                        <FontAwesomeIcon
                            icon={faComment}
                            className="text-[#457FCA] w-10 h-10"
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCamera}
                            className="w-10 h-10"
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} className="w-9 h-9" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
