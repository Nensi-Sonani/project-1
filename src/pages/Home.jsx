import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  return (
    <div className='home'>

      <div className='sec-1'>
        <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4" loop controls autoPlay className='w-100 m-0'>
        </video>
      </div>
      <div className='sec-2 d-flex justify-content-between flex-column'>
        <div className='img-text-1 pt-5'>
          <h1 className='text-center text-white'>
            Model 3
          </h1>
          <p className='text-center text-white h4'>Lease starting at $329/mo*</p>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Demo Drive</button>
          </div>
          <p className='text-center text-white mediam-text'>*Excludes taxes and fees with price subject to change. Available in select states. See Details</p>
        </div>
      </div>
      <div className='sec-3 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Model X
          </h1>
          <p className='text-center h4'>From $68,590*</p>
          <p className='small-text text-center'>After Federal Tax Credit & Est. Gas Savings</p>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Demo Drive</button>
          </div>
          <p className='text-center text-white mediam-text'>Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.<br/>
Learn about est. gas savings.</p>
        </div>
      </div>
      <div className='sec-4 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Model S
          </h1>
          <p className='text-center h4'>From $71,090*</p>
          <p className='small-text text-center'>After Federal Tax Credit & Est. Gas Savings</p>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Demo Drive</button>
          </div>
          <p className='text-center mediam-text'>*Price before savings is $74,990, excluding taxes and fees. Subject to change.<br/>
Learn about est. gas savings.</p>
        </div>
      </div>
      <div className='sec-5'>
        <video src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4" controls autoPlay loop className='w-100'>
        </video>
      </div>
      <div className='sec-6 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Solar Panels
          </h1>
          <p className='text-center'><u>Schedule a Virtual Consultation</u></p>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='sec-7 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Solar Roof
          </h1>
          <p className='text-center'>Produce Clean Energy From Your Roof</p>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='sec-8 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Powerwall
          </h1>
        </div>
        <div className="img-text-2 pb-5">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Order Now</button>
          <button className='m-2'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='sec-9 d-flex justify-content-between flex-column'>
      <div className='img-text-1 pt-5'>
          <h1 className='text-center'>
          Accessories
          </h1>
        </div>
        <div className="img-text-2 pb-2">
          <div className="btn d-flex justify-content-center">
          <button className='m-2 py-2'>Shop Now</button>
          </div>
          <p className='text-center f-color pt-4'><pre>Tesla © 2023  Privacy & Legal  Vehicle Recalls  Contact  News  Get Updates  Locations</pre></p>
        </div>
      </div>
    </div>
  )
}

export default Home