import React from "react";
import styles from "./Explore.module.css";

function Explore() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // border: "2px solid white",
      }}
    >
      <div className={styles.exploreContainer}>
        <div className={styles.exploreLeft}>
          <p className={styles.exploreHeading}>Our Range</p>
          <p className={styles.exploreSubtitle}>
            LC has the flexibility to work with each customer to develop
            specialized staffing and consulting solutions that meet their unique
            needs, ensuring consistent, quality service - regardless of the
            service options required. <br></br>
          </p>
        </div>
        <div className={styles.exploreRight}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.3246654235845!2d-79.38033398455634!3d43.849098979115034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3ed4edaaaaab%3A0x34dbe5d6b9d8e54b!2sLogistics%20Coordinators!5e0!3m2!1sen!2sin!4v1672233430250!5m2!1sen!2sin"
            width="700"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.exploreContent}>
        <p className={styles.exploreContentHeading}>Explore as you like</p>
        <p className={styles.exploreContentSubTitle}>
          Our suite of staffing services include temporary staffing,
          temporary-to-hire staffing, direct hire placements, and a hybrid
          solution. Additional services include payroll and managed staffing
          programs
        </p>
      </div>
    </div>
  );
}

export default Explore;
