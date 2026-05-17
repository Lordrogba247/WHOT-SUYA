import React from "react";
import Landing from "./Landing";
import Explore from "./Explore";
import Use from "./Use";
import Contact from "./Contact";

export default function Home({ setCart }) {
    return (
        <div>
            <Landing />
            <Explore setCart={setCart} />  {/* pass it here */}
            <Use />
            <Contact />
        </div>
    );
}