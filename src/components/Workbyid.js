import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function Workbyid() {
  const getpart = window.location.pathname;
  const [GoalID, fetchGoalID] = useState([])
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    axios.get(`http://localhost:8000` + getpart)
      .then((res) => {
        setStatus(true);
        // console.log(res)
        fetchGoalID(res.data.data)
      })
  }
  // async componentDidMount() {
  //   const getpart = window.location.pathname;
  //   const apiUrl = `http://localhost:8000` + getpart;
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   this.setState({ goals: data.data, loading: false });
  //   console.log(data.data);
  //   console.log(window.location);
  //   console.log(GoalID.goal_title);
  //   console.log(GoalID.service_detail);

  // }


  return (
    <>
      <div>
        {status == false || !GoalID ? (
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

              <div class="container" >
                <div class="row" >
                  <div className="col-md-12">
                    <p class="text6w marSpRight">
                      {GoalID.goal_title}
                    </p>
                    <div class="row">
                      <div class="col-md-4 " >
                        <img
                          src={"http://localhost:8000/static/goals/" + GoalID.goal_title + "," + GoalID.goal_img}
                          class="imgByID"
                        />
                      </div>
                      <div class="col-md-8 bg-light ">
                        <h5 className="marSpTop3">
                          {GoalID.service_detail}
                        </h5>
                        <hr class="line Cline"></hr>
                        <p>{GoalID.goal_detail}</p>
                      </div>

                    </div>
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
