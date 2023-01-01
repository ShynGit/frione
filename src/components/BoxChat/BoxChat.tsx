import {
    faBars,
    faEllipsis,
    faPhone,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import chatBoxBG from "../../assets/ChatBoxBG.jpg";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
interface Props {
    setOpenSideBar: React.Dispatch<React.SetStateAction<Boolean>>;
}
const BoxChat = ({ setOpenSideBar }: Props) => {
    useEffect(() => {
        document
            .getElementsByClassName("BoxScroll")[0]
            .scrollTo(
                0,
                document.getElementsByClassName("BoxScroll")[0].scrollHeight
            );
    }, []);

    return (
        <div
            className="md:col-span-9 h-full col-span-12 relative"
            style={{
                backgroundImage: `url(${chatBoxBG})`,
                backgroundPosition: "0px -25px",
                backgroundSize: "130%",
            }}
        >
            {/* Chat Box */}
            <div
                className="flex py-5 px-7 items-center justify-between"
                style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(2px)",
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
                        <img
                            src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-avatar-cute-nu.jpg"
                            alt="avatar"
                            className="w-11 h-11 rounded-full ml-6"
                        />
                        <p className="font-semibold text-xl ml-2 text-[#000046]/70">
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
                    className="h-[80vh] BoxScroll overflow-y-scroll font-medium p-4"
                    id="style-1"
                >
                    <Messages />
                </div>
                <Input />
            </div>
        </div>
    );
};

export default BoxChat;
