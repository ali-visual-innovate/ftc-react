import React from "react";
import "./footer.css";
import {FaChevronRight} from 'react-icons/fa'
import { Link } from "react-router-dom";
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="left-footer">
              <h1>Our Commitment</h1>
              <p>
                Al-Meshka is committed to deliver a quality product according to
                client requirements and consultant specifications. For our
                client satisfaction and our aspiration to be different in our
                work, Al-Meshka has created a board just to ensure every single
                part in the project will be done as it should be. Our MEP board
                is a group of specialists in management, engineering, design,
                sales, quality, safety, and financial.
              </p>
              <p>© Copyright – Al-Meshka –</p>
            </div>
            <div className="middle-footer">
              <h1>
              Our Services

              </h1>
              <div className="footer-links">
                <Link>MEP Contracting</Link>
                <Link>MEP Trading</Link>
                <Link>Facility Manaement</Link>
                <Link>Steel Services</Link>
              </div>
            


            </div>
            <div className="right-footer">
              <h1>Quick Links</h1>
              <a href=""><FaChevronRight/>About the future of our company</a>
              <a href=""><FaChevronRight/>Our projects history experience</a>
              <a href=""><FaChevronRight/>Our services</a>
              <a href=""><FaChevronRight/>Contact Us</a>

      <div className="socials">
          <a href="#"><img src={facebook} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={youtube} alt="" /></a>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
