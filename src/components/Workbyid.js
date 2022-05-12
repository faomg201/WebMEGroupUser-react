import React from "react";
import { TopbarB } from "./TopbarB";
import { Component } from "react";
import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

class Workbyid extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    loading: true,
    idParam: useLocation,
  };

  async componentDidMount() {
    const getpart = window.location.pathname;
    const apiUrl = `http://localhost:8000` + getpart;
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ goals: data.data, loading: false });
    console.log(data.data);
    console.log(window.location);
    console.log(this.state.goals.goal_title);
    console.log(this.state.goals.service_detail);
    
  }

  render() {
    const { location } = this.props;
    // const staticpath ="http://localhost:8000/static/goals/" +this.state.goals.goal_title +"," +this.state.goals.goal_img;

    return (
      <>
        <div>
          {this.state.loading || !this.state.goals ? (
            <div>loading</div>
          ) : (
            <div>
              {/* {this.state.map((item) =>{
              console.log(item);
            })         
        } */}
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
                <div>{location}</div>

                <div class="container">
                  {/* {this.state.goals.map((item) => {
                  return (
                    <div class="carousel-item ">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-5">
          
                          </div>
                          <div class="col-md-7 bg-light ">
                            <h5 className="marSpTop3">{item.goals_title}</h5>
                            <hr class="line Cline"></hr>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                  <div class="row">
                    <div className="col-md-12">
                      <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <p class="text6w marSpRight">
                              {this.state.goals.goal_title}
                            </p>
                            <div class="container">
                              <div class="row">
                                <div class="col-md-6">
                                  {/* {this.state.goals((item) => {
                                    const staticpath ="http://localhost:8000/static/goals/" +item.goal_title +"," +item.goal_img;
                                  console.log(staticpath);
                                    return (
                                      <div>
                                        ddd
                                      </div>
                                    );
                                  })} */}
                                  {/* { staticpath } */}
                                  <img
                                    src={"http://localhost:8000/static/goals/" +this.state.goals.goal_title +"," +this.state.goals.goal_img}
                                    class="d-block w-100"
                                    alt="..."
                                  />
                                </div>
                                <div class="col-md-6 bg-light ">
                                  <h5 className="marSpTop3">
                                    {this.state.goals.service_detail}
                                  </h5>
                                  <hr class="line Cline"></hr>
                                  <p>{this.state.goals.goal_detail}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
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
}

export default Workbyid;

// export const Workbyid = () => {
//   return (
//     <body className="marB">
//       <style jsx>{`
//         #content {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-template-rows: repeat(4, minmax(0px, auto));
//           grid-gap: 30px;
//           max-width: auto;
//           margin: 0 auto;
//         }
//       `}</style>
//       <TopbarB />
//       <div class="container">
//         <div class="row">
//           <div className="col-md-12">
//             <div
//               id="carouselExampleIndicators"
//               class="carousel slide"
//               data-bs-ride="carousel"
//             >
//               <div class="carousel-inner">
//                 <div class="carousel-item active">
//                   <p class="text6w marSpRight">&lt;Title&gt;</p>
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-md-6">
//                         <img
//                           src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blogfiles/ti2019mbas_compendium_blog_spl.png"
//                           class="d-block w-100"
//                           alt="..."
//                         />
//                       </div>
//                       <div class="col-md-6 bg-light ">
//                         <h5 className="marSpTop3">&lt;type&gt;</h5>
//                         <hr class="line Cline"></hr>
//                         <p>&lt;detail&gt;</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="carousel-item">
//                   <p class="text6w marSpRight">&lt;Title&gt;</p>
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-md-6">
//                         <img
//                           src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blogfiles/ti2019mbas_compendium_blog_spl.png"
//                           class="d-block w-100"
//                           alt="..."
//                         />
//                       </div>
//                       <div class="col-md-6 bg-light ">
//                         <h5 className="marSpTop3">&lt;type&gt;</h5>
//                         <hr class="line Cline"></hr>
//                         <p>&lt;detail&gt;</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="carousel-item">
//                   <p class="text6w marSpRight">&lt;Title&gt;</p>
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-md-6">
//                         <img
//                           src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blogfiles/ti2019mbas_compendium_blog_spl.png"
//                           class="d-block w-100"
//                           alt="..."
//                         />
//                       </div>
//                       <div class="col-md-6 bg-light ">
//                         <h5 className="marSpTop3">&lt;type&gt;</h5>
//                         <hr class="line Cline"></hr>
//                         <p>&lt;detail&gt;</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 class="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   class="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span class="visually-hidden">Previous</span>
//               </button>
//               <button
//                 class="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide="next"
//               >
//                 <span
//                   class="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span class="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// };
