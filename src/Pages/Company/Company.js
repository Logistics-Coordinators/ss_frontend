import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Company.module.css";

import LabourConnect from "../../Assets/LabourConnect-whitebg.svg";

function Company({ setShowCompanyForm }) {
  let navigate = useNavigate();

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(35, 35, 35, 0.463)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div
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
          alt="logo"
        />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.formContainer}>
          <div
            style={{
              width: "100% ",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ marginLeft: "1rem" }}>COMPANY FORM</h2>
            <span
              class="material-symbols-outlined"
              style={{ marginRight: "1rem" }}
              onClick={() => setShowCompanyForm(false)}
            >
              close
            </span>
          </div>
          <div className={styles.fieldsContainer}>
            <div className={styles.fields}>
              <p className={styles.label}>Company name</p>
              <input placeholder="Ram Kumar" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Company contact no</p>
              <input placeholder="65224944094" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Email id</p>
              <input
                type="email"
                placeholder="random@gmail.com"
                className={styles.inputField}
              />
            </div>

            <div className={styles.fields}>
              <p className={styles.label}>Available From</p>
              <input type="time" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Available Till</p>
              <input type="time" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Comments</p>
              <textarea
                style={{ resize: "none", width: "100%" }}
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
