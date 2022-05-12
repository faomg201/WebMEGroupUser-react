import React from "react";
import { TopbarB } from "./TopbarB";

import { Component } from 'react';
class Abouts extends Component {
  state = {
    loading: true
  }
  async componentDidMount() {

    const apiUrl = `http://localhost:8000/employees`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ person: data.data, loading: false });
    console.log(data.data);

    const apiUrl2 = `http://localhost:8000/enterprises`;
    const response2 = await fetch(apiUrl2);
    const data2 = await response2.json();
    this.setState({ enterprises: data2.data, loading: false });
    console.log(data2.data);

    const apiUrl3 = `http://localhost:8000/aboutUs/image`;
    const response3 = await fetch(apiUrl3);
    const data3 = await response3.json();
    this.setState({ aboutUsImg: data3.data, loading: false });
    console.log(data3.data);

  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person || !this.state.enterprises || !this.state.aboutUsImg ? (
          <div>loading</div>

        ) : (
          <div>
            <body className='marB'>
              <style jsx>{`
           #content{
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(3,minmax(0px, auto));
         grid-gap: 100px;
         max-width: auto;
         margin: 0 auto;   
       }
       .test {
         width: 200px;
         height: 200px;
       }
       `}</style>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-6">
                    <TopbarB />
                    <div class="container marSpRight3 ">
                      <div class="row">
                        <div class="col-12">
                          <p class="text5dot1"><span class="tab"></span>{this.state.enterprises.enterprise_detail}</p>
                          {/* {this.state.aboutUsImg.map((item) => {
                            const staticpath = 'http://localhost:8000/static/aboutUs/' + item.image_name
                            console.log(staticpath);
                            return (
                              <tr >
                                <div class="col ">
                                  <img class="card test round" src={staticpath}
                                    alt="" />
                                </div>
                              </tr>
                            );
                          })} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="container" align="center">
                            <img src={
                              'http://localhost:8000/static/aboutUs/' +
                              this.state.aboutUsImg[0]?.image_name
                            } width="auto" height="600px" />
                          </div>
                        </div>
                        {
                          this.state.aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                            const staticpath = 'http://localhost:8000/static/aboutUs/' + item.image_name
                            console.log(staticpath);
                            return (
                              <div class="carousel-item">
                                <div class="container" align="center">
                                  <img
                                    src={staticpath}
                                    width="auto" height="600px"
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br /><br /><br /><br />
              <center>
                <div class="container ">
                  <p class="text5bH">ทีมของเรา</p>
                  <br /><br />
                  <div class="row" id='content'>
                    {this.state.person.map((item) => {
                      const staticpath = 'http://localhost:8000/static/employees/' + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                      console.log(staticpath);
                      return (
                        <tr >
                          <div class="col ">
                            <img class="card test round" src={staticpath}
                              alt="" />
                            <div class="card-body ">
                            </div>
                            <br />
                            <div>

                              <p class="text5b">{item.emp_fname} {item.emp_lname}</p>
                              <p class="text5">ตำแหน่ง: {item.emp_class}</p>
                              <p class="text5">คติ: {item.emp_quote}</p>
                            </div>
                          </div>
                        </tr>
                      );
                    })}
                  </div>
                </div>
              </center>

            </body>
          </div>
        )
        }

      </div>
    );
  }
}

export default Abouts;