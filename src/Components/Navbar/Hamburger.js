import React, { useState } from "react";

import styles from "./Hamburger.module.css";

function Hamburger({ isFocused, setIsFocused }) {
  return (
    <div>
      <button
        type="button"
        className={styles.ham}
        onClick={() => {
          setIsFocused(!isFocused);
        }}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
}

export default Hamburger;
