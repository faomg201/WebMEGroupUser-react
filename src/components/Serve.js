import React from "react";
import Topbar from "./Topbar";

import { Component } from "react";
class Serve extends Component {
  state = {
    loading: true,
  };
  async componentDidMount() {
    const apiUrl = `http://localhost:8000/services`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ service: data.data, loading: false });
    console.log(data.data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.service ? (
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

                {/* <div class="container bg-primary"> */}
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
                                    this.state.service[0]?.service_name +
                                    "," +
                                    this.state.service[0]?.service_img
                                  }
                                  class="imgslide"
                                />
                              </div>
                              <div class="col-md-6 bg-light ">
                                <h5 className="marSpTop3">
                                  {this.state.service[0]?.service_name}
                                </h5>
                                <hr class="line Cline"></hr>
                                <p>{this.state.service[0]?.service_detail}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {this.state.service
                          .filter((f, idx) => idx > 0)
                          .map((item) => {
                            const staticpath =
                              "http://localhost:8000/static/services/" +
                              item.service_name +
                              "," +
                              item.service_img;
                            console.log(staticpath);
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
                {/* </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Serve;
