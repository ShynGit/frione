import {
    faBars,
    faVideo,
    faPhone,
    faEllipsis,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import chatBoxBG from "../assets/ChatBoxBG.jpg";
import sideBarBG from "../assets/SideBarBG.jpg";

const Home = () => {
    const [openSideBar, setOpenSideBar] = useState<Boolean>(false);
    console.log(openSideBar);

    useEffect(() => {
        document
            .getElementsByClassName("BoxScroll")[0]
            .scrollTo(
                0,
                document.getElementsByClassName("BoxScroll")[0].scrollHeight
            );
    }, []);

    return (
        <div className="grid grid-cols-12 text-white w-screen h-screen max-h-screen">
            <div
                className={` ${
                    openSideBar
                        ? "absolute w-9/12 md:relative md:w-full z-10 shadow-md"
                        : "hidden"
                } md:col-span-3 scrollBar overflow-y-scroll bg-cover h-full md:inline-block`}
                id="style-1"
                style={{
                    background:
                        "linear-gradient(170.7deg, rgba(15, 12, 41, 0.87) 0%, rgba(48, 43, 99, 0.91) 43.23%, rgba(36, 36, 62, 0.91) 90.22%)",
                }}
            >
                <h1 className="font-bold text-5xl text-left p-10 pb-0 ">
                    Frione
                </h1>
                <div className="md:hidden absolute top-10 right-8">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="w-8 h-8"
                        onClick={() => setOpenSideBar(false)}
                    />
                </div>
                <div>Search bar</div>
                <div>Friend chat</div>
                {/* <nav>icon icon icon</nav> */}
            </div>
            <div
                className="md:col-span-9 h-full col-span-12 relative"
                style={{
                    backgroundImage: `url(${chatBoxBG})`,
                    backgroundPosition: "0px -25px",
                    backgroundSize: "130%",
                }}
            >
                <div
                    className="flex py-5 px-7 items-center justify-between"
                    style={{
                        background: "rgba(255, 255, 255, 0.5)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <div className="flex items-center">
                        <div className="md:hidden">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="w-8 h-8"
                                onClick={() => setOpenSideBar(true)}
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full ml-7"></div>
                            <p className="font-semibold text-xl ml-3 text-[#000046]/70">
                                Name
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon
                            icon={faVideo}
                            className="w-8 h-8 text-[#000046]/70"
                        />
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="w-6 h-6 text-[#000046]/70"
                        />
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className="w-8 h-8 text-[#000046]/70"
                        />
                    </div>
                </div>
                <div className="">
                    <div
                        className="h-[85vh] BoxScroll overflow-y-scroll font-medium"
                        id="style-1"
                    ></div>
                    <div className="absolute bottom-0 ">Input bar</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
