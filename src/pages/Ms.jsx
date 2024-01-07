import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

const Ms = () => {

  return (
    <div>
      <div className='sec-1 position-relative'>

        <div class="ratio ratio-16x9">
          <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm" loop controls autoPlay className='w-100 m-0'>
          </video>
        </div>
        <div className="position-absolute v-1">
          <h3 className='text-center'>Model S</h3>
          <p className='text-center f-20'>From $71,090*</p>
          <p className='text-center f-13'>After Est. Gas Savings</p>
        </div>
        <div className="position-absolute sec-1-btn text-white d-flex justify-content-center">
          <div className='m-15'>
            <p className='text-center f-24'>396mi</p>
            <p className='text-center f-12'>Range (EPA est.)</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>1.99s</p>
            <p className='text-center f-12'>0-60 mph*</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>200mph</p>
            <p className='text-center f-12'>Top Speed†</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>1,020hp</p>
            <p className='text-center f-12'>Peak Power</p>
          </div>
          {/* <button className='b2 border border-none m-2 py-2'>Demo Drive</button> */}
          <button className='border border-none m-2 px-5 text-dark align-self-center btn btn-light'>Order Now</button>
        </div>
        <p className='sec1-p text-center position-absolute text-white mediam-text pt-2'>*Price before savings is $74,990, excluding taxes and fees. Subject to change. <br />Learn about est. gas savings. <br />Specs displayed are Model S Plaid values.</p>
      </div>
      <div className='sec2-ms'>
        <p className='f-32 text-center pt-4 text-white'>Interior of the Future</p>
      </div>
      <div className="sec3-ms pt-5 bg-black">
        <div className="container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div class="ratio ratio-16x9">
                <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4" loop controls autoPlay className='w-100 m-0'>
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="ratio ratio-16x9">
                <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-2-Yoke-Desktop.mp4" loop controls autoPlay className='w-100 m-0 '>
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="ratio ratio-16x9">
                <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4" loop controls autoPlay className='w-100 m-0 '>
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="ratio ratio-16x9">
                <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4" loop controls autoPlay className='w-100 m-0 '>
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="ratio ratio-16x9">
                <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-5-Gaming-Mobile.mp4" loop controls autoPlay className='w-100 m-0 '>
                </video>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
      <div className="sec4-ms bg-black  padding">
        <div className="container">
          <div className="d-flex">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-A-Desktop" alt=""  className='w-50'/>
            <div className="sec4-imgtext w-50 d-flex flex-column align-items-center justify-content-center">
              <div>
              <p className='text-white f-20'>Stay Connected</p>
              <p className='text-white fw-semibold pt-3 f-14'>Instantly connect with multi-device Bluetooth, or fast<br /> charge devices with wireless and 36-watt USB-C charging.</p>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="sec4-imgtext w-50 d-flex flex-column  justify-content-center">
              <p className='text-white f-20'>Immersive Sound</p>
              <p className='text-white fw-semibold pt-3 f-14'>A 22-speaker, 960-watt audio system with Active Road <br />Noise Reduction offers immersive listening and studio- <br /> grade sound quality.</p>
            </div>
            <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4" className='w-50'></video>
          </div>
          <div className="d-flex">
            <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop" alt=""  className='w-50'/>
            <div className="sec4-imgtext w-50 d-flex flex-column align-items-center justify-content-center">
              <div>
                <p className='text-white f-20 text-start'>Room for Everything</p>
              <p className='text-white fw-semibold pt-3 f-14'>With front and rear trunks and fold-flat seats you can fit <br /> your bike without taking the wheel off—and your luggage <br /> too. Compare Models</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec5-ms d-flex justify-content-between flex-column'>
        <div className="img-text-2 pb-5">
          <div className="text-white d-flex justify-content-center sec5-text">
          <div className='m-15'>
            <p className='text-center f-24'>396mi</p>
            <p className='text-center f-12'>Range (EPA est.)</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>1.99s</p>
            <p className='text-center f-12'>0-60 mph*</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>200mph</p>
            <p className='text-center f-12'>Top Speed†</p>
          </div>
          <div className='m-15'>
            <p className='text-center f-24'>1,020hp</p>
            <p className='text-center f-12'>Peak Power</p>
          </div>
          {/* <button className='b2 border border-none m-2 py-2'>Demo Drive</button> */}
        </div>
        </div>
      </div>
      <div className="sec6-ms">
       <div className="container">
       <div className="d-flex">
       <div className="ms-p1 w-35">
          <p className='mt-4'>Plaid</p>
          <h3 className='mt-2'>Beyond Ludicrous</h3>
          <div className="d-flex">
          <button className='sb1 me-2 py-2 px-5 mt-4'>Order Now</button>
          <button className='sb2 border border-none px-5 ms-2 py-2 mt-4'>Demo Drive</button>
        </div>
        </div>
        <div className="ms-p1 w-65">
          <p className='sec6-p'>
          Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.
          </p>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Ms