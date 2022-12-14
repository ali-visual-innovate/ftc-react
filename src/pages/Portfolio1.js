import React from "react";
import './portfolio1.css'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'

const Portfolio1 = () => {
  return (
    <>
      <div className="container">
        <div className="portfolio1">
          <div className="portfolio1-text">
            <h1>Eva Pharma</h1>
            <p>
              Egypt Otsuka Pharmaceutical Co., S.A.E. is a subsidiary of the
              Global Pharmaceutical Company Otsuka, part of Otsuka Holdings of
              Japan. Otsuka Holdings has over 77 companies and listed in the
              Tokyo Stock Exchange. Otsuka Pharmaceutical was established in
              Tokushima Prefecture, Japan in 1964. At Otsuka Pharmaceutical, we
              are committed to a holistic approach to health and well-being of
              people and are striving to create innovative, thoroughly-original:
              pharmaceutical and nutraceutical products based on our corporate
              philosophy “Otsuka-people creating new products for better health
              worldwide”.
            </p>
            <p>
              Supply,Install,Test and Commisioning works for following Systems:
            </p>
            <h3>A-Firefighting Systems:</h3>
            <p>1-Fire Hose Cabinet System.</p>
            <p>2-Fire Water Sprinklers System.</p>
            <p>3-Fire Extinguisher.</p>
            <h3>B-Fire Alarm Systems:</h3>
            <p>1-Addressable Fire Alarm System.</p>
            <p>2-VESDA Fire Alarm System.</p>
          </div>
          <div className="portfolio1-imgs">
              <img src={p1} alt="" />
              <img src={p2} alt="" />
              <img src={p3} alt="" />
              <img src={p4} alt="" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio1;
