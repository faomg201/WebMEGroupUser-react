import React from "react";
import "../assets/CSS/AddStyle.css"
import "../assets/CSS/StyleHome.css"
import Tilt from 'react-tilt'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'
import { NavBarHome } from "./NavBarHome";

const Home = () => {
	const histotyH = useNavigate();
	const isLink = (url) => {
		histotyH(`/${url}`)
	}
	return (
		<>
			<div className="marO ResPage">
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
						<a class="bgBt " onClick={() => { isLink('goals') }} role="button" >ผลงาน</a>
						<a class="bgBt " onClick={() => { isLink('abouts') }} role="button">เกี่ยวกับเรา</a>
						<a class="bgBt " onClick={() => { isLink('#ServeScroll') }} role="button">ติดต่อเรา</a>
					</div>
					<div>
						<br /><br /><br />
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
		</>
	)
}

export default Home;