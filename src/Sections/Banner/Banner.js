import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Layout.css";
import styles from "./Banner.module.css";

import background from "../../Assets/LC-Banner-image.svg";

function Banner() {
  let navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          // border: "2px solid white",
        }}
      >
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
      <div className="layoutContainer">
        <div
          style={{
            // border: "2px solid white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={styles.leftText}>WHAT SETS US APART</p>
          <p className={styles.rightText}>
            Our passion is recruitment excellence, not sales. We see ourselves
            as an ethical team who refuses to cut corners and we know how much
            our commitment and continuity goes towards keeping our clients and
            candidates coming back to us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
