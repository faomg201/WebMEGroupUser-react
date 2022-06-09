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
    axios.get(APIURL + `/services`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchService(res.data.data)
        // console.log(res.data.data);
      })
    axios.get(APIURL + `/serviceus`)
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
            <div className='OurSerPageH'>
              <br />
              <p className='OutServiceHeader'>our service
                <span className='dotOrang'>.</span></p>
              <p class="OutServiceHeader2">บริการของเรา</p>
              <div class="card borderCard cardCardHover ">
                <div className="" style={{
                  position: 'absolute', bottom: '-0vw', left: 0, right: 0,
                  height: '0px'
                }}><img src={imgCR} width="100%" />

                  <div class="sliderOurSer">
                    <div>
                      <div class="row CardOutService">
                        {ServiceUs.map((item, index) => {
                          const staticpath = APIURL + `/static/serviceUs/` + item.serviceUs_name + ',' + item.serviceUs_img
                          return (
                            <>
                              <div className='margintopResSer'>
                                <div class="col OurSerWidth" >
                                  <div className='OutService OurSerHeight'></div>
                                  <div class="card borderCard cardCardHover ">
                                    <div className="marginNameOS" >
                                      <p class="NameOutService">{item.serviceUs_name}</p>
                                    </div>
                                    <div className="ImgOS">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='OurWWUPageH'>
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
                          <div class="col WWUwidth" >
                            <div className='OutService' style={{ height: '0vw' }}></div>
                            <img src={imagesolution[index].src} width="100%" className='ImgWWU' />
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
            </div>
            <div className='OurSolutionPageH'>
              <p className='OurSolutionHeader'>our solution
                <span className='dotOrang'>.</span></p>
              <p class="Outsolution">เราตอบโจทย์ธุรกิจ</p>
              <div className="col-12 ">
                <div
                  id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                >
                  <FadeIn>
                    <div className="carousel-inner ">
                      <div className="carousel-item active">
                        <div className="col" style={{ width: '100vw' }}>
                          <div style={{ height: '100vw' }}>
                            <div className="card borderCard cardCardHover">
                              <div className="" style={{
                                position: 'absolute', bottom: '0px', left: 0, right: 0,
                                height: '100%'
                              }}>
                                <div className="row justify-content-md-center" >
                                  <div style={{ marginTop: '1%' }}></div>
                                  <div className="col-1" ></div>
                                  <div className="col-4 " >
                                    <div className="PosiOSap" >
                                      <svg className='OSap' viewBox="0 0 564 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill="#FF9300" />
                                        <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill="url(#paint0_linear_59_296)" />
                                        <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill="url(#paint1_linear_59_296)" />
                                        <defs>
                                          <linearGradient id="paint0_linear_59_296" x1="156" y1="242.5" x2="262" y2="48" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E04F0C" />
                                            <stop offset="1" stop-color="#FF5000" stop-opacity="0" />
                                          </linearGradient>
                                          <linearGradient id="paint1_linear_59_296" x1="609" y1="-19.5" x2="366.5" y2="318" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FDEBBF" />
                                            <stop offset="1" stop-color="#FFB800" stop-opacity="0" />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                    <div className="PosiCirB">
                                      <svg className='CirB' viewBox="0 0 495 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="247.113" cy="247.305" r="246.944" fill="url(#paint0_linear_53_82)" />
                                        <circle cx="247.113" cy="247.305" r="246.944" fill="url(#paint1_linear_53_82)" />
                                        <defs>
                                          <linearGradient id="paint0_linear_53_82" x1="247.113" y1="0.36084" x2="247.113" y2="494.249" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#515151" />
                                            <stop offset="1" stop-color="#F3F3F3" />
                                          </linearGradient>
                                          <linearGradient id="paint1_linear_53_82" x1="551.5" y1="398.5" x2="218" y2="332.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E3E3E3" />
                                            <stop offset="0.520833" stop-color="#E9E9E9" />
                                            <stop offset="1" stop-color="#8F8F8F" />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                    <div className="PosidotCube">
                                      <svg className='dotCube' viewBox="0 0 323 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="320.261" cy="123.565" r="2.52174" transform="rotate(90 320.261 123.565)" fill="#FF9300" />
                                        <circle cx="320.261" cy="138.696" r="2.52174" transform="rotate(90 320.261 138.696)" fill="#FF9300" />
                                        <circle cx="320.261" cy="153.826" r="2.52174" transform="rotate(90 320.261 153.826)" fill="#FF9300" />
                                        <circle cx="320.261" cy="168.957" r="2.52174" transform="rotate(90 320.261 168.957)" fill="#FF9300" />
                                        <circle cx="320.261" cy="184.087" r="2.52174" transform="rotate(90 320.261 184.087)" fill="#FF9300" />
                                        <circle cx="320.261" cy="199.217" r="2.52174" transform="rotate(90 320.261 199.217)" fill="#FF9300" />
                                        <circle cx="320.261" cy="214.348" r="2.52174" transform="rotate(90 320.261 214.348)" fill="#FF9300" />
                                        <circle cx="320.261" cy="229.478" r="2.52174" transform="rotate(90 320.261 229.478)" fill="#FF9300" />
                                        <circle cx="305.131" cy="123.565" r="2.52174" transform="rotate(90 305.131 123.565)" fill="#FF9300" />
                                        <circle cx="305.131" cy="138.696" r="2.52174" transform="rotate(90 305.131 138.696)" fill="#FF9300" />
                                        <circle cx="305.131" cy="153.826" r="2.52174" transform="rotate(90 305.131 153.826)" fill="#FF9300" />
                                        <circle cx="305.131" cy="168.957" r="2.52174" transform="rotate(90 305.131 168.957)" fill="#FF9300" />
                                        <circle cx="305.131" cy="184.087" r="2.52174" transform="rotate(90 305.131 184.087)" fill="#FF9300" />
                                        <circle cx="305.131" cy="199.217" r="2.52174" transform="rotate(90 305.131 199.217)" fill="#FF9300" />
                                        <circle cx="305.131" cy="214.348" r="2.52174" transform="rotate(90 305.131 214.348)" fill="#FF9300" />
                                        <circle cx="305.131" cy="229.478" r="2.52174" transform="rotate(90 305.131 229.478)" fill="#FF9300" />
                                        <circle cx="320.261" cy="2.52174" r="2.52174" transform="rotate(90 320.261 2.52174)" fill="#FF9300" />
                                        <circle cx="320.261" cy="17.6521" r="2.52174" transform="rotate(90 320.261 17.6521)" fill="#FF9300" />
                                        <circle cx="320.261" cy="32.7827" r="2.52174" transform="rotate(90 320.261 32.7827)" fill="#FF9300" />
                                        <circle cx="320.261" cy="47.9131" r="2.52174" transform="rotate(90 320.261 47.9131)" fill="#FF9300" />
                                        <circle cx="320.261" cy="63.0435" r="2.52174" transform="rotate(90 320.261 63.0435)" fill="#FF9300" />
                                        <circle cx="320.261" cy="78.1738" r="2.52174" transform="rotate(90 320.261 78.1738)" fill="#FF9300" />
                                        <circle cx="320.261" cy="93.3045" r="2.52174" transform="rotate(90 320.261 93.3045)" fill="#FF9300" />
                                        <circle cx="320.261" cy="108.435" r="2.52174" transform="rotate(90 320.261 108.435)" fill="#FF9300" />
                                        <circle cx="305.131" cy="2.52174" r="2.52174" transform="rotate(90 305.131 2.52174)" fill="#FF9300" />
                                        <circle cx="305.131" cy="17.6521" r="2.52174" transform="rotate(90 305.131 17.6521)" fill="#FF9300" />
                                        <circle cx="305.131" cy="32.7827" r="2.52174" transform="rotate(90 305.131 32.7827)" fill="#FF9300" />
                                        <circle cx="305.131" cy="47.9131" r="2.52174" transform="rotate(90 305.131 47.9131)" fill="#FF9300" />
                                        <circle cx="305.131" cy="63.0435" r="2.52174" transform="rotate(90 305.131 63.0435)" fill="#FF9300" />
                                        <circle cx="305.131" cy="78.1738" r="2.52174" transform="rotate(90 305.131 78.1738)" fill="#FF9300" />
                                        <circle cx="305.131" cy="93.3045" r="2.52174" transform="rotate(90 305.131 93.3045)" fill="#FF9300" />
                                        <circle cx="305.131" cy="108.435" r="2.52174" transform="rotate(90 305.131 108.435)" fill="#FF9300" />
                                        <circle cx="290" cy="123.565" r="2.52174" transform="rotate(90 290 123.565)" fill="#FF9300" />
                                        <circle cx="290" cy="138.696" r="2.52174" transform="rotate(90 290 138.696)" fill="#FF9300" />
                                        <circle cx="290" cy="153.826" r="2.52174" transform="rotate(90 290 153.826)" fill="#FF9300" />
                                        <circle cx="290" cy="168.957" r="2.52174" transform="rotate(90 290 168.957)" fill="#FF9300" />
                                        <circle cx="290" cy="184.087" r="2.52174" transform="rotate(90 290 184.087)" fill="#FF9300" />
                                        <circle cx="290" cy="199.217" r="2.52174" transform="rotate(90 290 199.217)" fill="#FF9300" />
                                        <circle cx="290" cy="214.348" r="2.52174" transform="rotate(90 290 214.348)" fill="#FF9300" />
                                        <circle cx="290" cy="229.478" r="2.52174" transform="rotate(90 290 229.478)" fill="#FF9300" />
                                        <circle cx="274.87" cy="123.565" r="2.52174" transform="rotate(90 274.87 123.565)" fill="#FF9300" />
                                        <circle cx="274.87" cy="138.696" r="2.52174" transform="rotate(90 274.87 138.696)" fill="#FF9300" />
                                        <circle cx="274.87" cy="153.826" r="2.52174" transform="rotate(90 274.87 153.826)" fill="#FF9300" />
                                        <circle cx="274.87" cy="168.957" r="2.52174" transform="rotate(90 274.87 168.957)" fill="#FF9300" />
                                        <circle cx="274.87" cy="184.087" r="2.52174" transform="rotate(90 274.87 184.087)" fill="#FF9300" />
                                        <circle cx="274.87" cy="199.217" r="2.52174" transform="rotate(90 274.87 199.217)" fill="#FF9300" />
                                        <circle cx="274.87" cy="214.348" r="2.52174" transform="rotate(90 274.87 214.348)" fill="#FF9300" />
                                        <circle cx="274.87" cy="229.478" r="2.52174" transform="rotate(90 274.87 229.478)" fill="#FF9300" />
                                        <circle cx="290" cy="2.52174" r="2.52174" transform="rotate(90 290 2.52174)" fill="#FF9300" />
                                        <circle cx="290" cy="17.6521" r="2.52174" transform="rotate(90 290 17.6521)" fill="#FF9300" />
                                        <circle cx="290" cy="32.7827" r="2.52174" transform="rotate(90 290 32.7827)" fill="#FF9300" />
                                        <circle cx="290" cy="47.9131" r="2.52174" transform="rotate(90 290 47.9131)" fill="#FF9300" />
                                        <circle cx="290" cy="63.0435" r="2.52174" transform="rotate(90 290 63.0435)" fill="#FF9300" />
                                        <circle cx="290" cy="78.1738" r="2.52174" transform="rotate(90 290 78.1738)" fill="#FF9300" />
                                        <circle cx="290" cy="93.3045" r="2.52174" transform="rotate(90 290 93.3045)" fill="#FF9300" />
                                        <circle cx="290" cy="108.435" r="2.52174" transform="rotate(90 290 108.435)" fill="#FF9300" />
                                        <circle cx="274.87" cy="2.52174" r="2.52174" transform="rotate(90 274.87 2.52174)" fill="#FF9300" />
                                        <circle cx="274.87" cy="17.6521" r="2.52174" transform="rotate(90 274.87 17.6521)" fill="#FF9300" />
                                        <circle cx="274.87" cy="32.7827" r="2.52174" transform="rotate(90 274.87 32.7827)" fill="#FF9300" />
                                        <circle cx="274.87" cy="47.9131" r="2.52174" transform="rotate(90 274.87 47.9131)" fill="#FF9300" />
                                        <circle cx="274.87" cy="63.0435" r="2.52174" transform="rotate(90 274.87 63.0435)" fill="#FF9300" />
                                        <circle cx="274.87" cy="78.1738" r="2.52174" transform="rotate(90 274.87 78.1738)" fill="#FF9300" />
                                        <circle cx="274.87" cy="93.3045" r="2.52174" transform="rotate(90 274.87 93.3045)" fill="#FF9300" />
                                        <circle cx="274.87" cy="108.435" r="2.52174" transform="rotate(90 274.87 108.435)" fill="#FF9300" />
                                        <circle cx="259.739" cy="123.565" r="2.52174" transform="rotate(90 259.739 123.565)" fill="#FF9300" />
                                        <circle cx="259.739" cy="138.696" r="2.52174" transform="rotate(90 259.739 138.696)" fill="#FF9300" />
                                        <circle cx="259.739" cy="153.826" r="2.52174" transform="rotate(90 259.739 153.826)" fill="#FF9300" />
                                        <circle cx="259.739" cy="168.957" r="2.52174" transform="rotate(90 259.739 168.957)" fill="#FF9300" />
                                        <circle cx="259.739" cy="184.087" r="2.52174" transform="rotate(90 259.739 184.087)" fill="#FF9300" />
                                        <circle cx="259.739" cy="199.217" r="2.52174" transform="rotate(90 259.739 199.217)" fill="#FF9300" />
                                        <circle cx="259.739" cy="214.348" r="2.52174" transform="rotate(90 259.739 214.348)" fill="#FF9300" />
                                        <circle cx="259.739" cy="229.478" r="2.52174" transform="rotate(90 259.739 229.478)" fill="#FF9300" />
                                        <circle cx="244.609" cy="123.565" r="2.52174" transform="rotate(90 244.609 123.565)" fill="#FF9300" />
                                        <circle cx="244.609" cy="138.696" r="2.52174" transform="rotate(90 244.609 138.696)" fill="#FF9300" />
                                        <circle cx="244.609" cy="153.826" r="2.52174" transform="rotate(90 244.609 153.826)" fill="#FF9300" />
                                        <circle cx="244.609" cy="168.957" r="2.52174" transform="rotate(90 244.609 168.957)" fill="#FF9300" />
                                        <circle cx="244.609" cy="184.087" r="2.52174" transform="rotate(90 244.609 184.087)" fill="#FF9300" />
                                        <circle cx="244.609" cy="199.217" r="2.52174" transform="rotate(90 244.609 199.217)" fill="#FF9300" />
                                        <circle cx="244.609" cy="214.348" r="2.52174" transform="rotate(90 244.609 214.348)" fill="#FF9300" />
                                        <circle cx="244.609" cy="229.478" r="2.52174" transform="rotate(90 244.609 229.478)" fill="#FF9300" />
                                        <circle cx="259.739" cy="2.52174" r="2.52174" transform="rotate(90 259.739 2.52174)" fill="#FF9300" />
                                        <circle cx="259.739" cy="17.6521" r="2.52174" transform="rotate(90 259.739 17.6521)" fill="#FF9300" />
                                        <circle cx="259.739" cy="32.7827" r="2.52174" transform="rotate(90 259.739 32.7827)" fill="#FF9300" />
                                        <circle cx="259.739" cy="47.9131" r="2.52174" transform="rotate(90 259.739 47.9131)" fill="#FF9300" />
                                        <circle cx="259.739" cy="63.0435" r="2.52174" transform="rotate(90 259.739 63.0435)" fill="#FF9300" />
                                        <circle cx="259.739" cy="78.1738" r="2.52174" transform="rotate(90 259.739 78.1738)" fill="#FF9300" />
                                        <circle cx="259.739" cy="93.3045" r="2.52174" transform="rotate(90 259.739 93.3045)" fill="#FF9300" />
                                        <circle cx="259.739" cy="108.435" r="2.52174" transform="rotate(90 259.739 108.435)" fill="#FF9300" />
                                        <circle cx="244.609" cy="2.52174" r="2.52174" transform="rotate(90 244.609 2.52174)" fill="#FF9300" />
                                        <circle cx="244.609" cy="17.6521" r="2.52174" transform="rotate(90 244.609 17.6521)" fill="#FF9300" />
                                        <circle cx="244.609" cy="32.7827" r="2.52174" transform="rotate(90 244.609 32.7827)" fill="#FF9300" />
                                        <circle cx="244.609" cy="47.9131" r="2.52174" transform="rotate(90 244.609 47.9131)" fill="#FF9300" />
                                        <circle cx="244.609" cy="63.0435" r="2.52174" transform="rotate(90 244.609 63.0435)" fill="#FF9300" />
                                        <circle cx="244.609" cy="78.1738" r="2.52174" transform="rotate(90 244.609 78.1738)" fill="#FF9300" />
                                        <circle cx="244.609" cy="93.3045" r="2.52174" transform="rotate(90 244.609 93.3045)" fill="#FF9300" />
                                        <circle cx="244.609" cy="108.435" r="2.52174" transform="rotate(90 244.609 108.435)" fill="#FF9300" />
                                        <circle cx="229.478" cy="123.565" r="2.52174" transform="rotate(90 229.478 123.565)" fill="#FF9300" />
                                        <circle cx="229.478" cy="138.696" r="2.52174" transform="rotate(90 229.478 138.696)" fill="#FF9300" />
                                        <circle cx="229.478" cy="153.826" r="2.52174" transform="rotate(90 229.478 153.826)" fill="#FF9300" />
                                        <circle cx="229.478" cy="168.957" r="2.52174" transform="rotate(90 229.478 168.957)" fill="#FF9300" />
                                        <circle cx="229.478" cy="184.087" r="2.52174" transform="rotate(90 229.478 184.087)" fill="#FF9300" />
                                        <circle cx="229.478" cy="199.217" r="2.52174" transform="rotate(90 229.478 199.217)" fill="#FF9300" />
                                        <circle cx="229.478" cy="214.348" r="2.52174" transform="rotate(90 229.478 214.348)" fill="#FF9300" />
                                        <circle cx="229.478" cy="229.478" r="2.52174" transform="rotate(90 229.478 229.478)" fill="#FF9300" />
                                        <circle cx="214.348" cy="123.565" r="2.52174" transform="rotate(90 214.348 123.565)" fill="#FF9300" />
                                        <circle cx="214.348" cy="138.696" r="2.52174" transform="rotate(90 214.348 138.696)" fill="#FF9300" />
                                        <circle cx="214.348" cy="153.826" r="2.52174" transform="rotate(90 214.348 153.826)" fill="#FF9300" />
                                        <circle cx="214.348" cy="168.957" r="2.52174" transform="rotate(90 214.348 168.957)" fill="#FF9300" />
                                        <circle cx="214.348" cy="184.087" r="2.52174" transform="rotate(90 214.348 184.087)" fill="#FF9300" />
                                        <circle cx="214.348" cy="199.217" r="2.52174" transform="rotate(90 214.348 199.217)" fill="#FF9300" />
                                        <circle cx="214.348" cy="214.348" r="2.52174" transform="rotate(90 214.348 214.348)" fill="#FF9300" />
                                        <circle cx="214.348" cy="229.478" r="2.52174" transform="rotate(90 214.348 229.478)" fill="#FF9300" />
                                        <circle cx="229.478" cy="2.52174" r="2.52174" transform="rotate(90 229.478 2.52174)" fill="#FF9300" />
                                        <circle cx="229.478" cy="17.6521" r="2.52174" transform="rotate(90 229.478 17.6521)" fill="#FF9300" />
                                        <circle cx="229.478" cy="32.7827" r="2.52174" transform="rotate(90 229.478 32.7827)" fill="#FF9300" />
                                        <circle cx="229.478" cy="47.9131" r="2.52174" transform="rotate(90 229.478 47.9131)" fill="#FF9300" />
                                        <circle cx="229.478" cy="63.0435" r="2.52174" transform="rotate(90 229.478 63.0435)" fill="#FF9300" />
                                        <circle cx="229.478" cy="78.1738" r="2.52174" transform="rotate(90 229.478 78.1738)" fill="#FF9300" />
                                        <circle cx="229.478" cy="93.3045" r="2.52174" transform="rotate(90 229.478 93.3045)" fill="#FF9300" />
                                        <circle cx="229.478" cy="108.435" r="2.52174" transform="rotate(90 229.478 108.435)" fill="#FF9300" />
                                        <circle cx="214.348" cy="2.52174" r="2.52174" transform="rotate(90 214.348 2.52174)" fill="#FF9300" />
                                        <circle cx="214.348" cy="17.6521" r="2.52174" transform="rotate(90 214.348 17.6521)" fill="#FF9300" />
                                        <circle cx="214.348" cy="32.7827" r="2.52174" transform="rotate(90 214.348 32.7827)" fill="#FF9300" />
                                        <circle cx="214.348" cy="47.9131" r="2.52174" transform="rotate(90 214.348 47.9131)" fill="#FF9300" />
                                        <circle cx="214.348" cy="63.0435" r="2.52174" transform="rotate(90 214.348 63.0435)" fill="#FF9300" />
                                        <circle cx="214.348" cy="78.1738" r="2.52174" transform="rotate(90 214.348 78.1738)" fill="#FF9300" />
                                        <circle cx="214.348" cy="93.3045" r="2.52174" transform="rotate(90 214.348 93.3045)" fill="#FF9300" />
                                        <circle cx="214.348" cy="108.435" r="2.52174" transform="rotate(90 214.348 108.435)" fill="#FF9300" />
                                        <circle cx="199.218" cy="123.565" r="2.52174" transform="rotate(90 199.218 123.565)" fill="#FF9300" />
                                        <circle cx="199.218" cy="138.696" r="2.52174" transform="rotate(90 199.218 138.696)" fill="#FF9300" />
                                        <circle cx="199.218" cy="153.826" r="2.52174" transform="rotate(90 199.218 153.826)" fill="#FF9300" />
                                        <circle cx="199.218" cy="168.957" r="2.52174" transform="rotate(90 199.218 168.957)" fill="#FF9300" />
                                        <circle cx="199.218" cy="184.087" r="2.52174" transform="rotate(90 199.218 184.087)" fill="#FF9300" />
                                        <circle cx="199.218" cy="199.217" r="2.52174" transform="rotate(90 199.218 199.217)" fill="#FF9300" />
                                        <circle cx="199.218" cy="214.348" r="2.52174" transform="rotate(90 199.218 214.348)" fill="#FF9300" />
                                        <circle cx="199.218" cy="229.478" r="2.52174" transform="rotate(90 199.218 229.478)" fill="#FF9300" />
                                        <circle cx="184.087" cy="123.565" r="2.52174" transform="rotate(90 184.087 123.565)" fill="#FF9300" />
                                        <circle cx="184.087" cy="138.696" r="2.52174" transform="rotate(90 184.087 138.696)" fill="#FF9300" />
                                        <circle cx="184.087" cy="153.826" r="2.52174" transform="rotate(90 184.087 153.826)" fill="#FF9300" />
                                        <circle cx="184.087" cy="168.957" r="2.52174" transform="rotate(90 184.087 168.957)" fill="#FF9300" />
                                        <circle cx="184.087" cy="184.087" r="2.52174" transform="rotate(90 184.087 184.087)" fill="#FF9300" />
                                        <circle cx="184.087" cy="199.217" r="2.52174" transform="rotate(90 184.087 199.217)" fill="#FF9300" />
                                        <circle cx="184.087" cy="214.348" r="2.52174" transform="rotate(90 184.087 214.348)" fill="#FF9300" />
                                        <circle cx="184.087" cy="229.478" r="2.52174" transform="rotate(90 184.087 229.478)" fill="#FF9300" />
                                        <circle cx="199.218" cy="2.52174" r="2.52174" transform="rotate(90 199.218 2.52174)" fill="#FF9300" />
                                        <circle cx="199.218" cy="17.6521" r="2.52174" transform="rotate(90 199.218 17.6521)" fill="#FF9300" />
                                        <circle cx="199.218" cy="32.7827" r="2.52174" transform="rotate(90 199.218 32.7827)" fill="#FF9300" />
                                        <circle cx="199.218" cy="47.9131" r="2.52174" transform="rotate(90 199.218 47.9131)" fill="#FF9300" />
                                        <circle cx="199.218" cy="63.0435" r="2.52174" transform="rotate(90 199.218 63.0435)" fill="#FF9300" />
                                        <circle cx="199.218" cy="78.1738" r="2.52174" transform="rotate(90 199.218 78.1738)" fill="#FF9300" />
                                        <circle cx="199.218" cy="93.3045" r="2.52174" transform="rotate(90 199.218 93.3045)" fill="#FF9300" />
                                        <circle cx="199.218" cy="108.435" r="2.52174" transform="rotate(90 199.218 108.435)" fill="#FF9300" />
                                        <circle cx="184.087" cy="2.52174" r="2.52174" transform="rotate(90 184.087 2.52174)" fill="#FF9300" />
                                        <circle cx="184.087" cy="17.6521" r="2.52174" transform="rotate(90 184.087 17.6521)" fill="#FF9300" />
                                        <circle cx="184.087" cy="32.7825" r="2.52174" transform="rotate(90 184.087 32.7825)" fill="#FF9300" />
                                        <circle cx="184.087" cy="47.9131" r="2.52174" transform="rotate(90 184.087 47.9131)" fill="#FF9300" />
                                        <circle cx="184.087" cy="63.0435" r="2.52174" transform="rotate(90 184.087 63.0435)" fill="#FF9300" />
                                        <circle cx="184.087" cy="78.1738" r="2.52174" transform="rotate(90 184.087 78.1738)" fill="#FF9300" />
                                        <circle cx="184.087" cy="93.3045" r="2.52174" transform="rotate(90 184.087 93.3045)" fill="#FF9300" />
                                        <circle cx="184.087" cy="108.435" r="2.52174" transform="rotate(90 184.087 108.435)" fill="#FF9300" />
                                        <circle cx="168.957" cy="123.565" r="2.52174" transform="rotate(90 168.957 123.565)" fill="#FF9300" />
                                        <circle cx="168.957" cy="138.696" r="2.52174" transform="rotate(90 168.957 138.696)" fill="#FF9300" />
                                        <circle cx="168.957" cy="153.826" r="2.52174" transform="rotate(90 168.957 153.826)" fill="#FF9300" />
                                        <circle cx="168.957" cy="168.957" r="2.52174" transform="rotate(90 168.957 168.957)" fill="#FF9300" />
                                        <circle cx="168.957" cy="184.087" r="2.52174" transform="rotate(90 168.957 184.087)" fill="#FF9300" />
                                        <circle cx="168.957" cy="199.217" r="2.52174" transform="rotate(90 168.957 199.217)" fill="#FF9300" />
                                        <circle cx="168.957" cy="214.348" r="2.52174" transform="rotate(90 168.957 214.348)" fill="#FF9300" />
                                        <circle cx="168.957" cy="229.478" r="2.52174" transform="rotate(90 168.957 229.478)" fill="#FF9300" />
                                        <circle cx="153.826" cy="123.565" r="2.52174" transform="rotate(90 153.826 123.565)" fill="#FF9300" />
                                        <circle cx="153.826" cy="138.696" r="2.52174" transform="rotate(90 153.826 138.696)" fill="#FF9300" />
                                        <circle cx="153.826" cy="153.826" r="2.52174" transform="rotate(90 153.826 153.826)" fill="#FF9300" />
                                        <circle cx="153.826" cy="168.957" r="2.52174" transform="rotate(90 153.826 168.957)" fill="#FF9300" />
                                        <circle cx="153.826" cy="184.087" r="2.52174" transform="rotate(90 153.826 184.087)" fill="#FF9300" />
                                        <circle cx="153.826" cy="199.217" r="2.52174" transform="rotate(90 153.826 199.217)" fill="#FF9300" />
                                        <circle cx="153.826" cy="214.348" r="2.52174" transform="rotate(90 153.826 214.348)" fill="#FF9300" />
                                        <circle cx="153.826" cy="229.478" r="2.52174" transform="rotate(90 153.826 229.478)" fill="#FF9300" />
                                        <circle cx="168.957" cy="2.52174" r="2.52174" transform="rotate(90 168.957 2.52174)" fill="#FF9300" />
                                        <circle cx="168.957" cy="17.6521" r="2.52174" transform="rotate(90 168.957 17.6521)" fill="#FF9300" />
                                        <circle cx="168.957" cy="32.7825" r="2.52174" transform="rotate(90 168.957 32.7825)" fill="#FF9300" />
                                        <circle cx="168.957" cy="47.9131" r="2.52174" transform="rotate(90 168.957 47.9131)" fill="#FF9300" />
                                        <circle cx="168.957" cy="63.0435" r="2.52174" transform="rotate(90 168.957 63.0435)" fill="#FF9300" />
                                        <circle cx="168.957" cy="78.1738" r="2.52174" transform="rotate(90 168.957 78.1738)" fill="#FF9300" />
                                        <circle cx="168.957" cy="93.3045" r="2.52174" transform="rotate(90 168.957 93.3045)" fill="#FF9300" />
                                        <circle cx="168.957" cy="108.435" r="2.52174" transform="rotate(90 168.957 108.435)" fill="#FF9300" />
                                        <circle cx="153.826" cy="2.52174" r="2.52174" transform="rotate(90 153.826 2.52174)" fill="#FF9300" />
                                        <circle cx="153.826" cy="17.6521" r="2.52174" transform="rotate(90 153.826 17.6521)" fill="#FF9300" />
                                        <circle cx="153.826" cy="32.7825" r="2.52174" transform="rotate(90 153.826 32.7825)" fill="#FF9300" />
                                        <circle cx="153.826" cy="47.9131" r="2.52174" transform="rotate(90 153.826 47.9131)" fill="#FF9300" />
                                        <circle cx="153.826" cy="63.0435" r="2.52174" transform="rotate(90 153.826 63.0435)" fill="#FF9300" />
                                        <circle cx="153.826" cy="78.1738" r="2.52174" transform="rotate(90 153.826 78.1738)" fill="#FF9300" />
                                        <circle cx="153.826" cy="93.3045" r="2.52174" transform="rotate(90 153.826 93.3045)" fill="#FF9300" />
                                        <circle cx="153.826" cy="108.435" r="2.52174" transform="rotate(90 153.826 108.435)" fill="#FF9300" />
                                        <circle cx="138.696" cy="123.565" r="2.52174" transform="rotate(90 138.696 123.565)" fill="#FF9300" />
                                        <circle cx="138.696" cy="138.696" r="2.52174" transform="rotate(90 138.696 138.696)" fill="#FF9300" />
                                        <circle cx="138.696" cy="153.826" r="2.52174" transform="rotate(90 138.696 153.826)" fill="#FF9300" />
                                        <circle cx="138.696" cy="168.957" r="2.52174" transform="rotate(90 138.696 168.957)" fill="#FF9300" />
                                        <circle cx="138.696" cy="184.087" r="2.52174" transform="rotate(90 138.696 184.087)" fill="#FF9300" />
                                        <circle cx="138.696" cy="199.217" r="2.52174" transform="rotate(90 138.696 199.217)" fill="#FF9300" />
                                        <circle cx="138.696" cy="214.348" r="2.52174" transform="rotate(90 138.696 214.348)" fill="#FF9300" />
                                        <circle cx="138.696" cy="229.478" r="2.52174" transform="rotate(90 138.696 229.478)" fill="#FF9300" />
                                        <circle cx="123.565" cy="123.565" r="2.52174" transform="rotate(90 123.565 123.565)" fill="#FF9300" />
                                        <circle cx="123.565" cy="138.696" r="2.52174" transform="rotate(90 123.565 138.696)" fill="#FF9300" />
                                        <circle cx="123.565" cy="153.826" r="2.52174" transform="rotate(90 123.565 153.826)" fill="#FF9300" />
                                        <circle cx="123.565" cy="168.957" r="2.52174" transform="rotate(90 123.565 168.957)" fill="#FF9300" />
                                        <circle cx="123.565" cy="184.087" r="2.52174" transform="rotate(90 123.565 184.087)" fill="#FF9300" />
                                        <circle cx="123.565" cy="199.217" r="2.52174" transform="rotate(90 123.565 199.217)" fill="#FF9300" />
                                        <circle cx="123.565" cy="214.348" r="2.52174" transform="rotate(90 123.565 214.348)" fill="#FF9300" />
                                        <circle cx="123.565" cy="229.478" r="2.52174" transform="rotate(90 123.565 229.478)" fill="#FF9300" />
                                        <circle cx="138.696" cy="2.52174" r="2.52174" transform="rotate(90 138.696 2.52174)" fill="#FF9300" />
                                        <circle cx="138.696" cy="17.6521" r="2.52174" transform="rotate(90 138.696 17.6521)" fill="#FF9300" />
                                        <circle cx="138.696" cy="32.7825" r="2.52174" transform="rotate(90 138.696 32.7825)" fill="#FF9300" />
                                        <circle cx="138.696" cy="47.9131" r="2.52174" transform="rotate(90 138.696 47.9131)" fill="#FF9300" />
                                        <circle cx="138.696" cy="63.0435" r="2.52174" transform="rotate(90 138.696 63.0435)" fill="#FF9300" />
                                        <circle cx="138.696" cy="78.1738" r="2.52174" transform="rotate(90 138.696 78.1738)" fill="#FF9300" />
                                        <circle cx="138.696" cy="93.3045" r="2.52174" transform="rotate(90 138.696 93.3045)" fill="#FF9300" />
                                        <circle cx="138.696" cy="108.435" r="2.52174" transform="rotate(90 138.696 108.435)" fill="#FF9300" />
                                        <circle cx="123.565" cy="2.52174" r="2.52174" transform="rotate(90 123.565 2.52174)" fill="#FF9300" />
                                        <circle cx="123.565" cy="17.6521" r="2.52174" transform="rotate(90 123.565 17.6521)" fill="#FF9300" />
                                        <circle cx="123.565" cy="32.7825" r="2.52174" transform="rotate(90 123.565 32.7825)" fill="#FF9300" />
                                        <circle cx="123.565" cy="47.9131" r="2.52174" transform="rotate(90 123.565 47.9131)" fill="#FF9300" />
                                        <circle cx="123.565" cy="63.0435" r="2.52174" transform="rotate(90 123.565 63.0435)" fill="#FF9300" />
                                        <circle cx="123.565" cy="78.1738" r="2.52174" transform="rotate(90 123.565 78.1738)" fill="#FF9300" />
                                        <circle cx="123.565" cy="93.3045" r="2.52174" transform="rotate(90 123.565 93.3045)" fill="#FF9300" />
                                        <circle cx="123.565" cy="108.435" r="2.52174" transform="rotate(90 123.565 108.435)" fill="#FF9300" />
                                        <circle cx="108.435" cy="123.565" r="2.52174" transform="rotate(90 108.435 123.565)" fill="#FF9300" />
                                        <circle cx="108.435" cy="138.696" r="2.52174" transform="rotate(90 108.435 138.696)" fill="#FF9300" />
                                        <circle cx="108.435" cy="153.826" r="2.52174" transform="rotate(90 108.435 153.826)" fill="#FF9300" />
                                        <circle cx="108.435" cy="168.957" r="2.52174" transform="rotate(90 108.435 168.957)" fill="#FF9300" />
                                        <circle cx="108.435" cy="184.087" r="2.52174" transform="rotate(90 108.435 184.087)" fill="#FF9300" />
                                        <circle cx="108.435" cy="199.217" r="2.52174" transform="rotate(90 108.435 199.217)" fill="#FF9300" />
                                        <circle cx="108.435" cy="214.348" r="2.52174" transform="rotate(90 108.435 214.348)" fill="#FF9300" />
                                        <circle cx="108.435" cy="229.478" r="2.52174" transform="rotate(90 108.435 229.478)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="123.565" r="2.52174" transform="rotate(90 93.3044 123.565)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="138.696" r="2.52174" transform="rotate(90 93.3044 138.696)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="153.826" r="2.52174" transform="rotate(90 93.3044 153.826)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="168.957" r="2.52174" transform="rotate(90 93.3044 168.957)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="184.087" r="2.52174" transform="rotate(90 93.3044 184.087)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="199.217" r="2.52174" transform="rotate(90 93.3044 199.217)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="214.348" r="2.52174" transform="rotate(90 93.3044 214.348)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="229.478" r="2.52174" transform="rotate(90 93.3044 229.478)" fill="#FF9300" />
                                        <circle cx="108.435" cy="2.52174" r="2.52174" transform="rotate(90 108.435 2.52174)" fill="#FF9300" />
                                        <circle cx="108.435" cy="17.6521" r="2.52174" transform="rotate(90 108.435 17.6521)" fill="#FF9300" />
                                        <circle cx="108.435" cy="32.7825" r="2.52174" transform="rotate(90 108.435 32.7825)" fill="#FF9300" />
                                        <circle cx="108.435" cy="47.9131" r="2.52174" transform="rotate(90 108.435 47.9131)" fill="#FF9300" />
                                        <circle cx="108.435" cy="63.0435" r="2.52174" transform="rotate(90 108.435 63.0435)" fill="#FF9300" />
                                        <circle cx="108.435" cy="78.1738" r="2.52174" transform="rotate(90 108.435 78.1738)" fill="#FF9300" />
                                        <circle cx="108.435" cy="93.3045" r="2.52174" transform="rotate(90 108.435 93.3045)" fill="#FF9300" />
                                        <circle cx="108.435" cy="108.435" r="2.52174" transform="rotate(90 108.435 108.435)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="2.52174" r="2.52174" transform="rotate(90 93.3044 2.52174)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="17.6521" r="2.52174" transform="rotate(90 93.3044 17.6521)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="32.7825" r="2.52174" transform="rotate(90 93.3044 32.7825)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="47.9131" r="2.52174" transform="rotate(90 93.3044 47.9131)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="63.0435" r="2.52174" transform="rotate(90 93.3044 63.0435)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="78.1738" r="2.52174" transform="rotate(90 93.3044 78.1738)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="93.3045" r="2.52174" transform="rotate(90 93.3044 93.3045)" fill="#FF9300" />
                                        <circle cx="93.3044" cy="108.435" r="2.52174" transform="rotate(90 93.3044 108.435)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="123.565" r="2.52174" transform="rotate(90 78.1741 123.565)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="138.696" r="2.52174" transform="rotate(90 78.1741 138.696)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="153.826" r="2.52174" transform="rotate(90 78.1741 153.826)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="168.957" r="2.52174" transform="rotate(90 78.1741 168.957)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="184.087" r="2.52174" transform="rotate(90 78.1741 184.087)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="199.217" r="2.52174" transform="rotate(90 78.1741 199.217)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="214.348" r="2.52174" transform="rotate(90 78.1741 214.348)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="229.478" r="2.52174" transform="rotate(90 78.1741 229.478)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="123.565" r="2.52174" transform="rotate(90 63.0437 123.565)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="138.696" r="2.52174" transform="rotate(90 63.0437 138.696)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="153.826" r="2.52174" transform="rotate(90 63.0437 153.826)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="168.957" r="2.52174" transform="rotate(90 63.0437 168.957)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="184.087" r="2.52174" transform="rotate(90 63.0437 184.087)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="199.217" r="2.52174" transform="rotate(90 63.0437 199.217)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="214.348" r="2.52174" transform="rotate(90 63.0437 214.348)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="229.478" r="2.52174" transform="rotate(90 63.0437 229.478)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="2.52174" r="2.52174" transform="rotate(90 78.1741 2.52174)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="17.6521" r="2.52174" transform="rotate(90 78.1741 17.6521)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="32.7825" r="2.52174" transform="rotate(90 78.1741 32.7825)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="47.9131" r="2.52174" transform="rotate(90 78.1741 47.9131)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="63.0435" r="2.52174" transform="rotate(90 78.1741 63.0435)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="78.1738" r="2.52174" transform="rotate(90 78.1741 78.1738)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="93.3045" r="2.52174" transform="rotate(90 78.1741 93.3045)" fill="#FF9300" />
                                        <circle cx="78.1741" cy="108.435" r="2.52174" transform="rotate(90 78.1741 108.435)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="2.52174" r="2.52174" transform="rotate(90 63.0437 2.52174)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="17.6521" r="2.52174" transform="rotate(90 63.0437 17.6521)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="32.7825" r="2.52174" transform="rotate(90 63.0437 32.7825)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="47.9131" r="2.52174" transform="rotate(90 63.0437 47.9131)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="63.0435" r="2.52174" transform="rotate(90 63.0437 63.0435)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="78.1738" r="2.52174" transform="rotate(90 63.0437 78.1738)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="93.3045" r="2.52174" transform="rotate(90 63.0437 93.3045)" fill="#FF9300" />
                                        <circle cx="63.0437" cy="108.435" r="2.52174" transform="rotate(90 63.0437 108.435)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="123.565" r="2.52174" transform="rotate(90 47.9133 123.565)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="138.696" r="2.52174" transform="rotate(90 47.9133 138.696)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="153.826" r="2.52174" transform="rotate(90 47.9133 153.826)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="168.957" r="2.52174" transform="rotate(90 47.9133 168.957)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="184.087" r="2.52174" transform="rotate(90 47.9133 184.087)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="199.217" r="2.52174" transform="rotate(90 47.9133 199.217)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="214.348" r="2.52174" transform="rotate(90 47.9133 214.348)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="229.478" r="2.52174" transform="rotate(90 47.9133 229.478)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="123.565" r="2.52174" transform="rotate(90 32.7829 123.565)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="138.696" r="2.52174" transform="rotate(90 32.7829 138.696)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="153.826" r="2.52174" transform="rotate(90 32.7829 153.826)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="168.957" r="2.52174" transform="rotate(90 32.7829 168.957)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="184.087" r="2.52174" transform="rotate(90 32.7829 184.087)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="199.217" r="2.52174" transform="rotate(90 32.7829 199.217)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="214.348" r="2.52174" transform="rotate(90 32.7829 214.348)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="229.478" r="2.52174" transform="rotate(90 32.7829 229.478)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="2.52174" r="2.52174" transform="rotate(90 47.9133 2.52174)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="17.6521" r="2.52174" transform="rotate(90 47.9133 17.6521)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="32.7825" r="2.52174" transform="rotate(90 47.9133 32.7825)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="47.9131" r="2.52174" transform="rotate(90 47.9133 47.9131)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="63.0435" r="2.52174" transform="rotate(90 47.9133 63.0435)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="78.1738" r="2.52174" transform="rotate(90 47.9133 78.1738)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="93.3045" r="2.52174" transform="rotate(90 47.9133 93.3045)" fill="#FF9300" />
                                        <circle cx="47.9133" cy="108.435" r="2.52174" transform="rotate(90 47.9133 108.435)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="2.52174" r="2.52174" transform="rotate(90 32.7829 2.52174)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="17.6521" r="2.52174" transform="rotate(90 32.7829 17.6521)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="32.7825" r="2.52174" transform="rotate(90 32.7829 32.7825)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="47.9131" r="2.52174" transform="rotate(90 32.7829 47.9131)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="63.0435" r="2.52174" transform="rotate(90 32.7829 63.0435)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="78.1738" r="2.52174" transform="rotate(90 32.7829 78.1738)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="93.3045" r="2.52174" transform="rotate(90 32.7829 93.3045)" fill="#FF9300" />
                                        <circle cx="32.7829" cy="108.435" r="2.52174" transform="rotate(90 32.7829 108.435)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="123.565" r="2.52174" transform="rotate(90 17.6521 123.565)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="138.696" r="2.52174" transform="rotate(90 17.6521 138.696)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="153.826" r="2.52174" transform="rotate(90 17.6521 153.826)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="168.957" r="2.52174" transform="rotate(90 17.6521 168.957)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="184.087" r="2.52174" transform="rotate(90 17.6521 184.087)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="199.217" r="2.52174" transform="rotate(90 17.6521 199.217)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="214.348" r="2.52174" transform="rotate(90 17.6521 214.348)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="229.478" r="2.52174" transform="rotate(90 17.6521 229.478)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="123.565" r="2.52174" transform="rotate(90 2.52172 123.565)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="138.696" r="2.52174" transform="rotate(90 2.52172 138.696)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="153.826" r="2.52174" transform="rotate(90 2.52172 153.826)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="168.957" r="2.52174" transform="rotate(90 2.52172 168.957)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="184.087" r="2.52174" transform="rotate(90 2.52172 184.087)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="199.217" r="2.52174" transform="rotate(90 2.52172 199.217)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="214.348" r="2.52174" transform="rotate(90 2.52172 214.348)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="229.478" r="2.52174" transform="rotate(90 2.52172 229.478)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="2.52174" r="2.52174" transform="rotate(90 17.6521 2.52174)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="17.6521" r="2.52174" transform="rotate(90 17.6521 17.6521)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="32.7825" r="2.52174" transform="rotate(90 17.6521 32.7825)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="47.9131" r="2.52174" transform="rotate(90 17.6521 47.9131)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="63.0435" r="2.52174" transform="rotate(90 17.6521 63.0435)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="78.1738" r="2.52174" transform="rotate(90 17.6521 78.1738)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="93.3045" r="2.52174" transform="rotate(90 17.6521 93.3045)" fill="#FF9300" />
                                        <circle cx="17.6521" cy="108.435" r="2.52174" transform="rotate(90 17.6521 108.435)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="2.52174" r="2.52174" transform="rotate(90 2.52172 2.52174)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="17.6521" r="2.52174" transform="rotate(90 2.52172 17.6521)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="32.7825" r="2.52174" transform="rotate(90 2.52172 32.7825)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="47.9131" r="2.52174" transform="rotate(90 2.52172 47.9131)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="63.0435" r="2.52174" transform="rotate(90 2.52172 63.0435)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="78.1738" r="2.52174" transform="rotate(90 2.52172 78.1738)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="93.3045" r="2.52174" transform="rotate(90 2.52172 93.3045)" fill="#FF9300" />
                                        <circle cx="2.52172" cy="108.435" r="2.52174" transform="rotate(90 2.52172 108.435)" fill="#FF9300" />
                                      </svg>
                                    </div>
                                    <div className="PosiImgslideSoul" >
                                      <div className='' style={{ height: '100%' }}>
                                        <svg className='ImgslideSoul' viewBox="0 0 1167 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M743.426 808.179C1133.27 756.326 1319.54 115.16 1014.3 21.245C709.065 -72.6697 696.492 186.376 183.993 144.877C-328.507 103.378 353.581 860.032 743.426 808.179Z" fill='url(#img1)' />
                                          <pattern id="img1" width="1" height="1">ฃ
                                            <image href={APIURL + `/static/services/` +
                                              Service[0]?.service_name +
                                              "," +
                                              Service[0]?.service_img} width="100%" />
                                          </pattern>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="PosiCirfilter">
                                      <svg className='Cirfilter' viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_53_83)">
                                          <circle cx="52.5" cy="48.5" r="48.5" fill="url(#paint0_linear_53_83)" shape-rendering="crispEdges" />
                                          <circle cx="52.5" cy="48.5" r="48.5" fill="url(#paint1_linear_53_83)" shape-rendering="crispEdges" />
                                        </g>
                                        <defs>
                                          <filter id="filter0_d_53_83" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_53_83" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_53_83" result="shape" />
                                          </filter>
                                          <linearGradient id="paint0_linear_53_83" x1="52.5" y1="0" x2="52.5" y2="97" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" />
                                            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                                          </linearGradient>
                                          <linearGradient id="paint1_linear_53_83" x1="80.616" y1="-22.4928" x2="17.3551" y2="128.63" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BFBFBF" />
                                            <stop offset="1" stop-color="#BFBFBF" stop-opacity="0" />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="col-1" ></div>
                                  <div className="col-6 ">
                                    <div className='' style={{ borderRadius: '30px', height: '100%' }}>
                                      <div className="row justify-content-md-center">
                                        <div className='col-10 TextHeadOutSolution PosiSoul' align='left'>{Service[0]?.service_name}</div>
                                        <div className='col-10' align='left'>
                                          <p className='textInfoSer PosiSoulDetail' style={{ marginTop: '2%' }}>
                                            <span>ถ้าคุณคือ {Service[0]?.service_name}</span>
                                            <p><span>ที่</span><span>{Service[0]?.service_detail}</span></p>
                                          </p>
                                        </div>
                                        <div className="" style={{ position: 'absolute', bottom: '-20vw', left: '36%', right: 0, height: '100%' }}>
                                          <div className='col-10' align='center'>
                                            <a class="buttonSendOutSolution PosiSoulBT" role="button" >สอบถามเพิ่มเติม</a>
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
                        .map((item, index) => {
                          const staticpath =
                            APIURL + `/static/services/` +
                            item.service_name +
                            "," +
                            item.service_img;
                          return (
                            <div className="carousel-item ">
                              <div className="col" style={{ width: '100vw' }}>
                                <div style={{ height: '100vw' }}>
                                  <div className="card borderCard cardCardHover">
                                    <div className="" style={{
                                      position: 'absolute', bottom: '0px', left: 0, right: 0,
                                      height: '100%'
                                    }}>
                                      <div className="row justify-content-md-center" >

                                        <div style={{ marginTop: '1%' }}></div>
                                        <div className="col-1" ></div>
                                        <div className="col-4" >
                                          <div className="PosiOSap">
                                            <svg className='OSap' viewBox="0 0 564 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill="#FF9300" />
                                              <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill={`url(#${'A1' + index})`} />
                                              <path d="M144.432 11.5782C-34.0599 81.4455 -47.6821 406.578 107.712 415.542C263.105 424.505 238.939 300.433 486.339 260.49C733.74 220.548 322.924 -58.2891 144.432 11.5782Z" fill={`url(#${'AA1' + index})`} />
                                              <defs>
                                                <linearGradient id={'A1' + (index)} x1="156" y1="242.5" x2="262" y2="48" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="#E04F0C" />
                                                  <stop offset="1" stop-color="#FF5000" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id={'AA1' + (index)} x1="609" y1="-19.5" x2="366.5" y2="318" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="#FDEBBF" />
                                                  <stop offset="1" stop-color="#FFB800" stop-opacity="0" />
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </div>
                                          <div className="PosiCirB">
                                            <svg className='CirB' viewBox="0 0 495 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx="247.113" cy="247.305" r="246.944" fill={`url(#${'x1' + index})`} />
                                              <circle cx="247.113" cy="247.305" r="246.944" fill={`url(#${'xx1' + index})`} />
                                              <defs>
                                                <linearGradient id={'x1' + (index)} x1="247.113" y1="0.36084" x2="247.113" y2="494.249" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="#515151" />
                                                  <stop offset="1" stop-color="#F3F3F3" />
                                                </linearGradient>
                                                <linearGradient id={'xx1' + (index)} x1="551.5" y1="398.5" x2="218" y2="332.5" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="#E3E3E3" />
                                                  <stop offset="0.520833" stop-color="#E9E9E9" />
                                                  <stop offset="1" stop-color="#8F8F8F" />
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </div>
                                          <div className="PosidotCube">
                                            <svg className='dotCube' viewBox="0 0 323 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx="320.261" cy="123.565" r="2.52174" transform="rotate(90 320.261 123.565)" fill="#FF9300" />
                                              <circle cx="320.261" cy="138.696" r="2.52174" transform="rotate(90 320.261 138.696)" fill="#FF9300" />
                                              <circle cx="320.261" cy="153.826" r="2.52174" transform="rotate(90 320.261 153.826)" fill="#FF9300" />
                                              <circle cx="320.261" cy="168.957" r="2.52174" transform="rotate(90 320.261 168.957)" fill="#FF9300" />
                                              <circle cx="320.261" cy="184.087" r="2.52174" transform="rotate(90 320.261 184.087)" fill="#FF9300" />
                                              <circle cx="320.261" cy="199.217" r="2.52174" transform="rotate(90 320.261 199.217)" fill="#FF9300" />
                                              <circle cx="320.261" cy="214.348" r="2.52174" transform="rotate(90 320.261 214.348)" fill="#FF9300" />
                                              <circle cx="320.261" cy="229.478" r="2.52174" transform="rotate(90 320.261 229.478)" fill="#FF9300" />
                                              <circle cx="305.131" cy="123.565" r="2.52174" transform="rotate(90 305.131 123.565)" fill="#FF9300" />
                                              <circle cx="305.131" cy="138.696" r="2.52174" transform="rotate(90 305.131 138.696)" fill="#FF9300" />
                                              <circle cx="305.131" cy="153.826" r="2.52174" transform="rotate(90 305.131 153.826)" fill="#FF9300" />
                                              <circle cx="305.131" cy="168.957" r="2.52174" transform="rotate(90 305.131 168.957)" fill="#FF9300" />
                                              <circle cx="305.131" cy="184.087" r="2.52174" transform="rotate(90 305.131 184.087)" fill="#FF9300" />
                                              <circle cx="305.131" cy="199.217" r="2.52174" transform="rotate(90 305.131 199.217)" fill="#FF9300" />
                                              <circle cx="305.131" cy="214.348" r="2.52174" transform="rotate(90 305.131 214.348)" fill="#FF9300" />
                                              <circle cx="305.131" cy="229.478" r="2.52174" transform="rotate(90 305.131 229.478)" fill="#FF9300" />
                                              <circle cx="320.261" cy="2.52174" r="2.52174" transform="rotate(90 320.261 2.52174)" fill="#FF9300" />
                                              <circle cx="320.261" cy="17.6521" r="2.52174" transform="rotate(90 320.261 17.6521)" fill="#FF9300" />
                                              <circle cx="320.261" cy="32.7827" r="2.52174" transform="rotate(90 320.261 32.7827)" fill="#FF9300" />
                                              <circle cx="320.261" cy="47.9131" r="2.52174" transform="rotate(90 320.261 47.9131)" fill="#FF9300" />
                                              <circle cx="320.261" cy="63.0435" r="2.52174" transform="rotate(90 320.261 63.0435)" fill="#FF9300" />
                                              <circle cx="320.261" cy="78.1738" r="2.52174" transform="rotate(90 320.261 78.1738)" fill="#FF9300" />
                                              <circle cx="320.261" cy="93.3045" r="2.52174" transform="rotate(90 320.261 93.3045)" fill="#FF9300" />
                                              <circle cx="320.261" cy="108.435" r="2.52174" transform="rotate(90 320.261 108.435)" fill="#FF9300" />
                                              <circle cx="305.131" cy="2.52174" r="2.52174" transform="rotate(90 305.131 2.52174)" fill="#FF9300" />
                                              <circle cx="305.131" cy="17.6521" r="2.52174" transform="rotate(90 305.131 17.6521)" fill="#FF9300" />
                                              <circle cx="305.131" cy="32.7827" r="2.52174" transform="rotate(90 305.131 32.7827)" fill="#FF9300" />
                                              <circle cx="305.131" cy="47.9131" r="2.52174" transform="rotate(90 305.131 47.9131)" fill="#FF9300" />
                                              <circle cx="305.131" cy="63.0435" r="2.52174" transform="rotate(90 305.131 63.0435)" fill="#FF9300" />
                                              <circle cx="305.131" cy="78.1738" r="2.52174" transform="rotate(90 305.131 78.1738)" fill="#FF9300" />
                                              <circle cx="305.131" cy="93.3045" r="2.52174" transform="rotate(90 305.131 93.3045)" fill="#FF9300" />
                                              <circle cx="305.131" cy="108.435" r="2.52174" transform="rotate(90 305.131 108.435)" fill="#FF9300" />
                                              <circle cx="290" cy="123.565" r="2.52174" transform="rotate(90 290 123.565)" fill="#FF9300" />
                                              <circle cx="290" cy="138.696" r="2.52174" transform="rotate(90 290 138.696)" fill="#FF9300" />
                                              <circle cx="290" cy="153.826" r="2.52174" transform="rotate(90 290 153.826)" fill="#FF9300" />
                                              <circle cx="290" cy="168.957" r="2.52174" transform="rotate(90 290 168.957)" fill="#FF9300" />
                                              <circle cx="290" cy="184.087" r="2.52174" transform="rotate(90 290 184.087)" fill="#FF9300" />
                                              <circle cx="290" cy="199.217" r="2.52174" transform="rotate(90 290 199.217)" fill="#FF9300" />
                                              <circle cx="290" cy="214.348" r="2.52174" transform="rotate(90 290 214.348)" fill="#FF9300" />
                                              <circle cx="290" cy="229.478" r="2.52174" transform="rotate(90 290 229.478)" fill="#FF9300" />
                                              <circle cx="274.87" cy="123.565" r="2.52174" transform="rotate(90 274.87 123.565)" fill="#FF9300" />
                                              <circle cx="274.87" cy="138.696" r="2.52174" transform="rotate(90 274.87 138.696)" fill="#FF9300" />
                                              <circle cx="274.87" cy="153.826" r="2.52174" transform="rotate(90 274.87 153.826)" fill="#FF9300" />
                                              <circle cx="274.87" cy="168.957" r="2.52174" transform="rotate(90 274.87 168.957)" fill="#FF9300" />
                                              <circle cx="274.87" cy="184.087" r="2.52174" transform="rotate(90 274.87 184.087)" fill="#FF9300" />
                                              <circle cx="274.87" cy="199.217" r="2.52174" transform="rotate(90 274.87 199.217)" fill="#FF9300" />
                                              <circle cx="274.87" cy="214.348" r="2.52174" transform="rotate(90 274.87 214.348)" fill="#FF9300" />
                                              <circle cx="274.87" cy="229.478" r="2.52174" transform="rotate(90 274.87 229.478)" fill="#FF9300" />
                                              <circle cx="290" cy="2.52174" r="2.52174" transform="rotate(90 290 2.52174)" fill="#FF9300" />
                                              <circle cx="290" cy="17.6521" r="2.52174" transform="rotate(90 290 17.6521)" fill="#FF9300" />
                                              <circle cx="290" cy="32.7827" r="2.52174" transform="rotate(90 290 32.7827)" fill="#FF9300" />
                                              <circle cx="290" cy="47.9131" r="2.52174" transform="rotate(90 290 47.9131)" fill="#FF9300" />
                                              <circle cx="290" cy="63.0435" r="2.52174" transform="rotate(90 290 63.0435)" fill="#FF9300" />
                                              <circle cx="290" cy="78.1738" r="2.52174" transform="rotate(90 290 78.1738)" fill="#FF9300" />
                                              <circle cx="290" cy="93.3045" r="2.52174" transform="rotate(90 290 93.3045)" fill="#FF9300" />
                                              <circle cx="290" cy="108.435" r="2.52174" transform="rotate(90 290 108.435)" fill="#FF9300" />
                                              <circle cx="274.87" cy="2.52174" r="2.52174" transform="rotate(90 274.87 2.52174)" fill="#FF9300" />
                                              <circle cx="274.87" cy="17.6521" r="2.52174" transform="rotate(90 274.87 17.6521)" fill="#FF9300" />
                                              <circle cx="274.87" cy="32.7827" r="2.52174" transform="rotate(90 274.87 32.7827)" fill="#FF9300" />
                                              <circle cx="274.87" cy="47.9131" r="2.52174" transform="rotate(90 274.87 47.9131)" fill="#FF9300" />
                                              <circle cx="274.87" cy="63.0435" r="2.52174" transform="rotate(90 274.87 63.0435)" fill="#FF9300" />
                                              <circle cx="274.87" cy="78.1738" r="2.52174" transform="rotate(90 274.87 78.1738)" fill="#FF9300" />
                                              <circle cx="274.87" cy="93.3045" r="2.52174" transform="rotate(90 274.87 93.3045)" fill="#FF9300" />
                                              <circle cx="274.87" cy="108.435" r="2.52174" transform="rotate(90 274.87 108.435)" fill="#FF9300" />
                                              <circle cx="259.739" cy="123.565" r="2.52174" transform="rotate(90 259.739 123.565)" fill="#FF9300" />
                                              <circle cx="259.739" cy="138.696" r="2.52174" transform="rotate(90 259.739 138.696)" fill="#FF9300" />
                                              <circle cx="259.739" cy="153.826" r="2.52174" transform="rotate(90 259.739 153.826)" fill="#FF9300" />
                                              <circle cx="259.739" cy="168.957" r="2.52174" transform="rotate(90 259.739 168.957)" fill="#FF9300" />
                                              <circle cx="259.739" cy="184.087" r="2.52174" transform="rotate(90 259.739 184.087)" fill="#FF9300" />
                                              <circle cx="259.739" cy="199.217" r="2.52174" transform="rotate(90 259.739 199.217)" fill="#FF9300" />
                                              <circle cx="259.739" cy="214.348" r="2.52174" transform="rotate(90 259.739 214.348)" fill="#FF9300" />
                                              <circle cx="259.739" cy="229.478" r="2.52174" transform="rotate(90 259.739 229.478)" fill="#FF9300" />
                                              <circle cx="244.609" cy="123.565" r="2.52174" transform="rotate(90 244.609 123.565)" fill="#FF9300" />
                                              <circle cx="244.609" cy="138.696" r="2.52174" transform="rotate(90 244.609 138.696)" fill="#FF9300" />
                                              <circle cx="244.609" cy="153.826" r="2.52174" transform="rotate(90 244.609 153.826)" fill="#FF9300" />
                                              <circle cx="244.609" cy="168.957" r="2.52174" transform="rotate(90 244.609 168.957)" fill="#FF9300" />
                                              <circle cx="244.609" cy="184.087" r="2.52174" transform="rotate(90 244.609 184.087)" fill="#FF9300" />
                                              <circle cx="244.609" cy="199.217" r="2.52174" transform="rotate(90 244.609 199.217)" fill="#FF9300" />
                                              <circle cx="244.609" cy="214.348" r="2.52174" transform="rotate(90 244.609 214.348)" fill="#FF9300" />
                                              <circle cx="244.609" cy="229.478" r="2.52174" transform="rotate(90 244.609 229.478)" fill="#FF9300" />
                                              <circle cx="259.739" cy="2.52174" r="2.52174" transform="rotate(90 259.739 2.52174)" fill="#FF9300" />
                                              <circle cx="259.739" cy="17.6521" r="2.52174" transform="rotate(90 259.739 17.6521)" fill="#FF9300" />
                                              <circle cx="259.739" cy="32.7827" r="2.52174" transform="rotate(90 259.739 32.7827)" fill="#FF9300" />
                                              <circle cx="259.739" cy="47.9131" r="2.52174" transform="rotate(90 259.739 47.9131)" fill="#FF9300" />
                                              <circle cx="259.739" cy="63.0435" r="2.52174" transform="rotate(90 259.739 63.0435)" fill="#FF9300" />
                                              <circle cx="259.739" cy="78.1738" r="2.52174" transform="rotate(90 259.739 78.1738)" fill="#FF9300" />
                                              <circle cx="259.739" cy="93.3045" r="2.52174" transform="rotate(90 259.739 93.3045)" fill="#FF9300" />
                                              <circle cx="259.739" cy="108.435" r="2.52174" transform="rotate(90 259.739 108.435)" fill="#FF9300" />
                                              <circle cx="244.609" cy="2.52174" r="2.52174" transform="rotate(90 244.609 2.52174)" fill="#FF9300" />
                                              <circle cx="244.609" cy="17.6521" r="2.52174" transform="rotate(90 244.609 17.6521)" fill="#FF9300" />
                                              <circle cx="244.609" cy="32.7827" r="2.52174" transform="rotate(90 244.609 32.7827)" fill="#FF9300" />
                                              <circle cx="244.609" cy="47.9131" r="2.52174" transform="rotate(90 244.609 47.9131)" fill="#FF9300" />
                                              <circle cx="244.609" cy="63.0435" r="2.52174" transform="rotate(90 244.609 63.0435)" fill="#FF9300" />
                                              <circle cx="244.609" cy="78.1738" r="2.52174" transform="rotate(90 244.609 78.1738)" fill="#FF9300" />
                                              <circle cx="244.609" cy="93.3045" r="2.52174" transform="rotate(90 244.609 93.3045)" fill="#FF9300" />
                                              <circle cx="244.609" cy="108.435" r="2.52174" transform="rotate(90 244.609 108.435)" fill="#FF9300" />
                                              <circle cx="229.478" cy="123.565" r="2.52174" transform="rotate(90 229.478 123.565)" fill="#FF9300" />
                                              <circle cx="229.478" cy="138.696" r="2.52174" transform="rotate(90 229.478 138.696)" fill="#FF9300" />
                                              <circle cx="229.478" cy="153.826" r="2.52174" transform="rotate(90 229.478 153.826)" fill="#FF9300" />
                                              <circle cx="229.478" cy="168.957" r="2.52174" transform="rotate(90 229.478 168.957)" fill="#FF9300" />
                                              <circle cx="229.478" cy="184.087" r="2.52174" transform="rotate(90 229.478 184.087)" fill="#FF9300" />
                                              <circle cx="229.478" cy="199.217" r="2.52174" transform="rotate(90 229.478 199.217)" fill="#FF9300" />
                                              <circle cx="229.478" cy="214.348" r="2.52174" transform="rotate(90 229.478 214.348)" fill="#FF9300" />
                                              <circle cx="229.478" cy="229.478" r="2.52174" transform="rotate(90 229.478 229.478)" fill="#FF9300" />
                                              <circle cx="214.348" cy="123.565" r="2.52174" transform="rotate(90 214.348 123.565)" fill="#FF9300" />
                                              <circle cx="214.348" cy="138.696" r="2.52174" transform="rotate(90 214.348 138.696)" fill="#FF9300" />
                                              <circle cx="214.348" cy="153.826" r="2.52174" transform="rotate(90 214.348 153.826)" fill="#FF9300" />
                                              <circle cx="214.348" cy="168.957" r="2.52174" transform="rotate(90 214.348 168.957)" fill="#FF9300" />
                                              <circle cx="214.348" cy="184.087" r="2.52174" transform="rotate(90 214.348 184.087)" fill="#FF9300" />
                                              <circle cx="214.348" cy="199.217" r="2.52174" transform="rotate(90 214.348 199.217)" fill="#FF9300" />
                                              <circle cx="214.348" cy="214.348" r="2.52174" transform="rotate(90 214.348 214.348)" fill="#FF9300" />
                                              <circle cx="214.348" cy="229.478" r="2.52174" transform="rotate(90 214.348 229.478)" fill="#FF9300" />
                                              <circle cx="229.478" cy="2.52174" r="2.52174" transform="rotate(90 229.478 2.52174)" fill="#FF9300" />
                                              <circle cx="229.478" cy="17.6521" r="2.52174" transform="rotate(90 229.478 17.6521)" fill="#FF9300" />
                                              <circle cx="229.478" cy="32.7827" r="2.52174" transform="rotate(90 229.478 32.7827)" fill="#FF9300" />
                                              <circle cx="229.478" cy="47.9131" r="2.52174" transform="rotate(90 229.478 47.9131)" fill="#FF9300" />
                                              <circle cx="229.478" cy="63.0435" r="2.52174" transform="rotate(90 229.478 63.0435)" fill="#FF9300" />
                                              <circle cx="229.478" cy="78.1738" r="2.52174" transform="rotate(90 229.478 78.1738)" fill="#FF9300" />
                                              <circle cx="229.478" cy="93.3045" r="2.52174" transform="rotate(90 229.478 93.3045)" fill="#FF9300" />
                                              <circle cx="229.478" cy="108.435" r="2.52174" transform="rotate(90 229.478 108.435)" fill="#FF9300" />
                                              <circle cx="214.348" cy="2.52174" r="2.52174" transform="rotate(90 214.348 2.52174)" fill="#FF9300" />
                                              <circle cx="214.348" cy="17.6521" r="2.52174" transform="rotate(90 214.348 17.6521)" fill="#FF9300" />
                                              <circle cx="214.348" cy="32.7827" r="2.52174" transform="rotate(90 214.348 32.7827)" fill="#FF9300" />
                                              <circle cx="214.348" cy="47.9131" r="2.52174" transform="rotate(90 214.348 47.9131)" fill="#FF9300" />
                                              <circle cx="214.348" cy="63.0435" r="2.52174" transform="rotate(90 214.348 63.0435)" fill="#FF9300" />
                                              <circle cx="214.348" cy="78.1738" r="2.52174" transform="rotate(90 214.348 78.1738)" fill="#FF9300" />
                                              <circle cx="214.348" cy="93.3045" r="2.52174" transform="rotate(90 214.348 93.3045)" fill="#FF9300" />
                                              <circle cx="214.348" cy="108.435" r="2.52174" transform="rotate(90 214.348 108.435)" fill="#FF9300" />
                                              <circle cx="199.218" cy="123.565" r="2.52174" transform="rotate(90 199.218 123.565)" fill="#FF9300" />
                                              <circle cx="199.218" cy="138.696" r="2.52174" transform="rotate(90 199.218 138.696)" fill="#FF9300" />
                                              <circle cx="199.218" cy="153.826" r="2.52174" transform="rotate(90 199.218 153.826)" fill="#FF9300" />
                                              <circle cx="199.218" cy="168.957" r="2.52174" transform="rotate(90 199.218 168.957)" fill="#FF9300" />
                                              <circle cx="199.218" cy="184.087" r="2.52174" transform="rotate(90 199.218 184.087)" fill="#FF9300" />
                                              <circle cx="199.218" cy="199.217" r="2.52174" transform="rotate(90 199.218 199.217)" fill="#FF9300" />
                                              <circle cx="199.218" cy="214.348" r="2.52174" transform="rotate(90 199.218 214.348)" fill="#FF9300" />
                                              <circle cx="199.218" cy="229.478" r="2.52174" transform="rotate(90 199.218 229.478)" fill="#FF9300" />
                                              <circle cx="184.087" cy="123.565" r="2.52174" transform="rotate(90 184.087 123.565)" fill="#FF9300" />
                                              <circle cx="184.087" cy="138.696" r="2.52174" transform="rotate(90 184.087 138.696)" fill="#FF9300" />
                                              <circle cx="184.087" cy="153.826" r="2.52174" transform="rotate(90 184.087 153.826)" fill="#FF9300" />
                                              <circle cx="184.087" cy="168.957" r="2.52174" transform="rotate(90 184.087 168.957)" fill="#FF9300" />
                                              <circle cx="184.087" cy="184.087" r="2.52174" transform="rotate(90 184.087 184.087)" fill="#FF9300" />
                                              <circle cx="184.087" cy="199.217" r="2.52174" transform="rotate(90 184.087 199.217)" fill="#FF9300" />
                                              <circle cx="184.087" cy="214.348" r="2.52174" transform="rotate(90 184.087 214.348)" fill="#FF9300" />
                                              <circle cx="184.087" cy="229.478" r="2.52174" transform="rotate(90 184.087 229.478)" fill="#FF9300" />
                                              <circle cx="199.218" cy="2.52174" r="2.52174" transform="rotate(90 199.218 2.52174)" fill="#FF9300" />
                                              <circle cx="199.218" cy="17.6521" r="2.52174" transform="rotate(90 199.218 17.6521)" fill="#FF9300" />
                                              <circle cx="199.218" cy="32.7827" r="2.52174" transform="rotate(90 199.218 32.7827)" fill="#FF9300" />
                                              <circle cx="199.218" cy="47.9131" r="2.52174" transform="rotate(90 199.218 47.9131)" fill="#FF9300" />
                                              <circle cx="199.218" cy="63.0435" r="2.52174" transform="rotate(90 199.218 63.0435)" fill="#FF9300" />
                                              <circle cx="199.218" cy="78.1738" r="2.52174" transform="rotate(90 199.218 78.1738)" fill="#FF9300" />
                                              <circle cx="199.218" cy="93.3045" r="2.52174" transform="rotate(90 199.218 93.3045)" fill="#FF9300" />
                                              <circle cx="199.218" cy="108.435" r="2.52174" transform="rotate(90 199.218 108.435)" fill="#FF9300" />
                                              <circle cx="184.087" cy="2.52174" r="2.52174" transform="rotate(90 184.087 2.52174)" fill="#FF9300" />
                                              <circle cx="184.087" cy="17.6521" r="2.52174" transform="rotate(90 184.087 17.6521)" fill="#FF9300" />
                                              <circle cx="184.087" cy="32.7825" r="2.52174" transform="rotate(90 184.087 32.7825)" fill="#FF9300" />
                                              <circle cx="184.087" cy="47.9131" r="2.52174" transform="rotate(90 184.087 47.9131)" fill="#FF9300" />
                                              <circle cx="184.087" cy="63.0435" r="2.52174" transform="rotate(90 184.087 63.0435)" fill="#FF9300" />
                                              <circle cx="184.087" cy="78.1738" r="2.52174" transform="rotate(90 184.087 78.1738)" fill="#FF9300" />
                                              <circle cx="184.087" cy="93.3045" r="2.52174" transform="rotate(90 184.087 93.3045)" fill="#FF9300" />
                                              <circle cx="184.087" cy="108.435" r="2.52174" transform="rotate(90 184.087 108.435)" fill="#FF9300" />
                                              <circle cx="168.957" cy="123.565" r="2.52174" transform="rotate(90 168.957 123.565)" fill="#FF9300" />
                                              <circle cx="168.957" cy="138.696" r="2.52174" transform="rotate(90 168.957 138.696)" fill="#FF9300" />
                                              <circle cx="168.957" cy="153.826" r="2.52174" transform="rotate(90 168.957 153.826)" fill="#FF9300" />
                                              <circle cx="168.957" cy="168.957" r="2.52174" transform="rotate(90 168.957 168.957)" fill="#FF9300" />
                                              <circle cx="168.957" cy="184.087" r="2.52174" transform="rotate(90 168.957 184.087)" fill="#FF9300" />
                                              <circle cx="168.957" cy="199.217" r="2.52174" transform="rotate(90 168.957 199.217)" fill="#FF9300" />
                                              <circle cx="168.957" cy="214.348" r="2.52174" transform="rotate(90 168.957 214.348)" fill="#FF9300" />
                                              <circle cx="168.957" cy="229.478" r="2.52174" transform="rotate(90 168.957 229.478)" fill="#FF9300" />
                                              <circle cx="153.826" cy="123.565" r="2.52174" transform="rotate(90 153.826 123.565)" fill="#FF9300" />
                                              <circle cx="153.826" cy="138.696" r="2.52174" transform="rotate(90 153.826 138.696)" fill="#FF9300" />
                                              <circle cx="153.826" cy="153.826" r="2.52174" transform="rotate(90 153.826 153.826)" fill="#FF9300" />
                                              <circle cx="153.826" cy="168.957" r="2.52174" transform="rotate(90 153.826 168.957)" fill="#FF9300" />
                                              <circle cx="153.826" cy="184.087" r="2.52174" transform="rotate(90 153.826 184.087)" fill="#FF9300" />
                                              <circle cx="153.826" cy="199.217" r="2.52174" transform="rotate(90 153.826 199.217)" fill="#FF9300" />
                                              <circle cx="153.826" cy="214.348" r="2.52174" transform="rotate(90 153.826 214.348)" fill="#FF9300" />
                                              <circle cx="153.826" cy="229.478" r="2.52174" transform="rotate(90 153.826 229.478)" fill="#FF9300" />
                                              <circle cx="168.957" cy="2.52174" r="2.52174" transform="rotate(90 168.957 2.52174)" fill="#FF9300" />
                                              <circle cx="168.957" cy="17.6521" r="2.52174" transform="rotate(90 168.957 17.6521)" fill="#FF9300" />
                                              <circle cx="168.957" cy="32.7825" r="2.52174" transform="rotate(90 168.957 32.7825)" fill="#FF9300" />
                                              <circle cx="168.957" cy="47.9131" r="2.52174" transform="rotate(90 168.957 47.9131)" fill="#FF9300" />
                                              <circle cx="168.957" cy="63.0435" r="2.52174" transform="rotate(90 168.957 63.0435)" fill="#FF9300" />
                                              <circle cx="168.957" cy="78.1738" r="2.52174" transform="rotate(90 168.957 78.1738)" fill="#FF9300" />
                                              <circle cx="168.957" cy="93.3045" r="2.52174" transform="rotate(90 168.957 93.3045)" fill="#FF9300" />
                                              <circle cx="168.957" cy="108.435" r="2.52174" transform="rotate(90 168.957 108.435)" fill="#FF9300" />
                                              <circle cx="153.826" cy="2.52174" r="2.52174" transform="rotate(90 153.826 2.52174)" fill="#FF9300" />
                                              <circle cx="153.826" cy="17.6521" r="2.52174" transform="rotate(90 153.826 17.6521)" fill="#FF9300" />
                                              <circle cx="153.826" cy="32.7825" r="2.52174" transform="rotate(90 153.826 32.7825)" fill="#FF9300" />
                                              <circle cx="153.826" cy="47.9131" r="2.52174" transform="rotate(90 153.826 47.9131)" fill="#FF9300" />
                                              <circle cx="153.826" cy="63.0435" r="2.52174" transform="rotate(90 153.826 63.0435)" fill="#FF9300" />
                                              <circle cx="153.826" cy="78.1738" r="2.52174" transform="rotate(90 153.826 78.1738)" fill="#FF9300" />
                                              <circle cx="153.826" cy="93.3045" r="2.52174" transform="rotate(90 153.826 93.3045)" fill="#FF9300" />
                                              <circle cx="153.826" cy="108.435" r="2.52174" transform="rotate(90 153.826 108.435)" fill="#FF9300" />
                                              <circle cx="138.696" cy="123.565" r="2.52174" transform="rotate(90 138.696 123.565)" fill="#FF9300" />
                                              <circle cx="138.696" cy="138.696" r="2.52174" transform="rotate(90 138.696 138.696)" fill="#FF9300" />
                                              <circle cx="138.696" cy="153.826" r="2.52174" transform="rotate(90 138.696 153.826)" fill="#FF9300" />
                                              <circle cx="138.696" cy="168.957" r="2.52174" transform="rotate(90 138.696 168.957)" fill="#FF9300" />
                                              <circle cx="138.696" cy="184.087" r="2.52174" transform="rotate(90 138.696 184.087)" fill="#FF9300" />
                                              <circle cx="138.696" cy="199.217" r="2.52174" transform="rotate(90 138.696 199.217)" fill="#FF9300" />
                                              <circle cx="138.696" cy="214.348" r="2.52174" transform="rotate(90 138.696 214.348)" fill="#FF9300" />
                                              <circle cx="138.696" cy="229.478" r="2.52174" transform="rotate(90 138.696 229.478)" fill="#FF9300" />
                                              <circle cx="123.565" cy="123.565" r="2.52174" transform="rotate(90 123.565 123.565)" fill="#FF9300" />
                                              <circle cx="123.565" cy="138.696" r="2.52174" transform="rotate(90 123.565 138.696)" fill="#FF9300" />
                                              <circle cx="123.565" cy="153.826" r="2.52174" transform="rotate(90 123.565 153.826)" fill="#FF9300" />
                                              <circle cx="123.565" cy="168.957" r="2.52174" transform="rotate(90 123.565 168.957)" fill="#FF9300" />
                                              <circle cx="123.565" cy="184.087" r="2.52174" transform="rotate(90 123.565 184.087)" fill="#FF9300" />
                                              <circle cx="123.565" cy="199.217" r="2.52174" transform="rotate(90 123.565 199.217)" fill="#FF9300" />
                                              <circle cx="123.565" cy="214.348" r="2.52174" transform="rotate(90 123.565 214.348)" fill="#FF9300" />
                                              <circle cx="123.565" cy="229.478" r="2.52174" transform="rotate(90 123.565 229.478)" fill="#FF9300" />
                                              <circle cx="138.696" cy="2.52174" r="2.52174" transform="rotate(90 138.696 2.52174)" fill="#FF9300" />
                                              <circle cx="138.696" cy="17.6521" r="2.52174" transform="rotate(90 138.696 17.6521)" fill="#FF9300" />
                                              <circle cx="138.696" cy="32.7825" r="2.52174" transform="rotate(90 138.696 32.7825)" fill="#FF9300" />
                                              <circle cx="138.696" cy="47.9131" r="2.52174" transform="rotate(90 138.696 47.9131)" fill="#FF9300" />
                                              <circle cx="138.696" cy="63.0435" r="2.52174" transform="rotate(90 138.696 63.0435)" fill="#FF9300" />
                                              <circle cx="138.696" cy="78.1738" r="2.52174" transform="rotate(90 138.696 78.1738)" fill="#FF9300" />
                                              <circle cx="138.696" cy="93.3045" r="2.52174" transform="rotate(90 138.696 93.3045)" fill="#FF9300" />
                                              <circle cx="138.696" cy="108.435" r="2.52174" transform="rotate(90 138.696 108.435)" fill="#FF9300" />
                                              <circle cx="123.565" cy="2.52174" r="2.52174" transform="rotate(90 123.565 2.52174)" fill="#FF9300" />
                                              <circle cx="123.565" cy="17.6521" r="2.52174" transform="rotate(90 123.565 17.6521)" fill="#FF9300" />
                                              <circle cx="123.565" cy="32.7825" r="2.52174" transform="rotate(90 123.565 32.7825)" fill="#FF9300" />
                                              <circle cx="123.565" cy="47.9131" r="2.52174" transform="rotate(90 123.565 47.9131)" fill="#FF9300" />
                                              <circle cx="123.565" cy="63.0435" r="2.52174" transform="rotate(90 123.565 63.0435)" fill="#FF9300" />
                                              <circle cx="123.565" cy="78.1738" r="2.52174" transform="rotate(90 123.565 78.1738)" fill="#FF9300" />
                                              <circle cx="123.565" cy="93.3045" r="2.52174" transform="rotate(90 123.565 93.3045)" fill="#FF9300" />
                                              <circle cx="123.565" cy="108.435" r="2.52174" transform="rotate(90 123.565 108.435)" fill="#FF9300" />
                                              <circle cx="108.435" cy="123.565" r="2.52174" transform="rotate(90 108.435 123.565)" fill="#FF9300" />
                                              <circle cx="108.435" cy="138.696" r="2.52174" transform="rotate(90 108.435 138.696)" fill="#FF9300" />
                                              <circle cx="108.435" cy="153.826" r="2.52174" transform="rotate(90 108.435 153.826)" fill="#FF9300" />
                                              <circle cx="108.435" cy="168.957" r="2.52174" transform="rotate(90 108.435 168.957)" fill="#FF9300" />
                                              <circle cx="108.435" cy="184.087" r="2.52174" transform="rotate(90 108.435 184.087)" fill="#FF9300" />
                                              <circle cx="108.435" cy="199.217" r="2.52174" transform="rotate(90 108.435 199.217)" fill="#FF9300" />
                                              <circle cx="108.435" cy="214.348" r="2.52174" transform="rotate(90 108.435 214.348)" fill="#FF9300" />
                                              <circle cx="108.435" cy="229.478" r="2.52174" transform="rotate(90 108.435 229.478)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="123.565" r="2.52174" transform="rotate(90 93.3044 123.565)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="138.696" r="2.52174" transform="rotate(90 93.3044 138.696)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="153.826" r="2.52174" transform="rotate(90 93.3044 153.826)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="168.957" r="2.52174" transform="rotate(90 93.3044 168.957)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="184.087" r="2.52174" transform="rotate(90 93.3044 184.087)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="199.217" r="2.52174" transform="rotate(90 93.3044 199.217)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="214.348" r="2.52174" transform="rotate(90 93.3044 214.348)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="229.478" r="2.52174" transform="rotate(90 93.3044 229.478)" fill="#FF9300" />
                                              <circle cx="108.435" cy="2.52174" r="2.52174" transform="rotate(90 108.435 2.52174)" fill="#FF9300" />
                                              <circle cx="108.435" cy="17.6521" r="2.52174" transform="rotate(90 108.435 17.6521)" fill="#FF9300" />
                                              <circle cx="108.435" cy="32.7825" r="2.52174" transform="rotate(90 108.435 32.7825)" fill="#FF9300" />
                                              <circle cx="108.435" cy="47.9131" r="2.52174" transform="rotate(90 108.435 47.9131)" fill="#FF9300" />
                                              <circle cx="108.435" cy="63.0435" r="2.52174" transform="rotate(90 108.435 63.0435)" fill="#FF9300" />
                                              <circle cx="108.435" cy="78.1738" r="2.52174" transform="rotate(90 108.435 78.1738)" fill="#FF9300" />
                                              <circle cx="108.435" cy="93.3045" r="2.52174" transform="rotate(90 108.435 93.3045)" fill="#FF9300" />
                                              <circle cx="108.435" cy="108.435" r="2.52174" transform="rotate(90 108.435 108.435)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="2.52174" r="2.52174" transform="rotate(90 93.3044 2.52174)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="17.6521" r="2.52174" transform="rotate(90 93.3044 17.6521)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="32.7825" r="2.52174" transform="rotate(90 93.3044 32.7825)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="47.9131" r="2.52174" transform="rotate(90 93.3044 47.9131)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="63.0435" r="2.52174" transform="rotate(90 93.3044 63.0435)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="78.1738" r="2.52174" transform="rotate(90 93.3044 78.1738)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="93.3045" r="2.52174" transform="rotate(90 93.3044 93.3045)" fill="#FF9300" />
                                              <circle cx="93.3044" cy="108.435" r="2.52174" transform="rotate(90 93.3044 108.435)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="123.565" r="2.52174" transform="rotate(90 78.1741 123.565)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="138.696" r="2.52174" transform="rotate(90 78.1741 138.696)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="153.826" r="2.52174" transform="rotate(90 78.1741 153.826)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="168.957" r="2.52174" transform="rotate(90 78.1741 168.957)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="184.087" r="2.52174" transform="rotate(90 78.1741 184.087)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="199.217" r="2.52174" transform="rotate(90 78.1741 199.217)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="214.348" r="2.52174" transform="rotate(90 78.1741 214.348)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="229.478" r="2.52174" transform="rotate(90 78.1741 229.478)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="123.565" r="2.52174" transform="rotate(90 63.0437 123.565)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="138.696" r="2.52174" transform="rotate(90 63.0437 138.696)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="153.826" r="2.52174" transform="rotate(90 63.0437 153.826)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="168.957" r="2.52174" transform="rotate(90 63.0437 168.957)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="184.087" r="2.52174" transform="rotate(90 63.0437 184.087)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="199.217" r="2.52174" transform="rotate(90 63.0437 199.217)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="214.348" r="2.52174" transform="rotate(90 63.0437 214.348)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="229.478" r="2.52174" transform="rotate(90 63.0437 229.478)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="2.52174" r="2.52174" transform="rotate(90 78.1741 2.52174)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="17.6521" r="2.52174" transform="rotate(90 78.1741 17.6521)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="32.7825" r="2.52174" transform="rotate(90 78.1741 32.7825)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="47.9131" r="2.52174" transform="rotate(90 78.1741 47.9131)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="63.0435" r="2.52174" transform="rotate(90 78.1741 63.0435)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="78.1738" r="2.52174" transform="rotate(90 78.1741 78.1738)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="93.3045" r="2.52174" transform="rotate(90 78.1741 93.3045)" fill="#FF9300" />
                                              <circle cx="78.1741" cy="108.435" r="2.52174" transform="rotate(90 78.1741 108.435)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="2.52174" r="2.52174" transform="rotate(90 63.0437 2.52174)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="17.6521" r="2.52174" transform="rotate(90 63.0437 17.6521)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="32.7825" r="2.52174" transform="rotate(90 63.0437 32.7825)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="47.9131" r="2.52174" transform="rotate(90 63.0437 47.9131)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="63.0435" r="2.52174" transform="rotate(90 63.0437 63.0435)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="78.1738" r="2.52174" transform="rotate(90 63.0437 78.1738)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="93.3045" r="2.52174" transform="rotate(90 63.0437 93.3045)" fill="#FF9300" />
                                              <circle cx="63.0437" cy="108.435" r="2.52174" transform="rotate(90 63.0437 108.435)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="123.565" r="2.52174" transform="rotate(90 47.9133 123.565)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="138.696" r="2.52174" transform="rotate(90 47.9133 138.696)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="153.826" r="2.52174" transform="rotate(90 47.9133 153.826)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="168.957" r="2.52174" transform="rotate(90 47.9133 168.957)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="184.087" r="2.52174" transform="rotate(90 47.9133 184.087)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="199.217" r="2.52174" transform="rotate(90 47.9133 199.217)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="214.348" r="2.52174" transform="rotate(90 47.9133 214.348)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="229.478" r="2.52174" transform="rotate(90 47.9133 229.478)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="123.565" r="2.52174" transform="rotate(90 32.7829 123.565)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="138.696" r="2.52174" transform="rotate(90 32.7829 138.696)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="153.826" r="2.52174" transform="rotate(90 32.7829 153.826)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="168.957" r="2.52174" transform="rotate(90 32.7829 168.957)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="184.087" r="2.52174" transform="rotate(90 32.7829 184.087)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="199.217" r="2.52174" transform="rotate(90 32.7829 199.217)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="214.348" r="2.52174" transform="rotate(90 32.7829 214.348)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="229.478" r="2.52174" transform="rotate(90 32.7829 229.478)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="2.52174" r="2.52174" transform="rotate(90 47.9133 2.52174)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="17.6521" r="2.52174" transform="rotate(90 47.9133 17.6521)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="32.7825" r="2.52174" transform="rotate(90 47.9133 32.7825)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="47.9131" r="2.52174" transform="rotate(90 47.9133 47.9131)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="63.0435" r="2.52174" transform="rotate(90 47.9133 63.0435)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="78.1738" r="2.52174" transform="rotate(90 47.9133 78.1738)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="93.3045" r="2.52174" transform="rotate(90 47.9133 93.3045)" fill="#FF9300" />
                                              <circle cx="47.9133" cy="108.435" r="2.52174" transform="rotate(90 47.9133 108.435)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="2.52174" r="2.52174" transform="rotate(90 32.7829 2.52174)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="17.6521" r="2.52174" transform="rotate(90 32.7829 17.6521)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="32.7825" r="2.52174" transform="rotate(90 32.7829 32.7825)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="47.9131" r="2.52174" transform="rotate(90 32.7829 47.9131)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="63.0435" r="2.52174" transform="rotate(90 32.7829 63.0435)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="78.1738" r="2.52174" transform="rotate(90 32.7829 78.1738)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="93.3045" r="2.52174" transform="rotate(90 32.7829 93.3045)" fill="#FF9300" />
                                              <circle cx="32.7829" cy="108.435" r="2.52174" transform="rotate(90 32.7829 108.435)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="123.565" r="2.52174" transform="rotate(90 17.6521 123.565)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="138.696" r="2.52174" transform="rotate(90 17.6521 138.696)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="153.826" r="2.52174" transform="rotate(90 17.6521 153.826)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="168.957" r="2.52174" transform="rotate(90 17.6521 168.957)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="184.087" r="2.52174" transform="rotate(90 17.6521 184.087)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="199.217" r="2.52174" transform="rotate(90 17.6521 199.217)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="214.348" r="2.52174" transform="rotate(90 17.6521 214.348)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="229.478" r="2.52174" transform="rotate(90 17.6521 229.478)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="123.565" r="2.52174" transform="rotate(90 2.52172 123.565)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="138.696" r="2.52174" transform="rotate(90 2.52172 138.696)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="153.826" r="2.52174" transform="rotate(90 2.52172 153.826)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="168.957" r="2.52174" transform="rotate(90 2.52172 168.957)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="184.087" r="2.52174" transform="rotate(90 2.52172 184.087)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="199.217" r="2.52174" transform="rotate(90 2.52172 199.217)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="214.348" r="2.52174" transform="rotate(90 2.52172 214.348)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="229.478" r="2.52174" transform="rotate(90 2.52172 229.478)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="2.52174" r="2.52174" transform="rotate(90 17.6521 2.52174)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="17.6521" r="2.52174" transform="rotate(90 17.6521 17.6521)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="32.7825" r="2.52174" transform="rotate(90 17.6521 32.7825)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="47.9131" r="2.52174" transform="rotate(90 17.6521 47.9131)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="63.0435" r="2.52174" transform="rotate(90 17.6521 63.0435)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="78.1738" r="2.52174" transform="rotate(90 17.6521 78.1738)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="93.3045" r="2.52174" transform="rotate(90 17.6521 93.3045)" fill="#FF9300" />
                                              <circle cx="17.6521" cy="108.435" r="2.52174" transform="rotate(90 17.6521 108.435)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="2.52174" r="2.52174" transform="rotate(90 2.52172 2.52174)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="17.6521" r="2.52174" transform="rotate(90 2.52172 17.6521)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="32.7825" r="2.52174" transform="rotate(90 2.52172 32.7825)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="47.9131" r="2.52174" transform="rotate(90 2.52172 47.9131)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="63.0435" r="2.52174" transform="rotate(90 2.52172 63.0435)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="78.1738" r="2.52174" transform="rotate(90 2.52172 78.1738)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="93.3045" r="2.52174" transform="rotate(90 2.52172 93.3045)" fill="#FF9300" />
                                              <circle cx="2.52172" cy="108.435" r="2.52174" transform="rotate(90 2.52172 108.435)" fill="#FF9300" />
                                            </svg>
                                          </div>
                                          <div className="PosiImgslideSoul">
                                            <div className='' style={{ height: '100%' }}>
                                              <svg className='ImgslideSoul' viewBox="0 0 1167 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M743.426 808.179C1133.27 756.326 1319.54 115.16 1014.3 21.245C709.065 -72.6697 696.492 186.376 183.993 144.877C-328.507 103.378 353.581 860.032 743.426 808.179Z" fill={`url(#${index})`} />
                                                <pattern id={(index)} width="1" height="1">
                                                  <image href={staticpath} width="100%" />
                                                </pattern>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="PosiCirfilter">
                                            <svg className='Cirfilter' viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <g fill={`url(#${'x' + index})`}>
                                                <circle cx="52.5" cy="48.5" r="48.5" fill={`url(#${'xx' + index})`} shape-rendering="crispEdges" />
                                                <circle cx="52.5" cy="48.5" r="48.5" fill={`url(#${'xxx' + index})`} shape-rendering="crispEdges" />
                                              </g>
                                              <defs>
                                                <filter id={'x' + (index)} x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                  <feOffset dy="4" />
                                                  <feGaussianBlur stdDeviation="2" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_53_83" />
                                                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_53_83" result="shape" />
                                                </filter>
                                                <linearGradient id={'xx' + (index)} x1="52.5" y1="0" x2="52.5" y2="97" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="white" />
                                                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id={'xxx' + (index)} x1="80.616" y1="-22.4928" x2="17.3551" y2="128.63" gradientUnits="userSpaceOnUse">
                                                  <stop stop-color="#BFBFBF" />
                                                  <stop offset="1" stop-color="#BFBFBF" stop-opacity="0" />
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="col-1" ></div>
                                        <div className="col-6 " >
                                          <div className='col-6'></div>
                                          <div className='bg-none' style={{ borderRadius: '30px', height: '100%' }}>
                                            <div className="row justify-content-md-center">
                                              <div className='col-10 TextHeadOutSolution PosiSoul' align='left'>{item.service_name}</div>
                                              <div className='col-10' align='left'>
                                                <p className='textInfoSer PosiSoulDetail' style={{ marginTop: '2%' }}>
                                                  <span>ถ้าคุณคือ {item.service_name}</span>
                                                  <p><span>ที่</span><span>{item.service_detail}</span></p>
                                                </p>
                                              </div>
                                              <div className="" style={{ position: 'absolute', bottom: '-20vw', left: '36%', right: 0, height: '100%' }}>
                                                <div className='col-10' align='center'>
                                                  <a class="buttonSendOutSolution PosiSoulBT" role="button" >สอบถามเพิ่มเติม</a>
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

