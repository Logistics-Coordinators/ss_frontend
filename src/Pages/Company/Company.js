import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Company.module.css";

import LabourConnect from "../../Assets/LabourConnect-whitebg.svg";

function Company() {
  let navigate = useNavigate();

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <div
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <img
          src={LabourConnect}
          draggable={false}
          width={130}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.formContainer}>
          <h2>COMPANY FORM</h2>

          <div className={styles.fieldsContainer}>
            <div style={{ width: "15rem", margin: "0 1.5rem" }}>
              <p className={styles.label}>Company name</p>
              <input placeholder="Ram Kumar" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0 1.5rem" }}>
              <p className={styles.label}>Company contact no</p>
              <input placeholder="65224944094" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0 1.5rem" }}>
              <p className={styles.label}>Email id</p>
              <input
                type="email"
                placeholder="random@gmail.com"
                className={styles.inputField}
              />
            </div>

            <div style={{ width: "15rem", margin: "0 1.5rem" }}>
              <p className={styles.label}>Available From</p>
              <input type="time" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0 1.5rem" }}>
              <p className={styles.label}>Available Till</p>
              <input type="time" className={styles.inputField} />
            </div>
            <div style={{ width: "80%", margin: "0 1.5rem" }}>
              <p className={styles.label}>Comments</p>
              <textarea
                style={{ resize: "none", width: "100%", height: "8rem" }}
                placeholder="Comments goes here"
                className={styles.inputField}
              />
            </div>
          </div>

          <div style={{ width: "10rem", marginTop: "3rem" }}>
            <button className={styles.button}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
