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
            >
              <img src={linkedinLogo} width={40} className={styles.socials} />
            </a>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <div className={styles.subFooter}>
            <p className={styles.footerLink}>
              <a
                href="https://www.logistics-coordinators.com/services/"
                target="_blank"
              >
                SERVICES
              </a>
            </p>
            <p className={styles.footerLink}>STRATEGY</p>
            <p className={styles.footerLink}>OPPORTUNITIES</p>
            {/* <p className={styles.footerLink}></p> */}
          </div>
          <div className={styles.subFooter}>
            <p className={styles.footerLink}>ABOUT</p>
            <a href="https://www.logistics-coordinators.com/" target="_blank">
              <p className={styles.footerLink}>WEBSITE</p>
            </a>
            <a href="mailto:info@loadlc.com">
              <p className={styles.footerLink}>CONTACT</p>
            </a>
          </div>
          <div className={styles.subFooter}>
            <p className={styles.footerLink}>NEWS</p>
            <p className={styles.footerLink}>FORUMS</p>
            <p className={styles.footerLink}>COMPANY</p>
          </div>
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
        <div className={styles.othersContainer}>
          <p>
            REACH US AT: <a href="tel:8888562352">(888) 856 2352</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
