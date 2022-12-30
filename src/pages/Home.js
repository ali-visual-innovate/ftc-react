import React from 'react';
import About from '../components/About';
import Contactus from '../components/Contactus';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
import Partner from '../components/Partner';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import ShowCase from '../components/ShowCase';

const Home = () => {
  return (
    <>
      <ShowCase/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contactus/>
    <Partner/>
    </>
  );
}

export default Home;
