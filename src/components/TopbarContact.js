import { useNavigate } from "react-router-dom";
import "../assets/CSS/StyleNavBar.css"

export const TopbarContact = () => {
  const histotyH = useNavigate();
	const isLink = (url)=>{
		histotyH(`/${url}`)
	}
  // console.log(window.location.pathname);
  const partN = window.location.pathname;
  return (

    <div>
      
      <ul class="nav marginTopContact">
        <li class="nav-item">
          <a class="nav-link hoverBarBgWhite" onClick={() => {isLink('')}}>หน้าแรก</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgWhite" onClick={() => {isLink('serve')}}>บริการ</a> 
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgWhite" onClick={() => {isLink('goals')}}>ผลงาน</a> 
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgWhite" onClick={() => {isLink('abouts')}}>เกี่ยวกับเรา</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hoverBarBgWhitebord" onClick={() => {isLink('contact')}}>ติดต่อเรา</a>
        </li>
        <li class="nav marTopbarContact">
          <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}