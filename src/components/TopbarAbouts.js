import React from 'react'
import { useNavigate } from "react-router-dom";
import "../assets/CSS/StyleNavBar.css"

export const TopbarAbouts = () => {
  const histotyH = useNavigate();
  const isLink = (url) => {
    histotyH(`/${url}`)
  }
  // console.log(window.location.pathname);
  return (
    <div>
      <div>&nbsp;</div>
      <ul class="nav marginTopAnouts">

        <li class="nav-item ">
          <a class="nav-link hoverBarBgBlack" onClick={() => { isLink('') }}>หน้าแรก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hoverBarBgBlack" onClick={() => { isLink('serve') }}>บริการ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hoverBarBgBlack" onClick={() => { isLink('goals') }}>ผลงาน</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hoverBarBgBlackBord" onClick={() => { isLink('abouts') }}>เกี่ยวกับเรา</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hoverBarBgBlack" onClick={() => { isLink('contact') }}>ติดต่อเรา</a>
        </li>

      </ul>
      <li class="nav ">
        <p class="textHeadMEGroup">ME Group Enterprise</p>
        <p class="textThaiMEGroup">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p>
      </li>
    </div>
  )
}
