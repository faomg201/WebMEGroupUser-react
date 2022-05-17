import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";
import axios from 'axios';

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
    axios.get('http://localhost:8000/employees')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEmployees(res.data.data)
      })
    axios.get('http://localhost:8000/enterprises')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchEnterprises(res.data.data)
      })
    axios.get('http://localhost:8000/aboutUs/image')
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
            .abotusImg {
                height: 750px
            }
       `}</style>
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-6">
                  <TopbarB />
                  <div class="container marSpRight3 ">
                    <div class="row">
                      <div class="col-12">
                        <p class="text5dot1"><span class="tab"></span>{Enterprises.enterprise_detail}</p>

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
                            aboutUsImg[0]?.image_name
                          } class="abotusImg" />
                        </div>
                      </div>
                      {
                        aboutUsImg.filter((f, idx) => idx > 0).map((item) => {
                          const staticpath = 'http://localhost:8000/static/aboutUs/' + item.image_name
                          // console.log(staticpath);
                          return (
                            <div class="carousel-item">
                              <div class="container" align="center">
                                <img
                                  src={staticpath}
                                  // width="auto" height="100%"
                                  class="abotusImg"
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
                  {Employees.map((item) => {
                    const staticpath = 'http://localhost:8000/static/employees/' + item.emp_fname + ',' + item.emp_lname + ',' + item.emp_img
                    // console.log(staticpath);
                    return (
                      <tr >
                        <div class="col ">
                          <img class="card test round" src={staticpath}
                            alt="" />
                          <div class="card-body ">
                          </div>
                          <br />
                          <div>

                            <p class="text5b">{item.emp_fname} {item.emp_lname} #{item.mbti_name}</p>
                            <p class="text5">{item.emp_class}</p>
                            <p class="text5">{item.emp_quote}</p>
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