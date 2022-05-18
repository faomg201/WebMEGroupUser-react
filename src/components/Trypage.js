import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";

export default function Trypage() {

  const [Goals, fetchGoals] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch('http://157.245.203.125:8000/goals')
      .then((res) => res.json())
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchGoals(res.data)
      })
  }
  // console.log(Goals);

  return (
    <div>
      {status == false || !Goals ? (
        <div className="marL">
          <div>loading
          </div>
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
            <TopbarB />

            <div class="container ">
              {Goals.map((item) => {
                const staticpath =
                  "http://157.245.203.125:8000/static/goals/" +
                  item.goal_title +
                  "," +
                  item.goal_img;
                return (
                  <div class="col">
                    <div class="card">
                      <img
                        src={staticpath}
                        width="280px"
                        height="280px"
                      />
                      <div class="card-body">
                        <p class="card-text">{item.goal_detail}.</p>
                        <p class="card-text">{item.service_name}.</p>
                      </div>
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


};
