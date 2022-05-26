import React, { useState, useEffect } from 'react'
import { TopbarService } from "./TopbarService";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Serve() {
  const [Service, fetchService] = useState([])
  const [ServiceUs, fetchServiceUs] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 5000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get('http://157.245.203.125:8000/services')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchService(res.data.data)
        // console.log(res.data.data);
      })
    axios.get('http://157.245.203.125:8000/serviceus')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchServiceUs(res.data.data)
      })

  }
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
            <div class="" align="center">
              <div class="row" >
                <div class="col-12" style={{ marginTop: '10%' }}>
                  <p class="textHead">บริการของเรา</p><hr class="line Cline"></hr>
                </div>
                <div class="col-12">
                  <div class="container" style={{ marginTop: '10%' }}>
                    <div className='row justify-content-md-center gap-3'>
                      {ServiceUs.map((item, index) => {
                        const staticpath = 'http://157.245.203.125:8000/static/serviceUs/' + item.serviceUs_name + ',' + item.serviceUs_img
                        return (
                          <>
                            <div style={{ width: '23vw' }}>
                              <div class="card borderCard ">
                                <img
                                  className='shadow 10'
                                  src={staticpath}
                                  style={{ borderRadius: '2vw' }}
                                />
                                <div className="" style={{
                                  position: 'absolute', bottom: '15%', left: 0, right: 0, transition: '0.5s ease',
                                  height: '15%'
                                }}>
                                  <div class='shadow ItemJJC' style={{
                                    backgroundColor: 'white',
                                    height: '4.5vw'                                    
                                  }}>
                                    <p class="textInfoSer">{item.serviceUs_name}</p>
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
              <div class="row">

                <div class="col-12" style={{ marginTop: '10%' }}>
                  <p class="textHead ">ความเชี่ยวชาญ</p><hr class="line Cline"></hr>
                </div>
                <div class="col-12">
                  <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <FadeIn>
                      <div class="carousel-inner ">
                        <div class="carousel-item active">
                          <div class="col" style={{ width: '100vw' }}>
                            <div style={{ height: '37vw' }}>
                              <div class="card borderCard cardCardHover">
                                <div className="" style={{
                                  position: 'absolute', bottom: '0px', left: 0, right: 0,
                                  height: '100%'
                                }}>
                                  <div class="row justify-content-md-center" >
                                    <div className='col-6'></div><div className='col-4 TextContactHsub'>{Service[0]?.service_name}</div>
                                    <div style={{ marginTop: '1%' }}></div>
                                    <div class="col-6 " >
                                      <div className='bg-light' style={{ borderRadius: '30px', height: '100%' }}>
                                        <div class="row justify-content-md-center">
                                          <div className='col-10' align='left'>
                                            <p class='textInfoSer' style={{ marginTop: '10%' }}><p>{Service[0]?.service_detail}</p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-4" >
                                      <div className='' style={{ height: '100%' }}>
                                        {!Service[0]?.service_img ?
                                          <img src={imgEMT} width="100%" /> : <img
                                            src={
                                              "http://157.245.203.125:8000/static/services/" +
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
                              "http://157.245.203.125:8000/static/services/" +
                              item.service_name +
                              "," +
                              item.service_img;
                            return (
                              <div class="carousel-item ">
                                <div class="col" style={{ width: '100vw' }}>
                                  <div style={{ height: '37vw' }}>
                                    <div class="card borderCard cardCardHover">
                                      <div className="" style={{
                                        position: 'absolute', bottom: '0px', left: 0, right: 0,
                                        height: '100%'
                                      }}>
                                        <div class="row justify-content-md-center" >
                                          <div className='col-6'></div><div className='col-4 TextContactHsub'>{item.service_name}</div>
                                          <div style={{ marginTop: '1%' }}></div>
                                          <div class="col-6 " >
                                            <div className='bg-light' style={{ borderRadius: '30px', height: '100%' }}>
                                              <div class="row justify-content-md-center">
                                                <div className='col-10' align='left'>
                                                  <p class='textInfoSer' style={{ marginTop: '10%' }}><p>{item.service_detail}</p></p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-4" >
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
                      class="carousel-control-prev "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      {/* <span
                        class="carousel-control-prev-icon sizepre-next"
                        aria-hidden="true"
                      ></span> */}
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      {/* <span
                        class="carousel-control-next-icon sizepre-next"
                        aria-hidden="true"
                      ></span> */}
                      <span class="visually-hidden">Next</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">

              {/* <style jsx>{`
              .carousel-inner {
                height: 30vw;
              }

              .item.active {
                height: 310px !important;
              }

              .item img {
                object-fit: cover;
                height: 100% !important;
              }
            `}</style> */}

            </div>
          </>

        )}
    </div>
  );

}

