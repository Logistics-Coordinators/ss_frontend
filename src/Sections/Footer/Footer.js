import React from "react";
import "../../styles/Layout.css";
import "../../styles/landing-global.css";
import styles from "./Footer.module.css";

import linkedinLogo from "../../Assets/linkedin.svg";

import LogisticsCordinators from "../../Assets/LogisticsCordinators-blackbg.jpg";

function Footer() {
  return (
    <div
      style={{
        width: "100vw",
        height: "85vh",
        // border: "2px solid red",
        backgroundColor: "#000",
        color: "white",
        position: "relative",
      }}
    >
      <div
        className="layoutContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          //   border: "2px solid green",
        }}
      >
        <div className={styles.leftFooter}>
          <img
            src={LogisticsCordinators}
            width={200}
            draggable={false}
            alt="logo"
          />
          {/* <p className={styles.heading}>LOGISTICS CORDINATORS</p> */}
          <p className={styles.subtitle}>FOLLOW US ON</p>
          <div>
            <a
              href="https://www.linkedin.com/company/logistics-coordinators/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <img
                src={linkedinLogo}
                width={40}
                className={styles.socials}
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div className={styles.rightFooter}>
          <h1 className={styles.subtitle}>Contact Us</h1>
          <div>
            Address: 24-155 East Beaver Creek Road, Suite 892 Richmond Hill, ON
            L4B 2N1
          </div>
          <div>Phone: +1-888-8LOADLC(856-2352)</div>
          <div>Email: info@logistics-coordinators.com</div>
        </div>
      </div>
      <div
        className="layoutContainer"
        style={{
          width: "100%",
          //   border: "2px solid white",
          position: "absolute",
          bottom: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>@LOGISTIC CORDINATORS TM, ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default Footer;
