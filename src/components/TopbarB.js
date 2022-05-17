import React from 'react'
const partN = window.location.pathname;
export const TopbarB = () => {
  console.log(window.location.pathname);
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
      <div>&nbsp;</div>
      <ul class="nav fontSw marSpTop4 marSpRight3 ">

        <li class="nav-item ">
          <a class="nav-link hoverBarB" href="/">หน้าแรก</a>
        </li>
        <li class="nav-item">
          {partN == '/serve' ?
            <a class="nav-link hoverBarbord" href="/serve">บริการ</a> :
            <a class="nav-link hoverBarB" href="/serve">บริการ</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/goals' ?
            <a class="nav-link hoverBarbord" href="/goals">ผลงาน</a> :
            <a class="nav-link hoverBarB" href="/goals">ผลงาน</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/abouts' ?
            <a class="nav-link hoverBarbord" href="/abouts">เกี่ยวกับเรา</a> :
            <a class="nav-link hoverBarB" href="/abouts">เกี่ยวกับเรา</a>
          }
        </li>
        <li class="nav-item">
          {partN == '/contact' ?
            <a class="nav-link hoverBarbord" href="/contact">ติดต่อเรา</a> :
            <a class="nav-link hoverBarB" href="/contact">ติดต่อเรา</a>
          }
        </li>
        <li class="nav marSpRight2">
          <p class="text3">ME Group Enterprise<br /><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}
