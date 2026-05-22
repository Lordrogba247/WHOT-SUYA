import React from "react";
import Landing from "./Landing";
import About from "./About";
import Serving from "./Serving";
import Order from "./Order";

export default function Home() {
    return (
        <div>
            <Landing />
            <About />
            <Serving />
            <Order />
        </div>
    );
}