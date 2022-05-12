import React from "react";
import { TopbarB } from "./TopbarB";
import { Component } from "react";

class Works extends Component {
  state = {
    loading: true,
  };
  async componentDidMount() {
    const apiUrl = `http://localhost:8000/goals`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ goals: data.data, loading: false });
    console.log(data.data);

    const apiUrl2 = `http://localhost:8000/services`;
    const response2 = await fetch(apiUrl2);
    const data2 = await response2.json();
    this.setState({ services: data2.data, loading: false });
    console.log(data2.data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.goals || !this.state.services ? (
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
                {this.state.services.map((itemSer) => {
                  return (
                    <div>
                      <p class="text5">&lt;{itemSer.service_name}&gt;</p>
                      <div class="row" id="content">
                        {this.state.goals.map((item) => {
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
}

export default Works;
