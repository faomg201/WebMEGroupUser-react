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

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get('http://157.245.203.125:8000/services')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchServices(res.data.data)
      })
    axios.get('http://157.245.203.125:8000/webgoals')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        // var Goalde = res.data.data
        fetchGoals(res.data.data)
      })


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
          <style jsx>{`
                .Cardcontent {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(4, minmax(0px, auto));
                  grid-gap: 30px;
                }
              `}</style>
          <div class="PageFullvh" align="center">
            <div class="row" >
              <div class="col-12" style={{ marginTop: '10%' }}>
                <p class="textHead ">ผลงาน</p><hr class="line Cline"></hr>
              </div>
              <div class="col-12">



                <div class="container ">
                  {Services.map((itemSer, index) => {
                    if (!Services) {
                      return;
                    }
                    var titleN = ""
                    if (itemSer.ctn !== null) titleN = itemSer.service_name
                    else return;
                    return (
                      <div>
                        <p class="textType" align='left'>{titleN}</p>

                        <div class="row Cardcontent">
                          {Goals.map((item, index) => {
                            if (itemSer.service_name !== item.service_name)
                              return;
                            console.log(Goals);
                            const staticpath =
                              "http://157.245.203.125:8000/static/goals/" +
                              item.goal_title +
                              "," +
                              item.goal_img;
                            var titleN = ""
                            if (itemSer.service_name == item.service_name) titleN = itemSer.service_name
                            else titleN = " "
                            return (
                              <div>
                                <FadeIn delay={index * 100}>
                                  <div class="col" style={{ width: '23vw' }}>
                                    <div class="card borderCard cardCardHover">
                                      {!item.goal_img ?
                                        <img src={imgEMT} width="100%" /> :
                                        <img
                                          src={staticpath}
                                          style={{borderRadius: '30px 30px 30px 30px'}}
                                        />
                                      }
                                      <div>
                                          <div class="shadow p-3 CardTitle">
                                            <p class="card-text">{item.goal_title}</p>
                                          </div>
                                      </div>
                                      <div class="sci shadow p-3">
                                        <div className='col-12'>
                                          <p class="card-text">{item.goal_title}</p>
                                          <p align='left' >{item.goal_detail}      Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem
                                            Ipsum has been the industry’s standard
                                            dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and
                                            scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but
                                            also the leap into electronic typesetting,
                                            remaining essentially unchanged.
                                            It was popularised in the 1960s with the
                                            release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus
                                            PageMaker including versions of Lorem Ipsum.</p>
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
                    );
                  })}
                </div>
              </div>


            </div>
          </div>

        </>
      )}
    </div>
  );
}
