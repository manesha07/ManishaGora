import React from 'react';
import Products from "./Products";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.js';
import Slider from 'infinite-react-carousel';
import "./Home1.css";
import { useDispatch, useSelector } from "react-redux";

const Home1 = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        duration: 300,
        shift: 10,
        slidesPerRow: 3
    };
    // const products = useSelector((store) => store.products.list);

    return (
            <div className='main-body'>
                <Carousel className='main-slide container clearfix' autoPlay='true' infiniteLoop='true'>
                    <img src="/assets/rew.jpg" alt="..." />
                    <div>
                        <img src="/assets/rew2.jpg" alt="First slide" />
                    </div>
                    <div>
                        <img src="/assets/rew3.jpg" alt="First slide" />
                    </div>
                    <div>
                        <img src="/assets/rew2.jpg" alt="First slide" />
                    </div>
                </Carousel>
                {/* <div className='main-slide2'>
                    <h1 className='heading slide-head clearfix'>Our Products</h1>
                    <hr />
                    <Slider {...settings} className='container custom-slide'>
                    {/* {products.map((item) => {
                        return (
                        <div>
                            <img className='custom-slide-img' src={item.images} alt="First slide" />
                        </div>)
                    })} */}
                    {/* </Slider>
                </div> */}
                {console.log("hiiii")}
                <Products className='container' />
                {console.log("hiiii333")}
            </div>
    );
}
export default Home1;