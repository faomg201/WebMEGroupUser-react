import React, { useEffect } from "react";
import "../assets/CSS/AddStyle.css"
import "../assets/CSS/StyleHome.css"
import Tilt from 'react-tilt'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'
import { NavBarHome } from "./NavBarHome";
import { NavBar } from "./NavBar";

import Serve from "./Serve";
import Works from "./Works";
import Abouts from "./Abouts";
import Contact from "./Contact";

const Home = () => {
	const histotyH = useNavigate();
	const isLink = (url) => {
		histotyH(`/${url}`)
	}
	const followScreen = () => {
		const sections = document.querySelectorAll("section");
		const navLi = document.querySelectorAll("nav .containerHome ul li");
		var current = "";

		window.onscroll = () => {

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (window.pageYOffset >= sectionTop - 60) {
					current = section.getAttribute("id");
				}
			});
			// console.log(current)
			navLi.forEach((li) => {
				li.classList.remove("active");
				if (li.classList.contains(current)) {
					li.classList.add("active");
				}
			});
		};
	}

	useEffect(() => {
		followScreen()
	}, [])
	return (
		<>
			<div className="marO ResPage" id="HomeScroll">
				<div className='HiddenOBJ'>
					<NavBarHome />
				</div>
				<div class="container-fluid overflowHomepage" align="center" >
					<div>
						<Tilt className="Tilt marginMidHomeRes" options={{ max: 25, speed: 5000 }}>
							<div class="marSpTop easeForwards">
								<font className="headtext Shadow" >ME Group Enterprise</font>
							</div>
							<div className="was">
								<font className="text Shadow" > บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</font>
							</div>
						</Tilt>
						<div className="marSpTop2 easeForwards ResDisplayNone">
							{/* <a class="bgBt " onClick={() => {isLink('serve')}} role="button" >บริการ</a> */}
							<Link to="ServeScroll" spy={true} ><a class="bgBt">บริการ</a></Link>
							<Link to="WorksScroll" spy={true} ><a class="bgBt" >ผลงาน</a></Link>
							<Link to="AboutsScroll" spy={true} ><a class="bgBt" >เกี่ยวกับเรา</a></Link>
							<Link to="ContactScroll" spy={true} ><a class="bgBt" >ติดต่อเรา</a></Link>
						</div>
						<div class="slider-wrapper marginTopRes">
							<div class="slider">
								<div class="slider-text1">Mobile application</div>
								<div class="slider-text2">Web application</div>
								<div class="slider-text3">Desktop application</div>
								<div class="slider-text4">IoT</div>
								<div class="slider-text5">Digital image processing</div>
								<div class="slider-text6">Platform business</div>
								<div class="slider-text7">UX/UI</div>
							</div>
						</div>
					</div>


				</div>
			</div>

			{/* <NavBar /> */}
			{/* <nav>
				<div className="containerHome">
					<ul>
						<li className="HomeScroll active centerNav"> <Link to="HomeScroll" spy={true} ><a className="" >หน้าแรก</a></Link></li>
						<li className="ServeScroll"><Link to="ServeScroll" spy={true} ><a className="" >บริการ</a></Link></li>
						<li className="WorksScroll"><Link to="WorksScroll" spy={true} ><a className="" >ผลงาน</a></Link></li>
						<li className="AboutsScroll"><Link to="AboutsScroll" spy={true} ><a className="" >เกี่ยวกับเรา</a></Link></li>
						<li className="ContactScroll"><Link to="ContactScroll" spy={true} ><a className="" >ติดต่อเรา</a></Link></li>
						<li className="nav-item HiddenResfixed marginNavVV">
							<p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
						</li>
					</ul>
				</div>
			</nav> */}
			<nav class=" sticky-top navbar-expand-lg displayNav BGLightNav ResDisplayNone" >
				<div class="containerHome container-fluid">
					{/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
					<ul class="navbar-nav ">
						<li className="HomeScroll active nav-item HiddenResfixed marginNav centerNav">
							<Link to="HomeScroll" spy={true} ><a className="hovewe">หน้าแรก</a></Link>
						</li>
						<li className="ServeScroll nav-item HiddenResfixed centerNav">
							<Link to="ServeScroll" spy={true} ><a className="hovewe">บริการ</a></Link>
						</li>
						<li className="WorksScroll nav-item HiddenResfixed centerNav">
							<Link to="WorksScroll" spy={true} ><a className="hovewe" >ผลงาน</a></Link>
						</li>
						<li className="AboutsScroll nav-item HiddenResfixed centerNav">
							<Link to="AboutsScroll" spy={true} ><a className="hovewe" >เกี่ยวกับเรา</a></Link>
						</li>
						<li className="ContactScroll nav-item HiddenResfixed centerNav">
							<Link to="ContactScroll" spy={true} ><a className="hovewe" >ติดต่อเรา</a></Link>
						</li>
						<li className="nav-item HiddenResfixed marginNavVV ResDisplayNoneNav ">
							<p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
						</li>
					</ul>
				</div>
			</nav>
			{/* <nav class="navbar sticky-top navbar-expand-lg navbar-light BGLightNav ResDisplayNone" >
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                            <li className="nav-item HiddenResfixed marginNav centerNav">
                                
                                <Link to="HomeScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >หน้าแรก</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed centerNav">
                                <Link to="ServeScroll" spy={true} ><a className="nav-link hoverBarBgWhite" >บริการ</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed centerNav">
                                <Link to="WorksScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ผลงาน</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed centerNav">
                                <Link to="AboutsScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >เกี่ยวกับเรา</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed centerNav">
                                <Link to="ContactScroll" spy={true} ><a className="nav-link hoverBarBgWhite " >ติดต่อเรา</a></Link>
                            </li>
                            <li className="nav-item HiddenResfixed marginNavVV">
                                <p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
			<section id="ServeScroll" style={{ overflow: 'hidden' }}>
				<Serve />
			</section>
			<section id="WorksScroll" style={{ overflow: 'hidden' }}>
				<Works />
			</section>
			<section id="AboutsScroll" style={{ overflow: 'hidden' }}>
				<Abouts />
			</section>
			<section id="ContactScroll" style={{ overflow: 'hidden' }}>
				<Contact />
			</section>
		</>
	)
}

export default Home;