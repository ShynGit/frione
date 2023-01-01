const Message = () => {
    return (
        <>
            <div className="flex gap-4 my-3">
                <div className="flex flex-col items-center">
                    <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-avatar-cute-nu.jpg"
                        alt="avatar"
                        className="w-10 h-10 rounded-full shadow-md shadow-gray-600"
                    />
                    <span className="text-xs font-semibold text-[#000046]/40 mt-1">
                        12:40
                    </span>
                    <span className="text-xs font-semibold text-[#000046]/40">
                        12/4/2021
                    </span>
                </div>
                <div className="text-left">
                    <p
                        style={{
                            background:
                                "linear-gradient(101.95deg, #CDF2FF 0%, #FFFFFF 94.67%)",
                            opacity: "0.6",
                            // boxShadow: "0px 4px 4px rgba(198, 198, 198, 0.25)",
                            borderRadius: "0px 30px 30px 30px",
                        }}
                        className="p-4 py-3 max-w-xs md:max-w-md text-[#302B63] shadow-md shadow-gray-800 font-semibold text-sm break-words"
                    >
                        Xin chao tat ca moi nguoi da den Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Veniam consequatur
                        repellendus reprehenderit voluptatum, aliquid
                        voluptates? Dolorum necessitatibus, vero ratione sunt
                        ducimus at ab, commodi incidunt, iste quos recusandae.
                        Aspernatur, consequatur.
                    </p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="flex gap-4 my-3 justify-end">
                <div className="text-left">
                    <p
                        style={{
                            background:
                                "linear-gradient(77.63deg, #2980B9 0%, #49B8DF 100%)",
                            opacity: "0.6",
                            // boxShadow: "0px 4px 4px rgba(198, 198, 198, 0.25)",
                            borderRadius: "30px 0px 30px 30px",
                        }}
                        className="p-4 py-3 max-w-xs md:max-w-md text-white shadow-md shadow-gray-800 font-semibold text-sm break-words"
                    >
                        Chào bạn, có chuyện gì không? Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Reprehenderit harum
                        laudantium earum aliquid dolor! Reprehenderit rem
                        quisquam doloribus delectus mollitia, officiis impedit
                        voluptas quis cum eveniet fuga, omnis animi ipsam!
                    </p>
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-avatar-cute-nu.jpg"
                        alt="avatar"
                        className="w-10 h-10 rounded-full shadow-md shadow-gray-600"
                    />
                    <span className="text-xs font-semibold text-[#000046]/40 mt-1">
                        12:40
                    </span>
                    <span className="text-xs font-semibold text-[#000046]/40">
                        12/4/2021
                    </span>
                </div>
            </div>
        </>
    );
};

export default Message;
