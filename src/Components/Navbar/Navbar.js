import React from "react";
import styles from "./Navbar.module.css";

import LabourConnect from "../../Assets/LabourConnect-blackbg.jpg";

function Navbar() {
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
          target="_blank"
        >
          <span className={styles.link}>Our Service</span>
        </a>
        <span className={styles.link}>
          <a
            href="https://www.logistics-coordinators.com/services/"
            target="_blank"
          >
            <span className={styles.link}>Opportunities</span>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
