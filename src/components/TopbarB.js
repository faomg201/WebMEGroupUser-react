import React from 'react'

export const TopbarB = () => {
  return (
    <div>
      <style jsx>{`
      a:link,
      a:visited {
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
        color: #fbfbfb;
        }
      `}</style>
      <div>&nbsp;</div>
      <ul class="nav fontSw marSpTop4 marSpRight3">
          
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
        <li class="nav marSpRight2">
          <p class="text3">ME Group Enterprise<br/><p class="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
        </li>
      </ul>
    </div>
  )
}
