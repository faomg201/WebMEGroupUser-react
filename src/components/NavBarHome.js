import React from 'react'
import { useNavigate } from "react-router-dom";
import "../assets/CSS/StyleNavBar.css"
import { Link } from 'react-scroll'

export const NavBarHome = () => {
  const histotyH = useNavigate();
  const isLink = (url) => {
    histotyH(`/${url}`)
  }
  // console.log(window.location.pathname);
  const PreventScrolling = () => {

    // document.body.style.pointerEvents = "none";
    console.log('666');
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <a>&nbsp;</a>
          <button onClick={() => PreventScrolling()} className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse HomeMenu" id="navbarNavDropdown" >
            {/* <div className='row' style={{ marginTop: '6vw' }}>
              <div className='col-10'><p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p></div>
              <div className='col-2 '><button style={{ marginLeft: '-5vw', border: 'none' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="Xclose" >X</span>
              </button></div>
            </div> */}
            <div style={{ height: '100vh', display: 'grid', placeContent: 'center' }}>
              <div className='row' style={{ marginBottom: '5vw',width: '100vw' }}>
                <div className='col-10'><p className="textLogo1">ME Group Enterprise<br /><p className="textLogo2">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p></div>
                <div className='col-2 '><button style={{ marginLeft: '-3vw', border: 'none' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="Xclose" >X</span>
                </button></div>
              </div>
              <ul className="navbar-nav" align='center'>
                <li className="nav-item  ">
                  <Link to="HomeScroll" spy={true} ><a className="nav-link  FontSizeMenuHome navbar-toggler" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  >หน้าแรก</a></Link>
                  {/* <a className="nav-link  FontSizeMenuHome navbar-toggler" style={{border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { isLink('') }}>หน้าแรก</a> */}
                </li>
                <li className="nav-item ">
                  {/* <a className="nav-link FontSizeMenuHome" onClick={() => { isLink('allpage') }}>บริการ</a> */}
                  <Link to="ServeScroll" spy={true} ><a className="nav-link  FontSizeMenuHome navbar-toggler" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  >บริการ</a></Link>
                </li>
                <li className="nav-item ">
                  <Link to="WorksScroll" spy={true} ><a className="nav-link  FontSizeMenuHome navbar-toggler" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  >ผลงาน</a></Link>
                  {/* <a className="nav-link FontSizeMenuHome" onClick={() => { isLink('goals') }}>ผลงาน</a> */}
                </li>
                <li className="nav-item ">
                  {/* <a className="nav-link FontSizeMenuHome" onClick={() => { isLink('abouts') }}>เกี่ยวกับเรา</a> */}
                  <Link to="AboutsScroll" spy={true} ><a className="nav-link  FontSizeMenuHome navbar-toggler" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  >เกี่ยวกับเรา</a></Link>
                </li>
                <li className="nav-item ">
                  <Link to="ContactScroll" spy={true} ><a className="nav-link  FontSizeMenuHome navbar-toggler" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"  >ติดต่อเรา</a></Link>
                  {/* <a className="nav-link FontSizeMenuHome" onClick={() => { isLink('contact') }}>ติดต่อเรา</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar fixed-top navbar-light BGLightNav">
                <ul className="nav ">
                    <li className="nav-item  ">
                        <a className="nav-link hoverBarBgBlack marginNav" onClick={() => { isLink('') }}>หน้าแรก</a>
                    </li>
                    <li className="nav-item ">
                        <Link to="ServeScroll" spy={true} ><a className="nav-link " >บริการ</a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="WorksScroll" spy={true} ><a className="nav-link  " >ผลงาน</a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="AboutsScroll" spy={true} ><a className="nav-link  " >เกี่ยวกับเรา</a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="ContactScroll" spy={true} ><a className="nav-link  " >ติดต่อเรา</a></Link>
                    </li>
                    <li className="nav">
                        <p className="text3">ME Group Enterprise<br /><p className="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                    </li>
                </ul>
            </nav> */}

      {/* <nav className="navbar fixed-top navbar-light BGLightNav">
                <ul className="nav">
                    <li className="nav-item ">
                        <a className="nav-link hoverBarBgBlack" onClick={() => { isLink('') }}>หน้าแรก</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#ServeScroll" >บริการ</a>
                    </li>
                    <li className="nav-item ">
                        <Link to="WorksScroll" spy={true} ><a className="nav-link  " >ผลงาน</a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="AboutsScroll" spy={true} ><a className="nav-link  " >เกี่ยวกับเรา</a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="ContactScroll" spy={true} ><a className="nav-link  " >ติดต่อเรา</a></Link>
                    </li>
                    <li className="nav">
                        <p className="text3">ME Group Enterprise<br /><p className="text4">บริษัท มี กรุ๊ป เอ็นเตอร์ไพรส์ จำกัด</p></p>
                    </li>
                </ul>
            </nav> */}
    </>
  )
}
