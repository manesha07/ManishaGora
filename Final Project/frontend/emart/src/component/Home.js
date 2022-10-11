import React from 'react';
import Products from "./Products";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.js';
import Slider from 'infinite-react-carousel';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    duration: 300,
    shift: 10,
    slidesPerRow: 3
  };

  return (
    <div className="hero">
      <Carousel className='main-slide' autoPlay='true' infiniteLoop='true'>
        <div className="card bg-dark text-white border-0" >
          <img src="/assets/rew.jpg" alt="..." style={{ height: '630px' }} />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder">Latest Arrivals</h5>
              <p className="card-text lead fs-2">Check out all TRENDS.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/rew2.jpg" alt="First slide" style={{ height: '630px' }} />
        </div>
        <div>
          <img src="/assets/rew3.jpg" alt="First slide" style={{ height: '630px' }} />
        </div>
        <div>
          <img src="/assets/rew2.jpg" alt="First slide" style={{ height: '630px' }} />
        </div>
      </Carousel>
      <div>
        <span>CustomSlider</span>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </Slider>
      </div>
      <Products />
    </div>
  );
}
export default Home;