import React, { useState, useEffect } from 'react'
import Topbar from "./Topbar";
import axios from 'axios';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

export default function Contact () {
  const [Location, fetchLocation] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getData()
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
          <div>loading</div>
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
                          <div class="row justify-content-md-center">
                            <div class="col-sm-5 ">
                              <div style={{ width: "50vm", height: "50vh" }}>
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
                              <p className="marSpTop3">
                                <b>ชื่อนิติบุคคลผู้เสียภาษี</b>{" "}
                                {item.enterprise_facebook}
                              </p>

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


