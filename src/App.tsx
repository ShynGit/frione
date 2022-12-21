import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Home, SignIn, SignUp } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
