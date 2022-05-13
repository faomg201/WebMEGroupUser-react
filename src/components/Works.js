import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";
import axios from 'axios';


export default function Works() {
  const [Goals, fetchGoals] = useState([])
  const [Services, fetchServices] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    axios.get('http://localhost:8000/goals')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchGoals(res.data.data)
      })
    axios.get('http://localhost:8000/services')
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchServices(res.data.data)
      })
  }

  return (
    <div>
      {status == false || !Goals|| !Services ? (
        <div>loading</div>
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
            <TopbarB />

            <div class="container ">
              {Services.map((itemSer) => {
                return (
                  <div>
                    <p class="text5">&lt;{itemSer.service_name}&gt;</p>
                    <div class="row" id="content">
                      {Goals.map((item) => {
                        if (item.service_name !== itemSer.service_name) {
                          return;
                        }
                        const staticpath =
                          "http://localhost:8000/static/goals/" +
                          item.goal_title +
                          "," +
                          item.goal_img;
                        const workPath = "/goals/" + item.goal_id;
                        console.log(staticpath);
                        return (
                          <div class="col">
                            <div class="card">
                              <a href={workPath}>
                                <img
                                  src={staticpath}
                                  width="280px"
                                  height="280px"
                                />
                              </a>
                              <div class="card-body">
                                <p class="card-text">{item.goal_detail}.</p>
                                <p class="card-text">{item.service_name}.</p>
                              </div>
                            </div>
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
