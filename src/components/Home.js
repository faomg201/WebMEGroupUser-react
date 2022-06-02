import React from "react";
import "../assets/CSS/AddStyle.css"
import "../assets/CSS/StyleHome.css"
import Tilt from 'react-tilt'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'
import { NavBarHome } from "./NavBarHome";
import AllPage from "./AllPage";

const Home = () => {
	const histotyH = useNavigate();
	const isLink = (url) => {
		histotyH(`/${url}`)
	}
	return (
		<>
			<div className="marO ResPage" id="HomeScroll">
				<div className='HiddenOBJ'>
					<NavBarHome />
				</div>				
				<div class="container-fluid overflowHomepage" align="center" >
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
						<Link to="ContactScroll" spy={true} ><a class="bgBt " onClick={() => { isLink('allpage') }} role="button" >บริการ</a></Link>
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
			<AllPage/>
		</>
	)
}

export default Home;