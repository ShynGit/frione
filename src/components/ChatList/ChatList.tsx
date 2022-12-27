const ChatList = () => {
    return (
        <div
            className="flex flex-col mt-6 px-3 h-[67vh] overflow-y-scroll scrollBar"
            id="style-1"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((chat) => (
                <div
                    className={`flex items-center gap-4 px-3 py-1.5 rounded-[15px] ${
                        chat === 1 && "bg-[#CFD9E5]/20"
                    }`}
                >
                    <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-avatar-cute-nu.jpg"
                        alt={`avatar cua ${chat}`}
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col justify-center items-start">
                        <div className="font-bold text-lg">Name</div>
                        <div className="text-sm text-[#9CA8C9]">
                            Last message
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
