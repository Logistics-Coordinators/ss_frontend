import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Layout.css";
import styles from "./HeroSection.module.css";

import Navbar from "../../Components/Navbar/Navbar";

import slide1 from "../../Assets/slideshow/slide1.jpg";
import slide2 from "../../Assets/slideshow/slide2.jpg";
import slide3 from "../../Assets/slideshow/slide3.jpg";
import slide4 from "../../Assets/slideshow/slide4.jpg";
import slide5 from "../../Assets/slideshow/slide5.jpg";

function HeroSection() {
  let navigate = useNavigate();

  const slideImages = [
    {
      url: slide1,
    },
    {
      url: slide2,
    },
    {
      url: slide3,
    },
    {
      url: slide4,
    },
    {
      url: slide5,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        zIndex: 0,
        color: "white",
        width: "100%",
        // border: "2px solid red",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(35, 35, 35, 0.463)",
          width: "100%",
          height: "100vh",
          minHeight: "100%",
          zIndex: 0,
        }}
      >
        <img
          src={slideImages[0].url}
          style={{
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            minHeight: "100%",
            zIndex: -1,
          }}
          alt="logo"
        />
        <Navbar />
        <div className="layoutContainer">
          <div className={styles.contentContainer}>
            <p className={styles.heading}>
              TEMPORARY AND PERMANENT RECRUITMENT SERVICES
            </p>
            <p className={styles.subHeading}>
              WE ARE A COMPANY WHICH MAKE TRANSPORT EASIER AND FASTER. CANADA'S
              BIGGEST LOGISTICS COMPANY.
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={() => navigate("/employee")}
              >
                EMPLOYEES START HERE
              </button>
              <button
                className={styles.button}
                onClick={() => navigate("/company")}
              >
                COMPANIES START HERE
              </button>
            </div>
          </div>
          <div className={styles.subHero}>
            <div className={styles.rightSubContainer}>
              <span className={styles.orangeLine}></span>
              <p className={styles.subText}>WE BELIEVE IN SERVICE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
