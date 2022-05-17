import React, { useState, useEffect } from 'react'
import Topbar from "./Topbar";
import axios from 'axios';

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
    axios.get('http://localhost:8000/services')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchService(res.data.data)
        // console.log(res.data.data);
      })

  }

  return (

    <div>
      { status == false || !Service ? (
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
        <div class="container-fluid">
          <style jsx>{`
              .CSize {
                max-width: 1000px;
              }
              article {
                margin: 15px;
              }
              div {
                font-family: "SukhumvitSet-Text";
              }
              .carousel-inner {
                height: 310px;
              }

              .item.active {
                height: 310px !important;
              }

              .item img {
                object-fit: cover;
                height: 100% !important;
              }
              .bgslide {
                animation: expand 0.8s ease forwards;
                overflow: hidden;
                transition:5s;
              }

              @keyframes expand {
                0% {
                  transform: translateX(1400px);
                }
                100% {
                  transform: translateX(0px);
                }
              }
            `}</style>
          <div class="row">
            <div class="col-sm-1 marO bgslide"></div>
            <div class="col-sm-11">
              <div class="row">
                <div class="col-12 col-sm-12">
                  <Topbar />
                </div>
              </div>
              <div class="container">
                <p class="text6 marSpRight ">บริการของเรา</p>
                <div class="row">
                  <div className="col-md-12" height="800px">
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner ">
                        <div class="carousel-item active">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-4 marginleftSlideCo">
                                <img
                                  src={
                                    "http://localhost:8000/static/services/" +
                                    Service[0]?.service_name +
                                    "," +
                                    Service[0]?.service_img
                                  }
                                  class="imgslide"
                                />
                              </div>
                              <div class="col-md-6 bg-light ">
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
                              "http://localhost:8000/static/services/" +
                              item.service_name +
                              "," +
                              item.service_img;
                            return (
                              <div class="carousel-item ">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-md-4 marginleftSlideCo">
                                      <img
                                        src={staticpath}
                                        // class="d-block w-100"
                                        class="imgslide"
                                      />
                                    </div>
                                    <div class="col-md-6 bg-light ">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

