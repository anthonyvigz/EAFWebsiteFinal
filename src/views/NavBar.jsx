import React, { useState } from "react";
import "../styling/navbar.scss";
import logo from "../img/EAF.png";
import logowhite from "../img/EAFWhiteNoText.png";
import useWindowDimensions from "./WindowSize";

export default function NavBar() {
  const [top, setNav] = useState(true);

  // width of window from window component
  const { width } = useWindowDimensions();

  // this is for the mobile side nav
  const [sidenav, showNav] = useState(false);

  // show side nav
  const openNav = (event) => {
    showNav(!sidenav);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 1) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  if (width > 765) {
    return (
      <nav className={top ? "navBarHome" : "navBarHome movingNav"}>
        <img className="showLogo" src={top ? logowhite : logo} alt="navLogo" />
        <div className="links">
          <a href="#home">HOME</a>
          <a href="#services">SERVICES</a>
          <a href="#gallery">GALLERY</a>
          <a href="#reviews-">REVIEWS</a>
          <a href="#quote">QUOTE</a>
        </div>
      </nav>
    );
  } else {
    return (
      <div className="topNavMobile">
        <div className="mobileBar">
          <img src={logowhite} alt="navLogo" width="200px" />
          <button onClick={openNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={"mobileLanNav"}
          style={!sidenav ? { marginLeft: "-180px" } : { marginLeft: 0 }}
        >
          <nav onClick={openNav}>
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#gallery">GALLERY</a>
            <a href="#reviews-">REVIEWS</a>
            <a href="#quote">QUOTE</a>
          </nav>
          <img src={logowhite} alt="navLogo" width="200px" />
        </div>
      </div>
    );
  }
}
