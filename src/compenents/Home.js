import React from 'react'
import './style.css';

function Home() {
  return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src={require("./images/weather.jpg")} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={require("./images/weather1.jpg")} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={require("./images/weather2.jpg")} className="d-block w-100" alt="..."/>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  )
}

export default Home