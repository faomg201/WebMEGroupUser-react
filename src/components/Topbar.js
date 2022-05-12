
const Topbar = () => {
  return (

    <div>
      <style jsx>{`
      a:link,
      a:visited {
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
        color: #ff9608;
        }

        .Meslide {

  animation: slideMe 1.5s ease-in-out forwards;
}
        @keyframes slideMe {
    0% {
    transform: translate(-300px,200px) scale(.2);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
      `}</style>

      <ul class="nav fontSw marSpTop2 marSpRight ">
        <li class="nav-item">
          <a class="nav-link active" href="/">หน้าแรก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/serve">บริการ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/goals">ผลงาน</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/abouts">เกี่ยวกับเรา</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">ติดต่อเรา</a>
        </li>
        <li class="nav marSpRight2 Meslide">
          <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}
export default Topbar;