import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

import LabourConnect from "../../Assets/LabourConnect-blackbg.jpg";

function Navbar() {
  let navigate = useNavigate();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img
          src={LabourConnect}
          width={150}
          draggable={false}
          alt="logo"
          // style={{ marginLeft: "3.5rem" }}
        />
      </div>

      <div className={styles.navLinks}>
        <a href="mailto:info@loadlc.com">
          <span className={styles.link}>Contact Us</span>
        </a>
        <a
          href="https://www.logistics-coordinators.com/services/"
          without rel="noreferrer"
          target="_blank"
        >
          <span className={styles.link}>Our Service</span>
        </a>
        <span className={styles.link}>
          <p onClick={() => navigate("/login")}>
            <span className={styles.link}>Login</span>
          </p>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
