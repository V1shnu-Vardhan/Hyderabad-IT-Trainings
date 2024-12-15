import React from 'react'
import banner1 from "./assets/banner1.jpg"
import banner2 from "./assets/banner2.jpg"
import banner3 from "./assets/banner3.jpg"



const Home = () => {
  return (
    <div classNameName=' container-fluid'>
        <div id="mainslide" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#mainslide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#mainslide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Home