import React from "react";
import { LangsGraph, WatchersLangsGraph } from "../components/";

function Home() {
  return (
    <div>
      <div className="container-fluid px-2 px-md-4">
        <div className="bg-white py-4 px-3 px-md-5 rounded-3">
          <div className="d-flex">
            <h2 className="me-2">Сообщество:</h2>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NodeJs
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item">Apache Spark</a>
                </li>
                <li>
                  <a className="dropdown-item">Rust</a>
                </li>
                <li>
                  <a className="dropdown-item">Red Hat OpenShift</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row gy-2">
            <div className="col-lg-3 col-md-6 text-white ">
              <div className="card bg-blue border-0 rounded-4 text-white">
                <div className="card-body">
                  <div className="stat-widget-five d-flex justify-content-between h-100 align-items-center">
                    <div className="stat-icon dib flat-color-1 ps-4">
                      <i
                        className="fa-regular fa-user"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <div className="stat-content fs-5 pe-4">
                      <div className="text-left dib">
                        <div className="stat-text text-center">
                          <span className="count">users</span>
                        </div>
                        <div className="stat-heading text-center">2904</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-light-blue border-0 rounded-4 text-white">
                <div className="card-body">
                  <div className="stat-widget-five d-flex justify-content-between h-100 align-items-center">
                    <div className="stat-icon dib flat-color-1 ps-4">
                      <i
                        className="fa-solid fa-code-fork"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <div className="stat-content fs-5 pe-4">
                      <div className="text-left dib">
                        <div className="stat-text">
                          <span className="count text-center">forks</span>
                        </div>
                        <div className="stat-heading text-center">24.9k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-violet border-0 rounded-4 text-white">
                <div className="card-body">
                  <div className="stat-widget-five d-flex justify-content-between h-100 align-items-center">
                    <div className="stat-icon dib flat-color-1 ps-4">
                      <i
                        className="fa-regular fa-star "
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <div className="stat-content fs-5 pe-4">
                      <div className="text-left dib">
                        <div className="stat-text">
                          <span className="count">stars</span>
                        </div>
                        <div className="stat-heading">92k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card bg-green border-0 rounded-4 text-white">
                <div className="card-body">
                  <div className="stat-widget-five d-flex justify-content-between h-100 align-items-center">
                    <div className="stat-icon dib flat-color-1 ps-4">
                      <i
                        className="fa-regular fa-eye"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <div className="stat-content fs-5 pe-4 fs-5">
                      <div className="text-left dib">
                        <div className="stat-text">
                          <span className="count">wathes</span>
                        </div>
                        <div className="stat-heading">2.9k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 gy-3">
            <div className="col-12 col-md-6 ">
              <div className="p-4 body-bg rounded-3">
                <p className="fw-bold text-center fs-4">
                  Языки программирования, используемые участниками сообщества
                </p>
                <WatchersLangsGraph />
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="p-4 body-bg rounded-3">
                <p className="fw-bold text-center fs-4">
                  Соотношение языков программирования в сообществе
                </p>
                <LangsGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
