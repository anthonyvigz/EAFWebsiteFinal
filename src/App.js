import React, { useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Services from "./views/Services";
import Gallery from "./views/Gallery";
import Reviews from "./views/Reviews";
import Quote from "./views/Quote";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import Modal from './views/Modal';
import "./styling/modal.scss"
import eafLogo from "./img/EAF_Final.png";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(true);

  const modalHandler = () => {
    setOpen(false);
    console.log(open)
  }

  const variants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <>
    <Modal visible={open}>
        <div className="grayedBackdrop">
         <div className="snowPop">
         <motion.img
        initial="hidden"
        animate="visible"
        variants={variants}
        src={eafLogo}
        alt="eafwhite"
        width="70px"
      />
           <button className="removeModal" onClick={modalHandler}><i class="fas fa-times"></i></button>
           <h1>Now offering <span>snowplow</span> removal in Nashua, NH!</h1>
           <div className="icons">
            <i class="fas fa-snowplow"></i>
            <i class="fas fa-snowflake"></i>
          </div>
          <div className="moreText">
            <h3>Two Trucks Fully Insured</h3>
            <div className="snow">
            <i class="fas fa-snowflake"></i>
            <i class="fas fa-snowflake"></i>
            <i class="fas fa-snowflake"></i>
            </div>
            <h3>Affordable Rates</h3>
          </div>
          <h4>Call Us:</h4>
            <h4>1 (603) 897 9776 </h4>
            <h4>1 (603) 759 5424 </h4>
         </div>
          </div>
          </Modal>
      <div className="mainApp">
        <NavBar />
        <Home />
        <Services />
        <Gallery />
        <Reviews />
        <Quote />
        <Footer />
        </div>
        </>
  );
}

export default App;
