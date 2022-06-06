import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FadeIn from 'react-fade-in';
import imgEMT from '../../src/assets/Img/default-placeholder.png'
import imgCR from '../../src/assets/Img/Path10.png'
import imagesolution from './imagesolution'

export default function Serve() {
  const [Service, fetchService] = useState([])
  const [ServiceUs, fetchServiceUs] = useState([])
  const [status, setStatus] = useState(false);
  const APIURL = process.env.REACT_APP_APIURL;
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 5000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get(APIURL+`/services`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchService(res.data.data)
        // console.log(res.data.data);
      })
    axios.get(APIURL+`/serviceus`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchServiceUs(res.data.data)
      })

  }
  const num = ["1", "2", "3", "4", "5"];
  return (

    <div>
      {status == false || !Service || !ServiceUs ?
        (
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
            <div className='' style={{ height: '130vw' }}>
              <br />
              <p className='OutServiceHeader'>our service
                <span className='dotOrang'>.</span></p>
              <p class="OutServiceHeader2">บริการของเรา</p>
              <div class="card borderCard cardCardHover ">
                <div className="" style={{
                  position: 'absolute', bottom: '-0vw', left: 0, right: 0,
                  height: '0px'
                }}><img src={imgCR} width="100%" />


                  <div class="row CardOutService ">
                    {ServiceUs.map((item, index) => {
                      const staticpath = APIURL+`/static/serviceUs/` + item.serviceUs_name + ',' + item.serviceUs_img
                      return (
                        <>
                          <div>
                            <div class="col " style={{ width: '18vw' }}>
                              <div className='OutService' style={{ height: '10vw' }}></div>
                              <div class="card borderCard cardCardHover ">
                                <div className="" style={{
                                  position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                                  backgroundColor: 'none'
                                }}>
                                  <p class="NameOutService">{item.serviceUs_name}</p>
                                </div>
                                <div className="" style={{
                                  position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                                  backgroundColor: 'none'
                                }}>
                                  <div class='Imgcircle' >
                                    {!item.serviceUs_img ?
                                      <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} /> :
                                      <img src={staticpath} width="100%" style={{ borderRadius: '100%' }} />
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* <div>
                      <div class="col " style={{ width: '18vw' }}>
                        <div className='OutService' style={{ height: '10vw' }}></div>
                        <div class="card borderCard cardCardHover ">
                          <div className="" style={{
                            position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                            backgroundColor: 'none'
                          }}>
                            <p class="NameOutService">name</p>
                          </div>
                          <div className="" style={{
                            position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                            backgroundColor: 'none'
                          }}>
                            <div class='Imgcircle' >
                              <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="col " style={{ width: '18vw' }}>
                        <div className='OutService' style={{ height: '10vw' }}></div>
                        <div class="card borderCard cardCardHover ">
                          <div className="" style={{
                            position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                            backgroundColor: 'none'
                          }}>
                            <p class="NameOutService">name</p>
                          </div>
                          <div className="" style={{
                            position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                            backgroundColor: 'none'
                          }}>
                            <div class='Imgcircle' >
                              <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="col " style={{ width: '18vw' }}>
                        <div className='OutService' style={{ height: '10vw' }}></div>
                        <div class="card borderCard cardCardHover ">
                          <div className="" style={{
                            position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                            backgroundColor: 'none'
                          }}>
                            <p class="NameOutService">name</p>
                          </div>
                          <div className="" style={{
                            position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                            backgroundColor: 'none'
                          }}>
                            <div class='Imgcircle' >
                              <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="col " style={{ width: '18vw' }}>
                        <div className='OutService' style={{ height: '10vw' }}></div>
                        <div class="card borderCard cardCardHover ">
                          <div className="" style={{
                            position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                            backgroundColor: 'none'
                          }}>
                            <p class="NameOutService">name</p>
                          </div>
                          <div className="" style={{
                            position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                            backgroundColor: 'none'
                          }}>
                            <div class='Imgcircle' >
                              <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="col " style={{ width: '18vw' }}>
                        <div className='OutService' style={{ height: '10vw' }}></div>
                        <div class="card borderCard cardCardHover ">
                          <div className="" style={{
                            position: 'absolute', bottom: '5.9vw', left: 0, right: 0,
                            backgroundColor: 'none'
                          }}>
                            <p class="NameOutService">name</p>
                          </div>
                          <div className="" style={{
                            position: 'absolute', bottom: '0.8vw', left: '34%', right: 0,
                            backgroundColor: 'none'
                          }}>
                            <div class='Imgcircle' >
                              <img src={imgEMT} width="100%" style={{ borderRadius: '100%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <p className='WorkWithUs'>Work with us
                <span className='dotOrang'>.</span></p>
              <p class="WorkWithUsFormation">รูปแบบการทำงานกับเรา</p>

              <div class="card borderCard cardCardHover ">
                <div className="" style={{
                  position: 'absolute', bottom: '-5vw', left: 0, right: 0,
                  height: '0px'
                }}>
                  <div class="row CardWorkWithUs">
                    {num.map((num, index) => (
                      <>
                        <div>
                          <div class="col " style={{ width: '13vw' }}>
                            <div className='OutService' style={{ height: '0vw' }}></div>
                            <img src={imagesolution[index].src} width="100%" />
                            {/* <div class="card borderCard cardCardHover ">
                              <div className="" style={{
                                position: 'absolute', bottom: '10.5vw', left: 0, right: 0,
                                backgroundColor: 'none'
                              }}>
                                <p class="TitleWWU">title</p>
                              </div>
                              <div className="" style={{
                                position: 'absolute', bottom: '8vw', left: 0, right: 0,
                                backgroundColor: 'none'
                              }}>
                                <div className='row'>
                                  <div className='col-1'></div>
                                  <div className='col-10'><p class="DetailWWU">detail</p></div>
                                  <div className='col-1'></div>
                                </div>

                              </div>
                              <div className="" style={{
                                position: 'absolute', bottom: '13.5vw', left: '5%', right: 0
                              }}>
                                <div class='ImgBoxNum'><p className='NumWWU'>{num}.</p></div>
                              </div>
                              <div className="" style={{
                                position: 'absolute', bottom: '-2.4vw', left: '70%', right: 0, transition: '0.5s ease'
                              }}>
                                <div class='ImgWorkWithUs' >
                                  <img src={imagesolution[index].src} width="100%" />
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <p className='OurSolutionHeader'>our solution
                <span className='dotOrang'>.</span></p>
              <p class="OutServiceHeader2">เราตอบโจทย์ธุรกิจ</p>
              <div className="col-12">
                <div
                  id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                >
                  <FadeIn>
                    <div className="carousel-inner ">
                      <div className="carousel-item active">
                        <div className="col" style={{ width: '100vw' }}>
                          <div style={{ height: '37vw' }}>
                            <div className="card borderCard cardCardHover">
                              <div className="" style={{
                                position: 'absolute', bottom: '0px', left: 0, right: 0,
                                height: '100%'
                              }}>
                                <div className="row justify-content-md-center" >

                                  <div style={{ marginTop: '1%' }}></div>
                                  <div className="col-1" ></div>
                                  <div className="col-4" >
                                    <div className='' style={{ height: '100%' }}>
                                      <svg width="37vw" viewBox="0 0 1167 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M743.426 808.179C1133.27 756.326 1319.54 115.16 1014.3 21.245C709.065 -72.6697 696.492 186.376 183.993 144.877C-328.507 103.378 353.581 860.032 743.426 808.179Z" fill='url(#img1)' />
                                        <pattern id="img1" width="1" height="1">
                                          {/* <image 
                                            href={imgEMT}
                                            width="1167" height="811" /> */}
                                          <image href={APIURL+`/static/services/` +
                                            Service[0]?.service_name +
                                            "," +
                                            Service[0]?.service_img} width="100%" />
                                        </pattern>

                                      </svg>
                                      {/* {!Service[0]?.service_img ?
                                        <img src={imgEMT} width="100%" /> : <img
                                          src={
                                            APIURL+`/static/services/` +
                                            Service[0]?.service_name +
                                            "," +
                                            Service[0]?.service_img
                                          } width="100%"
                                          style={{ borderRadius: '100%' }}

                                        />
                                      } */}
                                    </div>
                                  </div>
                                  <div className="col-1" ></div>
                                  <div className="col-6 " >
                                    {/* bg-warning */}
                                    <div className='' style={{ borderRadius: '30px', height: '100%' }}>
                                      <div className="row justify-content-md-center">
                                        <div className='col-10 TextHeadOutSolution' align='left'>{Service[0]?.service_name}</div>
                                        <div className='col-10' align='left'>
                                          <p className='textInfoSer' style={{ marginTop: '2%' }}>
                                            <span>ถ้าคุณคือ {Service[0]?.service_name}</span>
                                            <p><span>ที่</span><span>{Service[0]?.service_detail}</span></p>
                                          </p>
                                        </div>
                                        <div className="" style={{ position: 'absolute', bottom: '-20vw', left: '26%', right: 0, height: '100%' }}>
                                          <div className='col-10' align='center'>
                                            <a class="buttonSendOutSolution" role="button" >สอบถามเพิ่มเติม</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {Service
                        .filter((f, idx) => idx > 0)
                        .map((item,index) => {
                          const staticpath =
                            APIURL+`/static/services/` +
                            item.service_name +
                            "," +
                            item.service_img;
                          return (
                            <div className="carousel-item ">
                              <div className="col" style={{ width: '100vw' }}>
                                <div style={{ height: '37vw' }}>
                                  <div className="card borderCard cardCardHover">
                                    <div className="" style={{
                                      position: 'absolute', bottom: '0px', left: 0, right: 0,
                                      height: '100%'
                                    }}>
                                      <div className="row justify-content-md-center" >

                                        <div style={{ marginTop: '1%' }}></div>
                                        <div className="col-1" ></div>
                                        <div className="col-4" >
                                          <div className='' style={{ height: '100%' }}>
                                            <svg width="37vw" viewBox="0 0 1167 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M743.426 808.179C1133.27 756.326 1319.54 115.16 1014.3 21.245C709.065 -72.6697 696.492 186.376 183.993 144.877C-328.507 103.378 353.581 860.032 743.426 808.179Z" fill={`url(#${index})`} />
                                              <pattern id={(index)} width="1" height="1">
                                              <image href={staticpath} width="100%" />
                                              </pattern>

                                            </svg>
                                            {/* <div className='' style={{ height: '100%' }}>
                                              {!item.service_img ?
                                                <img src={imgEMT} width="100%" /> : <img
                                                  src={staticpath}
                                                  width="100%" style={{ borderRadius: '100%' }}
                                                />
                                              }
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="col-1" ></div>
                                        <div className="col-6 " >
                                          <div className='col-6'></div>
                                          <div className='bg-none' style={{ borderRadius: '30px', height: '100%' }}>
                                            <div className="row justify-content-md-center">
                                              <div className='col-10 TextHeadOutSolution' align='left'>{item.service_name}</div>
                                              <div className='col-10' align='left'>
                                                <p className='textInfoSer' style={{ marginTop: '2%' }}>
                                                  <span>ถ้าคุณคือ {item.service_name}</span>
                                                  <p><span>ที่</span><span>{item.service_detail}</span></p>
                                                </p>
                                              </div>
                                              <div className="" style={{ position: 'absolute', bottom: '-20vw', left: '26%', right: 0, height: '100%' }}>
                                                <div className='col-10' align='center'>
                                                  <a class="buttonSendOutSolution" role="button" >สอบถามเพิ่มเติม</a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </FadeIn>
                  <button
                    className="carousel-control-prev "
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    {/* <span
                        className="carousel-control-prev-icon sizepre-next"
                        aria-hidden="true"
                      ></span> */}
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next "
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    {/* <span
                        className="carousel-control-next-icon sizepre-next"
                        aria-hidden="true"
                      ></span> */}
                    <span className="visually-hidden">Next</span>
                  </button>

                </div>
              </div>
            </div>
            {/* <div className="" align="center">
              <div className="row" >
                <div className="col-12" style={{ marginTop: '10%' }}>
                  <p className="textHead">บริการของเรา</p><hr className="line Cline"></hr>
                </div>
                <div className="col-12">
                  <div className="container" style={{ marginTop: '10%' }}>
                    <div className='row justify-content-md-center gap-3'>
                      {ServiceUs.map((item, index) => {
                        const staticpath = APIURL+`/static/serviceUs/` + item.serviceUs_name + ',' + item.serviceUs_img
                        return (
                          <>
                            <div style={{ width: '23vw' }}>
                              <div className="card borderCard ">
                                <img
                                  className='shadow 10'
                                  src={staticpath}
                                  style={{ borderRadius: '2vw' }}
                                />
                                <div className="" style={{
                                  position: 'absolute', bottom: '15%', left: 0, right: 0,
                                  height: '15%'
                                }}>
                                  <div className='shadow ItemJJC' style={{
                                    backgroundColor: 'white',
                                    height: '4.5vw'
                                  }}>
                                    <p className="textInfoSer">{item.serviceUs_name}</p>
                                  </div>
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
              <div className="row">

                <div className="col-12" style={{ marginTop: '10%' }}>
                  <p className="textHead ">ความเชี่ยวชาญ</p><hr className="line Cline"></hr>
                </div>
                <div className="col-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <FadeIn>
                      <div className="carousel-inner ">
                        <div className="carousel-item active">
                          <div className="col" style={{ width: '100vw' }}>
                            <div style={{ height: '37vw' }}>
                              <div className="card borderCard cardCardHover">
                                <div className="" style={{
                                  position: 'absolute', bottom: '0px', left: 0, right: 0,
                                  height: '100%'
                                }}>
                                  <div className="row justify-content-md-center" >
                                    <div className='col-6'></div><div className='col-4 TextContactHsub'>{Service[0]?.service_name}</div>
                                    <div style={{ marginTop: '1%' }}></div>
                                    <div className="col-6 " >
                                      <div className='bg-light' style={{ borderRadius: '30px', height: '100%' }}>
                                        <div className="row justify-content-md-center">
                                          <div className='col-10' align='left'>
                                            <p className='textInfoSer' style={{ marginTop: '10%' }}><p>{Service[0]?.service_detail}</p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4" >
                                      <div className='' style={{ height: '100%' }}>
                                        {!Service[0]?.service_img ?
                                          <img src={imgEMT} width="100%" /> : <img
                                            src={
                                              APIURL+`/static/services/` +
                                              Service[0]?.service_name +
                                              "," +
                                              Service[0]?.service_img
                                            } width="100%"
                                            style={{ borderRadius: '30px' }}

                                          />
                                        }
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        {Service
                          .filter((f, idx) => idx > 0)
                          .map((item) => {
                            const staticpath =
                              APIURL+`/static/services/` +
                              item.service_name +
                              "," +
                              item.service_img;
                            return (
                              <div className="carousel-item ">
                                <div className="col" style={{ width: '100vw' }}>
                                  <div style={{ height: '37vw' }}>
                                    <div className="card borderCard cardCardHover">
                                      <div className="" style={{
                                        position: 'absolute', bottom: '0px', left: 0, right: 0,
                                        height: '100%'
                                      }}>
                                        <div className="row justify-content-md-center" >
                                          <div className='col-6'></div><div className='col-4 TextContactHsub'>{item.service_name}</div>
                                          <div style={{ marginTop: '1%' }}></div>
                                          <div className="col-6 " >
                                            <div className='bg-light' style={{ borderRadius: '30px', height: '100%' }}>
                                              <div className="row justify-content-md-center">
                                                <div className='col-10' align='left'>
                                                  <p className='textInfoSer' style={{ marginTop: '10%' }}><p>{item.service_detail}</p></p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-4" >
                                            <div className='' style={{ height: '100%' }}>
                                              {!item.service_img ?
                                                <img src={imgEMT} width="100%" /> : <img
                                                  src={staticpath}
                                                  width="100%" style={{ borderRadius: '30px' }}
                                                />
                                              }
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </FadeIn>
                    <button
                      className="carousel-control-prev "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon sizepre-next"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon sizepre-next"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>

                  </div>
                </div>
              </div>
            </div> */}
          </>

        )}
    </div>
  );

}

