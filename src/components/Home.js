import React from "react";
import "../assets/CSS/AddStyle.css"
import "../assets/CSS/StyleHome.css"
import Tilt from 'react-tilt'
import { useNavigate } from "react-router-dom";

const Home = () => {
	const histotyH = useNavigate();
	const isLink = (url)=>{
		histotyH(`/${url}`)
	}
	return (

		<body class="marO">
			<style jsx>{`
			a:link,
			a:visited {
    			color: white; 
   				text-decoration: none;
    			display: inline-block;
    			font-size: 21px; 
}
			.easeForwards{
				animation: expand 1s ease forwards;
			}
			.was{
				animation: contact 1s ease forwards;*/
			}

			.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-wrapper {
  font-size: 27px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider{
	color: #ffffff;
  height: 50px;
  padding-left:15px;
  overflow: hidden;
}
.slider div {
  height: 50px;
  margin-bottom: 50px;
  padding: 2px 10px;
  box-sizing: border-box;
}
.slider-text1 {
  animation: slide 12s ease infinite;
  /* animation: appear 10s infinite; */
  animation-play-state: running; 
}

@keyframes slide{
 	0% {margin-top: 100px;}
	5% {margin-top: 0px;}

	14% {margin-top: 0px;}
	19% {margin-top: -100px;}

	28% {margin-top: -100px;}
	33% {margin-top: -200px;}

	42% {margin-top: -200px;}
	47% {margin-top: -300px;}

	56% {margin-top: -300px;}
	61% {margin-top: -400px;}

	70% {margin-top: -400px;}
	75% {margin-top: -500px;}

	84% {margin-top: -500px;}
	89% {margin-top: -600px;}
	
	98% {margin-top: -600px;}

  100% {margin-top:-650px;}
}
			
      `}</style>



			<div class="container-fluid overflowHomepage" align="center" >
				<div>&nbsp;</div>
				<Tilt className="Tilt" options={{ max: 25 ,speed: 5000}}>
					<div class="marSpTop easeForwards">
						<font className="headtext Shadow" >ME Group Enterprise</font>
					</div>
					<div className="was">
						<font className="text Shadow" > บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</font>
					</div>
				</Tilt>
				<div className="marSpTop2 easeForwards">
					<a class="bgBt " onClick={() => {isLink('serve')}} role="button" >บริการ</a>
					<a class="bgBt " onClick={() => {isLink('goals')}} role="button" >ผลงาน</a>
					<a class="bgBt " onClick={() => {isLink('abouts')}} role="button">เกี่ยวกับเรา</a>
					<a class="bgBt " onClick={() => {isLink('contact')}} role="button">ติดต่อเรา</a>
				</div>
				<div>
					<br /><br /><br />
				</div>
				<div class="slider-wrapper">
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

		</body>
	)
}

export default Home;