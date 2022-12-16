import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SignIn, SignUp } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
