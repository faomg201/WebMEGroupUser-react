import React, { useState, useEffect } from 'react'
import { TopbarB } from "./TopbarB";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                    <p class="textBack ">
                      <a href='/goals'>&#60; Back</a>

                    </p>                    
                    <div class="row">
                      <div class="col-md-4" >
                        <img
                          src={"http://localhost:8000/static/goals/" + GoalID.goal_title + "," + GoalID.goal_img}
                          class="imgByID d-block"
                          width="440px"
                          height="440px"                          
                        />
                      </div>
                      <div class="col-md-8 bg-light ">
                        <div class="marSpTop3">
                          <p class='textTitle'><p>{GoalID.goal_title}</p></p>
                          
                          <p class='textType'>{GoalID.service_name}</p>
                          <div>
                             <hr class="Cline"/>
                          </div>
                         
                          
                          <p class='textDetail'><p>{GoalID.goal_detail}</p></p>
                        </div>
                        
                        
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
