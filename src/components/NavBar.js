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
            <nav class="navbar sticky-top navbar-expand-lg navbar-light BGLightNav">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li className="nav-item HiddenResfixed marginNav">
                                {/* <a className="nav-link hoverBarBgBlack marginNav" onClick={() => { isLink('') }}>หน้าแรก</a> */}
                                <Link to="HomeScroll" spy={true} ><a className="nav-link hoverBarBgBlack" >หน้าแรก</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed">
                                <Link to="ServeScroll" spy={true} ><a className="nav-link hoverBarBgWhite" >บริการ</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed">
                                <Link to="WorksScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ผลงาน</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed">
                                <Link to="AboutsScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >เกี่ยวกับเรา</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed">
                                <Link to="ContactScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ติดต่อเรา</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed marginNavVV">
                                <p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar fixed-top navbar-light BGLightNav">
                <ul className="nav ">
                    <li className="nav-item HiddenResfixed ">
                        <a className="nav-link hoverBarBgBlack marginNav" onClick={() => { isLink('') }}>หน้าแรก</a>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="ServeScroll" spy={true} ><a className="nav-link hoverBarBgWhite" >บริการ</a></Link>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="WorksScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ผลงาน</a></Link>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="AboutsScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >เกี่ยวกับเรา</a></Link>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="ContactScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ติดต่อเรา</a></Link>
                    </li>
                    <li className="nav">
                        <p className="text3">ME Group Enterprise<br /><p className="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                    </li>
                </ul>
            </nav> */}

            {/* <nav className="navbar fixed-top navbar-light BGLightNav">
                <ul className="nav">
                    <li className="nav-item HiddenResfixed">
                        <a className="nav-link hoverBarBgBlack" onClick={() => { isLink('') }}>หน้าแรก</a>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <a className="nav-link hoverBarBgWhite" href="#ServeScroll" >บริการ</a>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="WorksScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ผลงาน</a></Link>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="AboutsScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >เกี่ยวกับเรา</a></Link>
                    </li>
                    <li className="nav-item HiddenResfixed">
                        <Link to="ContactScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ติดต่อเรา</a></Link>
                    </li>
                    <li className="nav">
                        <p className="text3">ME Group Enterprise<br /><p className="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                    </li>
                </ul>
            </nav> */}
        </>
    );
}
