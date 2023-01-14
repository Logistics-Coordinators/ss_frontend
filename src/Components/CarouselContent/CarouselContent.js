import React from "react";
import styles from "./CarouselContent.module.css";

function CarouselContent({ imgSrc, heading, subheading, isImageOnLeft }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // border: "2px solid red",
        height: "100vh",
        width: "100vw",
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
