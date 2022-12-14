import React, { useState, useEffect } from "react";
import "./navbar.css";
import { GoChevronDown } from "react-icons/go";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const setActiveMenuFunction = () => {
    setActiveMenu(!activeMenu);
  };
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {
          <div className={activeMenu ? "hide" : "links"}>
            <Link to="/">HOME</Link>
            <a href="#about">ABOUT</a>
            <Link className="dropdown-parent" to="/">
              SERVICES <GoChevronDown />
              <ul className="dropdown">
                <li>
                  <Link to="/mepcontracting">Mep Contracting</Link>
                </li>
                <li>
                  <Link to="/meptrading">Mep trading</Link>
                </li>
              </ul>
            </Link>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#contact">CONTACT US </a>
          </div>
        }

        {theme === "light-theme" && (
          <div className="dark absolute-icon">
            <MdDarkMode onClick={() => toggleTheme()} />
          </div>
        )}

        {theme === "dark-theme" && (
          <div className="light absolute-icon ">
            <BsFillSunFill onClick={() => toggleTheme()} />
          </div>
        )}
        {activeMenu && (
          <div className="mobile-links">
            <AiOutlineClose />
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/mepcontracting">Mep Contracting</Link>
            <Link to="/meptrading">Mep trading</Link>
            <Link to="/">PORTFOLIO</Link>
            <Link to="/">CONTACT US </Link>
          </div>
        )}

        {activeMenu ? (
          <AiOutlineClose
            className="close"
            onClick={() => setActiveMenuFunction()}
          />
        ) : (
          <FaBars className="bars" onClick={() => setActiveMenuFunction()} />
        )}
      </div>
    </>
  );
};

export default Navbar;
