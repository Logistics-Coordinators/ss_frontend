import React from "react";
import styles from "./Services.module.css";

import FMS from "../../Assets/FMS.jpg";
import ERS from "../../Assets/ERS.jpg";
import ITSolutions from "../../Assets/ITSolutions.jpg";
import LabourCentral from "../../Assets/LabourCentral.jpg";
import Load from "../../Assets/Load.jpg";
import LogisticsCordinators from "../../Assets/LogisticsCordinators-whitebg.jpg";

function Services() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles.servicesContainer}>
        <div className={styles.servicesContent}>
          <p className={styles.servicesHeading}>
            Our Other Services And Solutions
          </p>
          <p className={styles.servicesSubtitle}>
            At Logistics Coordinators, we deliver customized logistics
            experiences and help companies manage, grow and transform their
            operations into best-in-class. Our services include OTR transport,
            brokerage, freight forwarding, logistics and distribution, C-TPAT
            and PIP certifications, CVOR compliance, warehousing, staffing
            solutions, SCM consulting services and IT solutions. Our approach
            rests on lean six sigma principles providing uniform results.
          </p>
        </div>
        <div className={styles.services}>
          <div className={styles.imageContainer}>
            <img width={120} src={FMS} draggable={false} />
          </div>
          <div className={styles.imageContainer}>
            <img width={110} src={ERS} draggable={false} />
          </div>
          <div className={styles.imageContainer}>
            <img src={ITSolutions} draggable={false} />
          </div>
          <div className={styles.imageContainer}>
            <img src={LabourCentral} draggable={false} />
          </div>
          <div className={styles.imageContainer}>
            <img src={Load} draggable={false} />
          </div>
          <div className={styles.imageContainer}>
            <img src={LogisticsCordinators} draggable={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
