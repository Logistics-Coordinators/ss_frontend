import React from "react";
import styles from "./CarouselContent.module.css";

function CarouselContent({ imgSrc, heading, subheading, isImageOnLeft }) {
  return (
    <div
    className={styles.container}
      style={{
        flexDirection: isImageOnLeft ? "row" : "row-reverse",
      }}
    >
      <div className={styles.imageContainer}>
        <img src={imgSrc} width={"100%"} alt="logo" />
      </div>
      <div className={styles.textContent}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subHeading}>{subheading}</p>
      </div>
    </div>
  );
}

export default CarouselContent;
