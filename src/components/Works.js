import React, { useState, useEffect } from 'react'
import { TopbarWork } from "./TopbarWork";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import { useNavigate } from 'react-router';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Works() {
  const [show, setShow] = React.useState(false);
  const histotyH = useNavigate();
  const isLink = (url) => {
    histotyH(`/${url}`)
  }
  const [Goals, fetchGoals] = useState([])
  const [Services, fetchServices] = useState([])
  const [status, setStatus] = useState(false);

  const APIURL = process.env.REACT_APP_APIURL;

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get(APIURL + `/services`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchServices(res.data.data)
      })
    axios.get(APIURL + `/webgoals`)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        // var Goalde = res.data.data
        fetchGoals(res.data.data)
      })


  }

  const workID = (index) => {
    return 'works-' + index
  }

  const PopUp = (index) => {
    const tagID = document.getElementById(`works-${index}`)
    if (tagID.className === 'popUpCard show-detail') {
      tagID.classList.remove("popUpCard")
      tagID.classList.remove("show-detail")
    } else {
      tagID.classList.add("popUpCard")
      tagID.classList.add("show-detail")
    }
  }


  return (
    <div>
      {status == false || !Goals || !Services ? (
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
          <div class="PageFullvh" align="center">
            <div class="row" >
              <div class="col-12">
                <div class="container marginWork" >
                  <div className='col-12 marginscroll'  align="left">
                    <p className='ourWorksHeader'>our works
                      <span className='dotOrang'>.</span></p>
                    <p class="ourWorksHeader2">ผลงานของเรา</p>
                  </div>
                  {Services.map((itemSer, index) => {
                    if (!Services) {
                      return;
                    }
                    var titleN = ""
                    if (itemSer.ctn !== null) titleN = itemSer.service_name
                    else return;
                    return (
                      <div>
                        <p class="textType ResMarginWork" align='left'>{titleN}</p>
                        
                        <div class="sliderWorkRes">
                          <div>
                            <div class="row Cardcontent">
                              {Goals.map((item, index) => {
                                if (itemSer.service_name !== item.service_name)
                                  return;
                                const staticpath =
                                  APIURL + `/static/goals/` +
                                  item.goal_img;
                                var titleN = ""
                                if (itemSer.service_name == item.service_name) titleN = itemSer.service_name
                                else titleN = " "
                                return (
                                  <div className='margiLeftWorkcard'>
                                    <FadeIn delay={index * 100}>
                                      <div class="col widthCardWork">
                                        <div class="card borderCard cardCardHover">
                                          {!item.goal_img ?
                                            <img src={imgEMT} width="100%" /> :
                                            <img
                                              src={staticpath}
                                              className='ImgcardWork'
                                            />
                                          }
                                          <div className="" onClick={() => PopUp(index)} id={workID(index)} style={{
                                            position: 'absolute', bottom: '0px', left: 0, right: 0, transition: '0.5s ease',
                                            height: '55px'
                                          }}>
                                            <div class='shadow p-3 popUpDetail' style={{
                                              borderRadius: '30px',
                                              backgroundColor: 'white'
                                            }}>
                                              <p class="card-text workTitle">{item.goal_title}</p>
                                              <p class="description workDetail" align='left' >{item.goal_detail} </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </FadeIn>
                                  </div>
                                );
                              })}

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>


            </div>
          </div>

        </>
      )
      }
    </div >
  );
}