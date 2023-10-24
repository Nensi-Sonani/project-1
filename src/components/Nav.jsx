import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGlobe, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
  return (
    <div className='main-nav'>
        <nav className='d-flex justify-content-between  align-items-center ms-4 me-4'>
        <div className='nav-div-1'>
        <Link to="/" className='logo'>
            <img src="https://freepngdesign.com/content/uploads/images/tesla-metallic-logo-1660.png" alt="tesla logo" className=''/>
        </Link>
        </div>
        <div className='nav-div-2'>
        <Link to="/Vehicles" className='nav-text text-center text-white text-decoration-none me-5'>Vehicles</Link>
        <Link to="/Energy" className='nav-text text-white text-decoration-none me-5'>Energy</Link>
        <Link to="/Charging" className='nav-text text-white text-decoration-none me-5'>Charging</Link>
        <Link to="/Discover" className='nav-text text-white text-decoration-none me-5'>Discover</Link>
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