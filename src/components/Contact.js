import React, { useState, useEffect } from 'react'
import Topbar from "./Topbar";
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
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 3000);
    getData()
    return () => clearTimeout(timer);
    
  }, [])
  const getData = () => {
    axios.get('http://localhost:8000/contractus')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchLocation(res.data.data)
      })
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
        <div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-11">
                <div class="row">
                  <div class="col-12 col-sm-12">
                    <Topbar />
                  </div>
                </div>
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
                        <div className="row marSpRight4">
                          <h3>ติดต่อเรา</h3>
                          <p>โทร {item.enterprise_phone}</p>
                          <p>
                            สามารถติดต่อเราได้ {" "}
                            {item.enterprise_servicetime}
                          </p>
                        </div>
                        <FadeIn>
                        <div class="row justify-content-md-center">
                          <div class="col-sm-5">
                            <div style={{ width: "50vm", height: "50vh" }} >
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
                          <div class="col-sm-5 bg-light">
                            <div className="marSpTop3">
                              <p><b>ชื่อนิติบุคคลผู้เสียภาษี</b>{" "}
                                {item.enterprise_facebook}</p>
                              <hr class="line Cline"></hr>
                              <p>
                                <b>ที่อยู่</b> {item.enterprise_address}
                              </p>
                              <p>
                                <b>เวลาทำการ</b> {" "}
                                {item.enterprise_servicetime}
                              </p>
                            </div>


                          </div>
                        </div>
                        </FadeIn>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="col-sm-1 marO"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


