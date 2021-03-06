import React, { useState, useEffect } from 'react'
import { TopbarWork } from "./TopbarWork";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import { useNavigate } from 'react-router';
import imgEMT from '../../src/assets/Img/default-placeholder.png'

export default function Workbyid() {
  const histotyH = useNavigate();
  const isLink = (url) => {
    histotyH(`/${url}`)
  }
  const getpart = window.location.pathname;
  const [GoalID, fetchGoalID] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
    }, 3000);
    getData()
    return () => clearTimeout(timer);

  }, [])
  const getData = () => {
    axios.get(`http://157.245.203.125:8000` + getpart)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchGoalID(res.data.data)
      })
  }
  console.log(GoalID);
  return (
    <>
      <div>
        {status == false || !GoalID ? (
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
            <body className="marB">
              <style jsx>{`
                  #content {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(4, minmax(0px, auto));
                    grid-gap: 30px;
                    max-width: auto;
                    margin: 0 auto;
                  }
                `}</style>
              <TopbarWork />

              <div class="container" >
                <div class="row" >
                  <div className="col-md-12">
                    <p class="textBack ">
                      &#60; <a onClick={() => { isLink('goals') }} class='hoverBack'>Back</a>
                    </p>
                    <FadeIn>

                      <div class="row">
                        <div class="col-md-4" >
                          {!GoalID.goal_img ?
                            <img src={imgEMT} width="100%" /> :
                            <img
                              src={"http://157.245.203.125:8000/static/goals/" + GoalID.goal_title + "," + GoalID.goal_img}
                              class="imgByID d-block"
                              width="440px"
                              height="440px"
                            />
                          }

                        </div>
                        <div class="col-md-8 bg-light ">
                          <div class="marSpTop3">
                            <p class='textTitle'><p>{GoalID.goal_title}</p></p>

                            <p class='textType'>{GoalID.service_name}</p>
                            <div>
                              <hr class="Cline" />
                            </div>


                            <p class='textDetail'><p>{GoalID.goal_detail}</p></p>
                          </div>


                        </div>

                      </div>
                    </FadeIn>
                  </div>

                </div>
              </div>
            </body>
          </div>
        )}
      </div>
    </>
  );
}
