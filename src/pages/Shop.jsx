import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Product from './Product';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
      <div className='shop-page'>
        <div className='shop-banner-image d-flex justify-content-center align-items-center'>
          <div className="shop-banner-contain text-white text-center">
            <h2 className='shop-banner-text-1'>CyberBeer + CyberStein Limited Edition Set</h2>
            <p className='shop-banner-text-2'>Cheers, sip, repeat</p>
            <button className='m-2 py-2 btn1'>Shop Now</button>
          </div>
        </div>
        <div className="shop-slider">
          <h2 className='shop-slider-text m-3'>Best Sellers</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-1">
                <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/2012814-00-A_3_2000.jpg" alt="" />
                <div className="slider-img"></div>
                <h5 className='my-3 mb-3'>CyberBeer + CyberStein Limited Edition Set</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_0.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Men's Raven Lightweight Bomber Jacket</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla_mobile.png" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Tesla Shop Gift Card</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_0.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Men's Chill Crew Neck Sweatshirt</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Model Y All-Weather Interior Liners</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_1.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Model S Roof Rack - Glass Roof</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-00-A_2.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Model 3 Illuminated Door Sills</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="slider-1">
              <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0.jpg" alt="" />
              <div className="slider-img"></div>
              <h5 className='my-3 mb-3'>Wall Connector</h5>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="shop-sec-3">
          <div className="shop-sec-3-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-3-contain text-center">
              <h2>Model S Accessories</h2>
              <button className='m-2 py-2 btn2'><Link to={'/product'} className='text-decoration-none'>Shop Now</Link></button>
            </div>
          </div>
        </div>
        <div className="shop-sec-4">
          <div className="shop-sec-4-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-4-contain text-center">
              <h2>Model S Accessories</h2>
              <button className='m-2 py-2 btn2'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="shop-sec-5">
          <div className="shop-sec-5-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-5-contain text-center">
              <h2>Model S Accessories</h2>
              <button className='m-2 py-2 btn2'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="shop-sec-6">
          <div className="shop-sec-6-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-6-contain text-center">
              <h2>Model S Accessories</h2>
              <button className='m-2 py-2 btn2'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="shop-sec-7">
          <div className="shop-sec-7-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-7-contain text-center">
              <h2>Model S Accessories</h2>
              <button className='m-2 py-2 btn2'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className="shop-sec-8">
          <div class="d-flex w-100">
            <div class="shop-sec-8-img1 d-flex justify-content-center">
              <div className="shop-sec-8-contain text-center">
                <h3>Men's Apparel</h3>
                <button className='rounded m-2 py-1'>Shop Now</button>
              </div>
            </div>
            <div class="shop-sec-8-img2 d-flex justify-content-center">
              <div className="shop-sec-8-contain text-center">
                <h3>Women's Apparel</h3>
                <button className='rounded m-2 py-1'>Shop Now</button>
              </div>
            </div>
            <div class="shop-sec-8-img3 d-flex justify-content-center">
              <div className="shop-sec-8-contain text-center">
                <h3>Kids’ Apparel</h3>
                <button className='rounded m-2 py-1'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-sec-9">
          <div className="shop-sec-9-img d-flex justify-content-center align-items-center">
            <div className="shop-sec-9-contain text-center">
              <h2>Lifestyle</h2>
              <button className='rounded m-2 py-1'>Shop Now</button>
            </div>
          </div>
        </div>
        <footer>
          <div className="d-flex justify-content-center pt-5">
            <p><pre>Tesla © 2023  Privacy & Legal  Locations  Recalls</pre></p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Shop