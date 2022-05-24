import React, { useState, useEffect } from 'react'
import { TopbarService } from "./TopbarService";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Serve() {
  const [Service, fetchService] = useState([])
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

  }
  return (

    <div>
      {status == false || !Service ?
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
            <div class="bg-light" align="center">
              <div class="row" >
                <div class="col-12" style={{ marginTop: '10%' }}>
                  <p class="textHead">บริการของเรา</p><hr class="line Cline"></hr>
                </div>
                <div class="col-12">
                  <div className='row justify-content-md-center '>
                    <div class="card" style={{ width: '18rem' }}>
                      <img src=".." class="card-img-top" alt="" />
                      <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                    <div class="card" style={{ width: '18rem' }}>
                      <img src=".." class="card-img-top" alt="" />
                      <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div><div class="card" style={{ width: '18rem' }}>
                      <img src=".." class="card-img-top" alt="" />
                      <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
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
                          <div class="container">
                            <div class="row xrow">
                              <div class="col-md-4 marginleftSlideCo widthSlideImg bg-dark" >
                                <div className=''>
                                  <div className='' style={{ width: "450px" }}>
                                    {!Service[0]?.service_img ?
                                      <img src={imgEMT} width="100%" /> : <img
                                        src={
                                          "http://157.245.203.125:8000/static/services/" +
                                          Service[0]?.service_name +
                                          "," +
                                          Service[0]?.service_img
                                        } width="100%" height="100%"
                                      />
                                    }
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 bg-light slideService">
                                <div class="marSpTop3">
                                  <p class='textTitle mrleft'><p>{Service[0]?.service_name}</p></p>
                                  <hr class="line Cline"></hr>
                                  <p class='textDetail'><p>{Service[0]?.service_detail}</p></p>
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
                            console.log(item.service_img);
                            return (
                              <div class="carousel-item ">
                                <div class="container">
                                  <div class="row xrow">
                                    <div class="col-md-4 marginleftSlideCo widthSlideImg">
                                      <div className=''>
                                        <div className='' style={{ width: "450px" }}>
                                          {!item.service_img ?
                                            <img src={imgEMT} width="100%" /> : <img
                                              src={staticpath}
                                              width="100%" height="100%"
                                            />
                                          }

                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 bg-light slideService">
                                      <div class="marSpTop3">
                                        <p class='textTitle mrleft'><p>{item.service_name}</p></p>
                                        <hr class="line Cline"></hr>
                                        <p class='textDetail'><p>{item.service_detail}</p></p>
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
                      <span
                        class="carousel-control-prev-icon sizepre-next"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next "
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon sizepre-next"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">

              <style jsx>{`
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
            `}</style>

              <div class="row">
                <div class="col-sm-11">
                  <div class="row">
                    <div class="col-12 col-sm-12">
                    </div>
                  </div>
                  <div class="container">

                    <div class="row">
                      <div className="col-md-12">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

        )}
    </div>
  );

}

