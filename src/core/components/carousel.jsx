import React from 'react';
import classes from './carousel.module.css';

export default function Carousel() {
  return (
    <div style={{width:"100%"}} id="carouselExampleCaptions" className="carousel carousel-dark slide">
      <div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/slider1.jpg" className="d-block w-100" style={{ height: '65%' }} alt="..." />
            <div className={`carousel-caption d-none d-md-block ${classes.textposition}`}>
              <h5 className="fs-6">SPRING/SUMMER COLLECTION 2017</h5>
              <p className="fs-2">Get Upto 30% Off New Arrivals</p>
              <button className="btn btn-danger">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/slider2.jpg" className="d-block w-100" style={{  height: '65%' }} alt="..." />
            <div className={`carousel-caption d-none d-md-block ${classes.textposition}`}>
              <h5 className="fs-6">SPRING/SUMMER COLLECTION 2017</h5>
              <p className="fs-2">Get Upto 30% Off New Arrivals</p>
              <button className="btn btn-danger">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/slider3.jpg" className="d-block w-100" style={{  height: '65%' }} alt="..." />
            <div className={`carousel-caption d-none d-md-block ${classes.textposition}`}>
              <h5 className="fs-6">SPRING/SUMMER COLLECTION 2017</h5>
              <p className="fs-2">Get Upto 30% Off New Arrivals</p>
              <button className="btn btn-danger">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

