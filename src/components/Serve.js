import React, { useState, useEffect } from 'react'
import Topbar from "./Topbar";
import axios from 'axios';

export default function Serve() {
  const [Service, fetchService] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getData()
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
      {status == false || !Service ? (
        <div>loading</div>
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
                animation: expand 0.1s ease forwards;
                overflow: hidden;
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
                                <h5 className="marSpTop3">
                                  {Service[0]?.service_name}
                                </h5>
                                <hr class="line Cline"></hr>
                                <p>{Service[0]?.service_detail}</p>
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
                                      <h5 className="marSpTop3">
                                        {item.service_name}
                                      </h5>
                                      <hr class="line Cline"></hr>
                                      <p>{item.service_detail}</p>
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

