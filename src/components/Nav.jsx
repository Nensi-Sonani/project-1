import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <div className='main-nav'>
      <nav className='d-flex justify-content-between  align-items-center ms-4 me-4'>
        <div className='nav-div-1'>
          <Link to="/" className='logo'>
            <img src="https://freepngdesign.com/content/uploads/images/tesla-metallic-logo-1660.png" alt="tesla logo" className='' />
          </Link>
        </div>
        <div className='nav-div-2 d-flex'>

          <div className='dropdown' onClick={e => setisActive(!isActive)}>
            <div className='nav-text text-center text-white text-decoration-none me-5'>Vehicles </div>
            <div className="dropdown-content">
              <div className='container'>
                <div className='d-flex  flex-wrap justify-content-center'>
                  <div className='models'>
                    <Link to="/Vehicles/models" className='nav-text'>

                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" />

                      <p className='text-center text-dark'>   Model S </p>
                    </Link>
                  </div>
                  <div className='models'>
                    <Link className='nav-text'>
                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="" />


                      <p className='text-center text-dark'>   Model X </p>
                    </Link>
                  </div>
                  <div className='models'>
                    <Link className='nav-text'>

                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt="" />


                      <p className='text-center text-dark'>   Model 3 </p>
                    </Link>
                  </div>
                  <div className='models'>
                    <Link className='nav-text'>

                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="" />

                      <p className='text-center text-dark'>   Model Y </p>
                    </Link>
                  </div>
                  <div className='models'>
                    <Link className='nav-text'>

                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png" alt="" />


                      <p className='text-center text-dark'>   Cybertruck </p>
                    </Link>
                  </div>
                  <div className='models'>
                    <Link className='nav-text'>

                      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/v1697244584/Mega-Menu-Vehicles-HMC-RedBlue.png" alt="" />


                      <p className='text-center text-dark'> Help Me Choose </p>
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <Link className='nav-text text-white text-decoration-none me-5'>Energy</Link>
          <Link className='nav-text text-white text-decoration-none me-5'>Charging</Link>
          <Link className='nav-text text-white text-decoration-none me-5'>Discover</Link>
          <Link to="/Shop" className='nav-text text-white text-decoration-none me-5'>Shop</Link>
          <Link to="/cart" className='nav-text text-white text-decoration-none me-5'>Cart</Link>
        </div>
        <div className='nav-div-3'>
          <Link to='/support' className='me-3 text-white'>
            <FontAwesomeIcon icon={faQuestion} />
          </Link>
          <Link to='/network' className='me-3 text-white'>
            <FontAwesomeIcon icon={faGlobe} />
          </Link>
          <Link to='/SignuporLogin' className='me-2 text-white'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav