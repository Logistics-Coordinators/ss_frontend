import React from "react";
import styles from "./DescriptionCard.module.css";

function DescriptionCard({ heading, subtitle }) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardHeading}>{heading}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </div>
  );
}

export default DescriptionCard;
