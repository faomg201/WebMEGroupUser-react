import React from "react";
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const histotyH = useNavigate();
    const isLink = (url) => {
        histotyH(`/${url}`)
    }
    // const 
    return (
        <>
            <nav class="navbar fixed-top navbar-light BGLightNav">
                <ul class="nav">
                    <li class="nav-item HiddenResfixed">
                        <a class="nav-link hoverBarBgBlack" onClick={() => { isLink('') }}>หน้าแรก</a>
                    </li>
                    <li class="nav-item HiddenResfixed">
                        {/* <Link to="ServeScroll" spy={true} ><a class="nav-link hoverBarBgWhite" >บริการ</a></Link> */}
                        <a class="nav-link hoverBarBgWhite" href="#ServeScroll" >บริการ</a>
                    </li>
                    <li class="nav-item HiddenResfixed">
                        <Link to="WorksScroll" spy={true} ><a class="nav-link hoverBarBgWhite " >ผลงาน</a></Link>
                    </li>
                    <li class="nav-item HiddenResfixed">
                        <Link to="AboutsScroll" spy={true} ><a class="nav-link hoverBarBgWhite " >เกี่ยวกับเรา</a></Link>
                    </li>
                    <li class="nav-item HiddenResfixed">
                        <Link to="ContactScroll" spy={true} ><a class="nav-link hoverBarBgWhite " >ติดต่อเรา</a></Link>
                    </li>
                    <li class="nav">
                        <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                    </li>
                </ul>
            </nav>
        </>
    );
}
