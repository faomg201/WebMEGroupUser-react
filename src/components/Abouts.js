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
              <div className='col-7 radiusDetailAbout' style={{ height: '58.41vw' }}>
                <div class="col" style={{ marginTop: '10%', marginLeft: '13%' }}>
                  <p class="textHead">เกี่ยวกับเรา</p><hr class="line ClineAbout"></hr>
                  <p class="DetailAbotus"><span class="tab"></span>{Enterprises.enterprise_detail}</p>
                </div>
              </div>
              <div class="col-sm-5">
                <div id="carouselExampleCaptions"
                  class="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner" style={{ height: '58.41vw' }}>
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
          <style jsx>{`
              
       `}</style>
          <div className='marO'>
            <br /><br /><br /><br />
            <center>
              <div class="container ">
                <h class="textTeamEmp">ทีมของเรา</h>
                <br /><br />
                <div class="row contentEMPImg">
                  {Employees.map((item) => {
                    const staticpath = 'http://157.245.203.125:8000/static/employees/' + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                    // console.log(staticpath);
                    return (
                      <tr >
                        <div class="col ">
                          <img class="card test round" src={staticpath}
                            alt="" />
                          <div class="card-body ">
                          </div>
                          <div>
                            <h class="textNEMP">{item.emp_fname} {item.emp_lname} #{item.mbti_name}</h>
                            <p class="textNEMP_Mbti_Q" >{item.emp_class}</p>
                            <p class="textNEMP_Mbti_Q" style={{ marginTop: '-5%' }}>{item.emp_quote}</p>
                          </div>
                        </div>
                        <br /><br />
                      </tr>
                    );
                  })}
                </div>
              </div>
            </center>
          </div>

        </>
      )
      }

    </div>
  );
}