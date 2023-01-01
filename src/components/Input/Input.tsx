import { faImages } from "@fortawesome/free-regular-svg-icons";
import {
    faArrowAltCircleUp,
    faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = () => {
    return (
        <div className="absolute bottom-0 right-0 w-full flex gap-4 p-4 justify-center items-center">
            <div>
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="w-7 h-7 md:w-8 md:h-8"
                />
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faImages}
                    className="w-7 h-7 md:w-8 md:h-8"
                />
            </div>
            <div className="bg-[#000000]/20 md:bg-white/50 rounded-full w-9/12 md:w-10/12 flex gap-2 py-2 pl-5 pr-6 md:pr-4 items-center">
                <input
                    type="text"
                    name="chatInput"
                    className="bg-transparent outline-none text-white md:text-[#302B63] w-11/12 text-[16px] font-medium md:font-semibold"
                    placeholder="Aa..."
                />
                <div className="w-1/12 h-8 text-right">
                    <FontAwesomeIcon
                        icon={faArrowAltCircleUp}
                        className="w-8 h-8 md:text-[#000046]/70"
                    />
                </div>
            </div>
        </div>
    );
};

export default Input;
