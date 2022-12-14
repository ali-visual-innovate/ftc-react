import React from 'react';
import './services.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
      <div className="container">
        <div className="services">
          <h1>Our Services</h1>
          <div className="row-services">
            <div className="service">
              <img src={icon1} alt="" />
              <Link to='mepcontracting'>MEP Contracting</Link>
            </div>
            <div className="service">
              <img src={icon2} alt="" />
              <Link to='/meptrading'>MEP Trading</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
