import React from "react";
import { motion } from "framer-motion";

import styles from "./Explore.module.css";
import RangeCover from "../../Assets/RangeCover.jpg";

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
        <motion.div
          className={styles.exploreLeft}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, type: "tween" }}
        >
          <p className={styles.exploreHeading}>Our Range</p>
          <p className={styles.exploreSubtitle}>
            LC has the flexibility to work with each customer to develop
            specialized staffing and consulting solutions that meet their unique
            needs, ensuring consistent, quality service - regardless of the
            service options required. <br></br>
          </p>
        </motion.div>
        <motion.div
          className={styles.exploreRight}
          initial={{ x: "150%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, type: "tween" }}
        >
          <img
            alt="range"
            src={RangeCover}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>
      {/* <div className={styles.exploreContent}>
        <p className={styles.exploreContentHeading}>Explore as you like</p>
        <p className={styles.exploreContentSubTitle}>
          Our suite of staffing services include temporary staffing,
          temporary-to-hire staffing, direct hire placements, and a hybrid
          solution. Additional services include payroll and managed staffing
          programs
        </p>
      </div> */}
    </div>
  );
}

export default Explore;
