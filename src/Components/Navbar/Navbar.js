import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

import useMediaQuery from "../../hooks/ScreenWidth.js";

import styles from "./Navbar.module.css";

import LabourConnect from "../../Assets/LabourConnect-transparent.png";

function Navbar() {
  let navigate = useNavigate();

  const [isFocused, setIsFocused] = useState(false);

  const isBreakpoint = useMediaQuery(768);

  const handleHamLinkClick = (link) => {
    setIsFocused(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img
          src={LabourConnect}
          width={150}
          draggable={false}
          alt="logo"
          style={{ margin: "0.5rem" }}
        />
      </div>

      {isBreakpoint ? null : (
        <div className={styles.navLinks}>
          <a href="mailto:info@loadlc.com">
            <span className={styles.link}>Contact Us</span>
          </a>
          <a
            href="https://www.logistics-coordinators.com/services/"
            without
            rel="noreferrer"
            target="_blank"
          >
            <span className={styles.link}>Our Service</span>
          </a>

          <button
            className={styles.buttonMed}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}

      {isBreakpoint ? (
        <Hamburger isFocused={isFocused} setIsFocused={setIsFocused} />
      ) : null}

      {isFocused ? (
        <div className={styles.hamContainer}>
          <div className={styles.linkHam}>
            <a href="mailto:info@loadlc.com">
              <span className={styles.linkHam}>Contact Us</span>
            </a>
          </div>
          <div className={styles.linkHam}>
            <a
              href="https://www.logistics-coordinators.com/services/"
              without
              rel="noreferrer"
              target="_blank"
            >
              <span>Our Service</span>
            </a>
          </div>

          <button
            className={styles.buttonMedHam}
            style={{ margin: "1rem" }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
