import React from "react";
import {
    BrowserRouter, Routes, Route, Link
} from "react-router-dom";

const About = () => (
    <h1>ABOUT PAGE</h1>
)

function Home() {
    return (
        <h1>HOME PAGE</h1>
    );
}

function NotFound() {
    return (
        <h1>404!!!</h1>
    );
}

export default () => (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);