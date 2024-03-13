import "./navber.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navber() {
  const [shownav, setshownav] = useState(0);
  const [subshownav, setsubshownav] = useState(0);
  const [subshownav2, setsubshownav2] = useState(0);

  const opennav = () => {
    const navLinks = document.getElementById("navlist");
    const xmarks = document.getElementById("xmark");
    const bars = document.getElementById("bar");
    if (shownav === 0) {
      navLinks.style.left = "0%";
      xmarks.style.display = "block";
      bars.style.display = "none";
      setshownav(1);
    } else {
      navLinks.style.left = "-100%";
      xmarks.style.display = "none";
      bars.style.display = "block";
      setshownav(0);
    }
  };
  const htmlcssArrow = () => {
    const navLinks = document.getElementById("htmlcss-arrow");
    const submenu = document.getElementById("sub-menu");
    if(subshownav===0){
      navLinks.style.transform="rotate(180deg)";
      submenu.style.display = "block";
      setsubshownav(1);
    }
    else{
      navLinks.style.transform="rotate(0deg)";
      submenu.style.display = "none";
      setsubshownav(0);
    }
  };

  const jsarrow = () => {
    const navLinks = document.getElementById("js-arrow");
    const submenu = document.getElementById("jssubmenu");
    if(subshownav2===0){
      navLinks.style.transform="rotate(180deg)";
      submenu.style.display = "block";
      setsubshownav2(1);
    }
    else{
      navLinks.style.transform="rotate(0deg)";
      submenu.style.display = "none";
      setsubshownav2(0);
    }
  };
 
  const search=()=>{
    const searchBox = document.getElementById("bx-search");
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("showInput");
      if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"fa-xmark");
      }else {
        searchBox.classList.replace("fa-xmark" ,"bx-search");
      }

  }

  return (
    <nav>
      <div className="navbar" id="navbar">
        <div className="logo">
          <a href="#">AKG SHOP</a>
        </div>
        <div className="nav-links">
          <ul className="links" id="navlist">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">Hardware Product</a>
              {/* <i class="fa-solid fa-angle-down"></i> */}
              <i
                className="fa-solid fa-angle-down htmlcss-arrow arrow"
                id="htmlcss-arrow"
                onClick={htmlcssArrow}
              ></i>
              <ul className="htmlCss-sub-menu sub-menu" id="sub-menu">
                <li>
                  <a href="#">Pankaj super sakti pipe</a>
                </li>
                <li>
                  <a href="#">Bucket</a>
                </li>
                <li>
                  <a href="#">Chapa</a>
                </li>
                <li>
                  <a href="#">Balti</a>
                </li>

                <li>
                  <a href="#">Chupri</a>
                </li>
                <li>
                  <a href="#">Telfish</a>
                </li>
                <li>
                  <a href="#">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Water Supply</a>
              <i className="fa-solid fa-angle-down js-arrow arrow " id="js-arrow" onClick={jsarrow} ></i>
              <ul className="js-sub-menu sub-menu" id="jssubmenu">
                <li>
                  <a href="#">Fish Car</a>
                </li>
                <li>
                  <a href="#">Stone Car</a>
                </li>
                <li>
                  <a href="#">Sand Car</a>
                </li>
                <li>
                  <a href="#">Water Tanker</a>
                </li>
                <li>
                  <a href="#">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">PAYMENT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass bx bx-search" onClick={search}></i>
          <div className="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div onClick={opennav} className="navwrap">
          <i className="fa-solid fa-bars" id="bar"></i>
          <i className="fa-solid fa-xmark" id="xmark"></i>
        </div>
      </div>
    </nav>
  );
}
