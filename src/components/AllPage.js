import React, { useRef } from "react";
import { NavBar } from "./NavBar";
import { Scrollbars } from 'react-custom-scrollbars';

import Serve from "./Serve";
import Works from "./Works";
import Abouts from "./Abouts";
import Contact from "./Contact";

export default function AllPage() {
    const ScrollNav = () => {
        const myRef1 = useRef(null);
        const myRef2 = useRef(null);

        const executeScroll = (id) => {
            switch (id) {
                case '1':
                    myRef1?.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    myRef2?.current.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    }
    return (
        <>
            <Scrollbars autoHide='true' style={{ width: '100vw', height: '100vh' }}>
                <NavBar />
                <div id="ServeScroll" style={{ overflow: 'hidden' }}>
                    <Serve />
                </div>
                <div id="WorksScroll" style={{ overflow: 'hidden' }}>
                    <Works />
                </div>
                <div id="AboutsScroll" style={{ overflow: 'hidden' }}>
                    <Abouts />
                </div>
                <div id="ContactScroll" style={{ overflow: 'hidden' }}>
                    <Contact />
                </div>
            </Scrollbars>
        </>
    );
}
