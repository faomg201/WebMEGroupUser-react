import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import { useNavigate } from 'react-router';

export default function Works() {
  const histotyH = useNavigate();
	const isLink = (url)=>{
		histotyH(`/${url}`)
	}
  const [Goals, fetchGoals] = useState([])
  const [Services, fetchServices] = useState([])
  const [status, setStatus] = useState(false);

  const [animals, fetchAnimals] = useState([])

  console.log(animals);
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
        fetchAnimals(res.data.data)
      })
    axios.get('http://157.245.203.125:8000/webgoals')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        // var Goalde = res.data.data
        fetchAnimals(res.data.data)
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
        <div>

          <body className="marB">
            <style jsx>{`
                #content {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(4, minmax(0px, auto));
                  grid-gap: 30px;
                }
              `}</style>
            <TopbarB />

            <div class="container ">
              <p className="textHeadWotk"> ผลงาน</p>
              <hr class="line Cline"></hr>
              <br></br>
              {Services.map((itemSer, index) => {
                console.log(Services);
                // console.log(Services.goal_id);
                if (!Services) {
                  return;
                }
                var titleN = ""
                if (itemSer.ctn !== null) titleN = itemSer.service_name
                else titleN = " "
                return (
                  <div>
                    <p class="text5">{titleN}</p>
                    <div class="row" id="content">
                      {Goals.map((item, index) => {
                        if (itemSer.service_name !== item.service_name)
                          return;
                        // console.log(Goals);
                        console.log(index);
                        const staticpath =
                          "http://157.245.203.125:8000/static/goals/" +
                          item.goal_title +
                          "," +
                          item.goal_img;
                        const workPath = "goals/" + item.goal_id;
                        // console.log(staticpath);
                        var titleN = ""
                        if (itemSer.service_name == item.service_name) titleN = itemSer.service_name
                        else titleN = " "
                        return (
                          <div>
                            {/* <p class="text5">{titleN}</p> */}
                            { }
                            <FadeIn delay={index * 100}>
                              <div class="col">
                                <div class="card borderCard">
                                  <a onClick={() => {isLink(workPath)}}>
                                    <img
                                      src={staticpath}
                                      width="285px"
                                      height="285px"
                                    />
                                  </a>
                                  <div class="card-body" align="center">
                                    <p class="card-text">{item.goal_title}</p>
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
          </body>
        </div>
      )}
    </div>
  );
}
