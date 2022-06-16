import React, { useState, useEffect } from 'react'
import { TopbarContact } from "./TopbarContact";
import imgEMT from '../../src/assets/Img/default-placeholder.png'

import axios from 'axios';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import FadeIn from 'react-fade-in';

export default function Contact() {
  const [Location, fetchLocation] = useState([])
  const [LinkBlog, fetchLinkBlog] = useState([])
  // const [mediumData, setMediumData] = useState(null);
  const [status, setStatus] = useState(false);
  // console.log(mediumData?.feed.image);
  // console.log(mediumData?.items[0].author);
  // console.log(mediumData.data.feed.image);
  // console.log(LinkBlog);
  const APIURL = process.env.REACT_APP_APIURL;

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get(APIURL + `/contractus`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchLocation(res.data.data)
      })
    // axios.get(APIURL+`/MyBlog`)
    //   .then((res) => {
    //     setStatus(true);
    //     fetchLinkBlog(res.data.data)
    //   })
    // axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tanapon395')
    //   .then((res) => {
    //     setStatus(true);
    //     setMediumData(res.data)
    //   })
  }

  return (
    <div>
      {status == false || !Location ? (
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
          <div className='Page100Vh'>
            {/* <div class="row" >
              <div class="col-12" style={{ marginTop: '10%' }}>
                <h class="textHead">บล็อกของเรา</h><hr class="line Cline"></hr>
                <p class="textInfo">รู้จักเราให้มากขึ้นผ่านประสบการณ์ของเรา</p>
              </div>
              <div class="col-12">
                <div class="sliderMedium">
                  <div>Slide #1</div>
                  <div>Slide #2</div>
                  <div>Slide #3</div>
                  <div>Slide #4</div>
                  <div>Slide #5</div>
                </div>
                <div className='row justify-content-md-center '>

                  <div class="card" style={{ width: '18rem' }}>
                    <a href={mediumData?.items[0].link} >
                      <img src={mediumData?.items[0].thumbnail} style={{ width: '18rem' }} />
                      <div class="card-body">
                        <p class="card-text"><img style={{ borderRadius: '100%', width: '5vw' }} src={mediumData?.feed.image} />{mediumData?.items[0].author}</p>
                      </div>
                    </a>
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
            </div> */}
            <div class="row marginscroll" >
              <p className='OuConHeader'>contact us
                <span className='dotOrang'>.</span></p>
              <p class="OutTechnologyHeader2">ติดต่อเรา</p>

              <div class="col-12">
                {Location.map((item) => {
                  function Map() {
                    let stringLat = item.enterprise_latitude;
                    let latitude = parseFloat(stringLat);
                    let stringLon = item.enterprise_longtitude;
                    let longtitude = parseFloat(stringLon);
                    return (
                      <GoogleMap
                        defaultZoom={10}
                        defaultCenter={{ lat: latitude, lng: longtitude }}
                      >
                        <Marker
                          position={{ lat: latitude, lng: longtitude }}
                        />
                      </GoogleMap>
                    );
                  }
                  const WrappendMap = withScriptjs(withGoogleMap(Map));
                  return (
                    <div class="row">
                      <div class="container">
                        <div className="row marSpRight4" align='left'>
                          <div class="col-12 marginDisTopcon1 marginLeftConTitle" >
                            <p><span className='TextContactHsub'>โทร {item.enterprise_phone} (จู)</span></p>
                            <p className='phone2'><span className='TextContactHsub' > {item.enterprise_phone} (กล้า)</span></p>
                            <p><span className='TextContactHsub'>สามารถติดต่อเราได้ {item.enterprise_servicetime}</span></p>
                          </div>
                        </div>
                        <FadeIn>
                          <div class="row justify-content-md-center ResDisplayNone">
                            <div class="col-1"></div>
                            <div class="col-4" style={{display: 'grid',justifyItems: 'center'}}>
                              <div className='SizeMap' >
                                <WrappendMap
                                  googleMapURL={
                                    `https:maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` +
                                    item.enterprise_GG_key_api
                                  }
                                  loadingElement={
                                    <div style={{ height: "100%" }} />
                                  }
                                  containerElement={
                                    <div style={{ height: "100%" }} />
                                  }
                                  mapElement={
                                    <div style={{ height: "100%", borderRadius: '50px' }} className='shadowBox' />
                                  }
                                />
                              </div>
                            </div>

                            <div class="col-6 shadowBox bg-none" style={{ borderRadius: '50px' }} align='left' >
                              <div className="marSpTop3">
                                <p className='messenMargin'><span className='TextContactHsub'>ชื่อนิติบุคคลผู้เสียภาษี</span></p><hr align='center' className="line ClineMessen"></hr>
                                <p className='messenMargin'>
                                  <span className='TextContactHsub'>ที่อยู่</span> &nbsp; <span className='textInfo'>{item.enterprise_address}</span>
                                </p>
                                <p className='messenMargin'>
                                  <span className='TextContactHsub'>เวลาทำการ</span><br />
                                  <span className='tab'></span><span className='textInfo'>{item.enterprise_servicetime}</span>
                                </p>
                                <div align='center' className='marginTopCon'><a class="buttonSend" role="button" href="https://www.facebook.com/megroupenterprise" target="_blank">ส่งข้อความ</a></div>
                              </div>
                            </div>
                            <div class="col-1 "></div>
                          </div>
                          <div class="row justify-content-md-center   HiddenOBJ">
                            <div class="col-12">
                              <div style={{ width: "100vw", height: "45vh" }} >
                                <WrappendMap
                                  googleMapURL={
                                    `https:maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` +
                                    item.enterprise_GG_key_api
                                  }
                                  loadingElement={
                                    <div style={{ height: "100%" }} />
                                  }
                                  containerElement={
                                    <div style={{ height: "100%" }} />
                                  }
                                  mapElement={
                                    <div style={{ height: "100%" }} />
                                  }
                                />
                              </div>
                            </div>   
                            <div class="col-12" align='left' style={{ height: "30vh" }}>
                              <div className="marSpTop3">
                                <p><span className='TextContactHsub'><b>ชื่อนิติบุคคลผู้เสียภาษี</b></span>
                                  <span className='tab textInfo'>{item.enterprise_facebook}</span></p>
                                <p>
                                  <span className='TextContactHsub'><b>ที่อยู่</b></span> &nbsp; <span className='textInfo'>{item.enterprise_address}</span>
                                </p>
                                <p>
                                  <span className='TextContactHsub'><b>เวลาทำการ</b></span>
                                  <span className='tab'></span> &nbsp;<span className='textInfo'>{item.enterprise_servicetime}</span>
                                </p>
                                <div align='center' className='marginTopCon'><a class="buttonSend" role="button" href="https://www.facebook.com/megroupenterprise" target="_blank">ส่งข้อความ</a></div>
                              </div>
                            </div>
                          </div>
                        </FadeIn>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='ResDisplayNone' style={{ marginTop: '5%' }}></div>
            </div>
          </div>
        </>
      )
      }
    </div >
  );
}


