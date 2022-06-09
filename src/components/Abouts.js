import React, { useState, useEffect } from 'react'
import "../assets/CSS/StyleInComponents.css"
import axios from 'axios';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Abouts() {
  const [Employees, fetchEmployees] = useState([])
  const [Enterprises, fetchEnterprises] = useState([])
  const [aboutUsImg, fetchaboutUsImg] = useState([])
  const [status, setStatus] = useState(false);
  const APIURL = process.env.REACT_APP_APIURL;

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  // console.log( `${REACT_APP_APIURL}`);
  const getData = () => {
    // ${REACT_APP_APIURL}
    axios.get(APIURL + `/employees`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEmployees(res.data.data)
      })
    axios.get(APIURL + `/enterprises`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEnterprises(res.data.data)
      })
    axios.get(APIURL + `/aboutUs/image`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchaboutUsImg(res.data.data)
      })

  }

  return (
    <div>
      {status == false || !Employees || !Enterprises || !aboutUsImg ? (
        <div>
          <body className='body'>
            <svg className='svg LodingMargin' version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 60 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
              <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 15 ; 0 -15; 0 15"
                  repeatCount="indefinite"
                  begin="0.1" />
              </circle>
              <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 10 ; 0 -10; 0 10"
                  repeatCount="indefinite"
                  begin="0.2" />
              </circle>
              <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3" />
              </circle>
            </svg>
          </body>
        </div>

      ) : (
        <>

          <div className="bg-light ResDisplayNone">
            <div className="row" >
              <div className='col-7 radiusDetailAbout' style={{ height: '49.07vw' }}>
                <div className="col" style={{ marginTop: '5%', marginLeft: '12%' }}>
                  <p className='AboutUsHeader'>about us
                    <span className='dotOrang'>.</span></p>
                  <p className="AboutUsHeader2">เกี่ยวกับเรา</p>
                  <p className="DetailAbotus" style={{ marginTop: '5%' }}><span className="tab"></span>{Enterprises.enterprise_detail}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-sm-5">
                <div id="carouselExampleCaptions"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" style={{ height: '49.07vw' }}>
                    <div className="carousel-item active">
                      <div className="container" align="center">
                        {!aboutUsImg[0]?.image_name ?
                          <img src={imgEMT} width="100%" /> :
                          <img src={
                            APIURL + `/static/aboutUs/` +
                            aboutUsImg[0]?.image_name
                          } className="abotusImg" />
                        }
                      </div>
                    </div>
                    {
                      aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                        const staticpath = APIURL + `/static/aboutUs/` + item.image_name
                        return (
                          <div className="carousel-item">
                            <div className="container" align="center">
                              {!item.image_name ?
                                <img src={imgEMT} width="100%" /> :
                                <img
                                  src={staticpath}
                                  className="abotusImg"
                                />
                              }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light HiddenOBJ">
            <div className="row" >
              <div className='col-12 radiusDetailAbout' style={{ height: '58.41vw' }}>
                <div className="col-12" style={{ marginTop: '15%' }} align='center'>
                  <p className="textHeadWhite" >เกี่ยวกับเรา</p><hr align='center' className="line ClineAbout"></hr>
                </div>
                <div className="row">
                  <div className='col-1'></div>
                  <div className="col-10">
                    <p className="DetailAbotus"><span className="tab"></span>{Enterprises.enterprise_detail}</p>
                  </div>
                  <div className='col-1'></div>
                </div>
              </div>
              <div className="col-sm-12" >
                <div id="carouselExampleCaptions"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" >
                    <div className="carousel-item active" >
                      <div className="container" align="center">
                        {!aboutUsImg[0]?.image_name ?
                          <img src={imgEMT} width="100%" /> :
                          <img src={
                            APIURL + `/static/aboutUs/` +
                            aboutUsImg[0]?.image_name
                          } className="abotusImg" />
                        }
                      </div>
                    </div>
                    {
                      aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                        const staticpath = APIURL + `/static/aboutUs/` + item.image_name
                        return (
                          <div className="carousel-item">
                            <div className="container" align="center">
                              {!item.image_name ?
                                <img src={imgEMT} width="100%" /> :
                                <img
                                  src={staticpath}
                                  className="abotusImg"
                                />
                              }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='TeamHeader'>our team
              <span className='dotOrang'>.</span></p>
            <p className="TeamHeader2">ทีมของเรา</p>
            <div className="container">
              <div className="col" style={{ marginTop: '1%', marginLeft: '1%' }}>
              </div>
              <br /><br />
              <div className="sliderMedium ResDisplayNone">
                {Employees.map((item) => {
                  const staticpath = APIURL + `/static/employees/` + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                  // console.log(staticpath);
                  return (
                    < >
                      <div>
                        <div style={{ height: '20vw' }}>
                          <img src={staticpath} width="100%" className='ImgAbouUs' />
                          <div style={{ marginTop: '8%' }}>
                            <h className="textNEMP" >{item.emp_fname} {item.emp_lname} #{item.mbti_name}</h>
                            <p className="textNEMP_Mbti_Q" >{item.emp_class}</p>
                            <p className="textNEMP_Mbti_Q" style={{ marginTop: '-5%' }}>{item.emp_quote}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div class="sliderAboutUs HiddenOBJ">
                <div>
                  <div class="row CardAboutus">
                    {Employees.map((item) => {
                      const staticpath = APIURL + `/static/employees/` + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                      // console.log(staticpath);
                      return (
                        < >
                          <div>
                            <div style={{ height: '20vw' }}>
                              <img src={staticpath} width="100%" className='ImgAbouUs' />
                              <div style={{ marginTop: '8%' }}>
                                <h className="textNEMP" >{item.emp_fname} {item.emp_lname} #{item.mbti_name}</h>
                                <p className="textNEMP_Mbti_Q" >{item.emp_class}</p>
                                <p className="textNEMP_Mbti_Q marTopAboutus">{item.emp_quote}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='none' style={{ height: '60vw' }}>
            <p className='OutServiceHeader'>our technology
              <span className='dotOrang'>.</span></p>
            <p className="OutServiceHeader2">ความเชี่ยวชาญของเรา</p>
            <div className="card borderCard">
              <div className="" style={{
                position: 'absolute', bottom: '0vw', left: 0, right: 0,
                height: '0px'
              }}>
                <div>
                  <div className="col " style={{ width: '40vw', marginLeft: '7vw' }}>
                    <div className="card borderCard cardCardHover ">
                      <div className="" style={{
                        position: 'absolute', bottom: '-14vw', left: 0, right: 0,
                        backgroundColor: 'none'
                      }}>
                        <p className='TitleTechstack'><span>Techstack for serve your</span><br />
                          <span style={{ color: '#fc501e' }}>Vision project</span><span>.</span></p>
                      </div>
                      <div className="" style={{
                        position: 'absolute', bottom: '-23vw', left: 0, right: 0,
                        backgroundColor: 'none'
                      }}>
                        <p className='DetailTechstack'><span>ด้วยความเชี่ยวชาญด้านเทคโนโลยีของเราที่จะทำให้ Project ของคุณสำเร็จ</span></p>
                      </div>
                      <div className="" style={{ position: 'absolute', bottom: '-28vw', left: '13%', right: 0, height: '100%' }}>
                        <div className='col-12' >
                          <a className="buttonSendOutSolution" role="button" >สอบถามเพิ่มเติม</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card borderCard cardCardHover ">
              <div className="" style={{
                position: 'absolute', bottom: '-24vw', left: '64%', right: 0,
                height: '0px'
              }}>
                <div className="row CardWorkWithUs">
                  <div>
                    <div className="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div className="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p className="TitleTech" >Font-end</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p className="DetailWWU">detail</p></div>
                            <div className='col-1'></div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{
                position: 'absolute', bottom: '-23vw', left: '98%', right: 0,
                height: '0px'
              }}>
                <div className="row CardWorkWithUs">
                  <div>
                    <div className="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div className="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p className="TitleTech">Platform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{
                position: 'absolute', bottom: '-24vw', left: '116%', right: 0,
                height: '0px'
              }}>
                <div className="row CardWorkWithUs">
                  <div>
                    <div className="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div className="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p className="TitleTech">Back-end</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p className="DetailWWU">detail</p></div>
                            <div className='col-1'></div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{
                position: 'absolute', bottom: '-3.5vw', left: '80%', right: 0,
                height: '0px'
              }}>
                <div className="row CardWorkWithUs">
                  <div>
                    <div className="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div className="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p className="TitleTech">New tech</p>
                        </div>
                        <div className="" style={{
                          position: 'absolute', bottom: '4.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row' align='center '>
                            <div className='col-6'><p className="DetailTech">machine learning</p></div>
                            <div className='col-6'><p className="DetailTech">artificial intelligence</p></div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{
                position: 'absolute', bottom: '-2.5vw', left: '107%', right: 0,
                height: '0px'
              }}>
                <div className="row CardWorkWithUs">
                  <div>
                    <div className="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div className="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p className="TitleTech">Mobile</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p className="DetailWWU">detail</p></div>
                            <div className='col-1'></div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
      }

    </div>
  );
}