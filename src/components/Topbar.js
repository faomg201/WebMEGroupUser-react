import { useNavigate } from "react-router-dom";

const Topbar = () => {
  console.log(window.location.pathname);
  const partN = window.location.pathname;
  const history = useNavigate();
  const isLink = (url) => {
	  history(`/${url}`)
  }
  return (

    <div>
      <style jsx>{`
      a:link,
      a:visited {
        text-decoration: none;
        display: inline-block;
        font-size: 21px;
        }

      `}</style>

      <ul class="nav fontSw marSpTop2 marSpRight ">
        <li class="nav-item">
          <a class="nav-link hoverBar" onClick={() => {isLink('')}} >หน้าแรก</a>
        </li>
        <li class="nav-item">
          {partN == '/serve' ?
            <a class="nav-link hoverBarbord" onClick={() => {isLink('serve')}}>บริการ</a> :
            <a class="nav-link hoverBar" onClick={() => {isLink('serve')}}>บริการ</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/goals' ?
            <a class="nav-link hoverBarbord" onClick={() => {isLink('goals')}} >ผลงาน</a> :
            <a class="nav-link hoverBar" onClick={() => {isLink('goals')}} >ผลงาน</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/abouts' ?
            <a class="nav-link hoverBarbord" onClick={() => {isLink('abouts')}} >เกี่ยวกับเรา</a> :
            <a class="nav-link hoverBar" onClick={() => {isLink('abouts')}} >เกี่ยวกับเรา</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/contact' ?
            <a class="nav-link hoverBarbord" onClick={() => {isLink('contact')}} >ติดต่อเรา</a> :
            <a class="nav-link hoverBar" onClick={() => {isLink('contact')}} >ติดต่อเรา</a>
          }
        </li>
        <li class="nav marSpRight2">
          <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}
export default Topbar;