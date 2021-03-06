import React from 'react'
import { useNavigate } from "react-router-dom";
import "../assets/CSS/StyleNavBar.css"

export const TopbarWork = () => {
  const histotyH = useNavigate();
	const isLink = (url)=>{
		histotyH(`/${url}`)
	}
  // console.log(window.location.pathname);
  return (
    <div>
      <div>&nbsp;</div>
      <ul class="nav marginTopWork ">

        <li class="nav-item ">
          <a class="nav-link hoverBarBgBlack" onClick={() => {isLink('')}}>หน้าแรก</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgBlack" onClick={() => {isLink('serve')}}>บริการ</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgBlackBord" onClick={() => {isLink('goals')}}>ผลงาน</a> 
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgBlack" onClick={() => {isLink('abouts')}}>เกี่ยวกับเรา</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgBlack" onClick={() => {isLink('contact')}}>ติดต่อเรา</a>
        </li>
        <li class="nav marTopbar">
          <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}
