import React from "react";
import { NavBar } from "./NavBar";

import Serve from "./Serve";
import Works from "./Works";
import Abouts from "./Abouts";
import Contact from "./Contact";

export default function AllPage() {
    return (
        <>
            <NavBar />
            <div id="ServeScroll" style={{overflow:'hidden'}}>
                <Serve />
            </div>
            <div id="WorksScroll" style={{overflow:'hidden'}}>
                <Works />
            </div>
            <div id="AboutsScroll" style={{overflow:'hidden'}}>
                <Abouts />
            </div>
            <div id="ContactScroll" style={{overflow:'hidden'}}>
                <Contact />
            </div>
        </>
    );
}
