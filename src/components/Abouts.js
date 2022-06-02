import React, { useState, useEffect } from 'react'
import "../assets/CSS/StyleInComponents.css"
import axios from 'axios';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Abouts() {
  const [Employees, fetchEmployees] = useState([])
  const [Enterprises, fetchEnterprises] = useState([])
  const [aboutUsImg, fetchaboutUsImg] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get('http://157.245.203.125:8000/employees')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEmployees(res.data.data)
      })
    axios.get('http://157.245.203.125:8000/enterprises')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEnterprises(res.data.data)
      })
    axios.get('http://157.245.203.125:8000/aboutUs/image')
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
          <div class="bg-light ResDisplayNone">
            <div class="row" >
              <div className='col-7 radiusDetailAbout' style={{ height: '49.07vw' }}>
                <div class="col" style={{ marginTop: '10%', marginLeft: '12%' }}>
                  <p className='AboutUsHeader'>about us
                    <span className='dotOrang'>.</span></p>
                  <p class="AboutUsHeader2">เกี่ยวกับเรา</p>
                  <p class="DetailAbotus" style={{ marginTop: '5%' }}><span class="tab"></span>{Enterprises.enterprise_detail}
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
              <div class="col-sm-5">
                <div id="carouselExampleCaptions"
                  class="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner" style={{ height: '49.07vw' }}>
                    <div class="carousel-item active">
                      <div class="container" align="center">
                        {!aboutUsImg[0]?.image_name ?
                          <img src={imgEMT} width="100%" /> :
                          <img src={
                            'http://157.245.203.125:8000/static/aboutUs/' +
                            aboutUsImg[0]?.image_name
                          } class="abotusImg" />
                        }
                      </div>
                    </div>
                    {
                      aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                        const staticpath = 'http://157.245.203.125:8000/static/aboutUs/' + item.image_name
                        return (
                          <div class="carousel-item">
                            <div class="container" align="center">
                              {!item.image_name ?
                                <img src={imgEMT} width="100%" /> :
                                <img
                                  src={staticpath}
                                  class="abotusImg"
                                />
                              }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light HiddenOBJ">
            <div class="row" >
              <div className='col-12 radiusDetailAbout' style={{ height: '58.41vw' }}>
                <div class="col-12" style={{ marginTop: '15%' }} align='center'>
                  <p class="textHeadWhite" >เกี่ยวกับเรา</p><hr align='center' class="line ClineAbout"></hr>
                </div>
                <div class="row">
                  <div className='col-1'></div>
                  <div class="col-10">
                    <p class="DetailAbotus"><span class="tab"></span>{Enterprises.enterprise_detail}</p>
                  </div>
                  <div className='col-1'></div>
                </div>
              </div>
              <div class="col-sm-12" >
                <div id="carouselExampleCaptions"
                  class="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner" >
                    <div class="carousel-item active" >
                      <div class="container" align="center">
                        {!aboutUsImg[0]?.image_name ?
                          <img src={imgEMT} width="100%" /> :
                          <img src={
                            'http://157.245.203.125:8000/static/aboutUs/' +
                            aboutUsImg[0]?.image_name
                          } class="abotusImg" />
                        }
                      </div>
                    </div>
                    {
                      aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                        const staticpath = 'http://157.245.203.125:8000/static/aboutUs/' + item.image_name
                        return (
                          <div class="carousel-item">
                            <div class="container" align="center">
                              {!item.image_name ?
                                <img src={imgEMT} width="100%" /> :
                                <img
                                  src={staticpath}
                                  class="abotusImg"
                                />
                              }
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='TeamHeader'>our team
                  <span className='dotOrang'>.</span></p>
                <p class="TeamHeader2">ทีมของเรา</p>
            <div class="container ">
              <div class="col" style={{ marginTop: '10%', marginLeft: '1%' }}>
                
              </div>

              <br /><br />
              <div class="sliderMedium">
                {Employees.map((item) => {
                  const staticpath = 'http://157.245.203.125:8000/static/employees/' + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                  // console.log(staticpath);
                  return (
                    < >
                      <div>
                        <div className='' style={{ height: '20vw' }}>
                          <img src={staticpath} width="100%" style={{ height: '15vw', width: '15vw', borderRadius: '100%' }} />
                          <div style={{ marginTop: '8%' }}>
                            <h class="textNEMP" >{item.emp_fname} {item.emp_lname} #{item.mbti_name}</h>
                            <p class="textNEMP_Mbti_Q" >{item.emp_class}</p>
                            <p class="textNEMP_Mbti_Q" style={{ marginTop: '-5%' }}>{item.emp_quote}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='none' style={{ height: '50vw' }}>
            <p className='OutServiceHeader'>our technology
              <span className='dotOrang'>.</span></p>
            <p class="OutServiceHeader2">ความเชี่ยวชาญของเรา</p>
            <div class="card borderCard">
              <div className="" style={{
                position: 'absolute', bottom: '0vw', left: 0, right: 0,
                height: '0px'
              }}>
                <div>
                  <div class="col " style={{ width: '40vw', marginLeft: '7vw' }}>
                    <div class="card borderCard cardCardHover ">
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
                          <a class="buttonSendOutSolution" role="button" >สอบถามเพิ่มเติม</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card borderCard cardCardHover ">
              <div className="" style={{
                position: 'absolute', bottom: '-24vw', left: '64%', right: 0,
                height: '0px'
              }}>
                <div class="row CardWorkWithUs">
                  <div>
                    <div class="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div class="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p class="TitleTech" >Font-end</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p class="DetailWWU">detail</p></div>
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
                <div class="row CardWorkWithUs">
                  <div>
                    <div class="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div class="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p class="TitleTech">Platform</p>
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
                <div class="row CardWorkWithUs">
                  <div>
                    <div class="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div class="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p class="TitleTech">Back-end</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p class="DetailWWU">detail</p></div>
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
                <div class="row CardWorkWithUs">
                  <div>
                    <div class="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div class="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p class="TitleTech">New tech</p>
                        </div>
                        <div className="" style={{
                          position: 'absolute', bottom: '4.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row' align='center '>
                            <div className='col-6'><p class="DetailTech">machine learning</p></div>
                            <div className='col-6'><p class="DetailTech">artificial intelligence</p></div>
                            
                            
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
                <div class="row CardWorkWithUs">
                  <div>
                    <div class="col " style={{ width: '14.5vw' }}>
                      <div className='OutService' style={{ height: '17vw' }}></div>
                      <div class="card borderCard cardCardHover ">
                        <div className="" style={{
                          position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <p class="TitleTech">Mobile</p>
                        </div>
                        {/* <div className="" style={{
                          position: 'absolute', bottom: '8vw', left: 0, right: 0,
                          backgroundColor: 'none'
                        }}>
                          <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'><p class="DetailWWU">detail</p></div>
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