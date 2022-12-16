import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div
            className="min-w-screen min-h-screen w-screen h-screen text-white relative flex justify-center items-center"
            style={{
                background:
                    "linear-gradient(69.03deg, rgba(15, 12, 41, 0.87) 0.43%, rgba(48, 43, 99, 0.91) 46.11%, rgba(36, 36, 62, 0.91) 93.72%)",
            }}
        >
            <div
                className="absolute w-64 h-64 top-44 right-[23rem] rounded-full"
                style={{
                    background:
                        "linear-gradient(135deg, #24C6DC 0%, #182848 100%)",
                    opacity: "0.6",
                    boxShadow: "4px 4px 4px rgba(43, 69, 121, 0.25)",
                }}
            ></div>
            <div
                className="absolute w-[390px] h-[390px] bottom-12 left-72 rounded-full"
                style={{
                    background:
                        "linear-gradient(135deg, #4B6CB7 0%, #182848 100%)",
                    opacity: "0.6",
                    boxShadow: "4px 4px 4px rgba(43, 69, 121, 0.25)",
                }}
            ></div>
            <div
                className="absolute w-[130px] h-[130px] top-8 right-[52%] rounded-full"
                style={{
                    background:
                        "linear-gradient(135deg, #1488CC 0%, #182848 100%)",
                    opacity: "0.6",
                    boxShadow: "4px 4px 4px rgba(43, 69, 121, 0.25)",
                }}
            ></div>
            <div className="z-10 border border-white form">
                <p className="text-3xl font-bold mb-4 form-title">Frione</p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="px-4 py-3 outline-none text-sm text-[#302B63] font-semibold rounded-[10px]"
                        placeholder="Display name"
                    />
                    <input
                        type="email"
                        className="px-4 py-3 outline-none text-sm text-[#302B63] font-semibold rounded-[10px]"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="px-4 py-3 outline-none text-sm text-[#302B63] font-semibold rounded-[10px]"
                        placeholder="Password"
                    />
                    <div className="submit-button py-2 text-sm font-semibold">
                        Sign up
                    </div>
                    <div className="text-xs flex justify-center gap-1">
                        <p>Have an account?</p>
                        <Link
                            to="/sign-in"
                            className="text-[#2CA4E8] hover:cursor-pointer hover:text-sky-400"
                        >
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
