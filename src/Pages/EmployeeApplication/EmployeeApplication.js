import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LClogo from "../../Assets/LabourConnect-whitebg.svg";

import "../../styles/Layout.css";
import "../../styles/landing-global.css";
import styles from "./EmployeeApplication.module.css";

import GeneralInfo from "../../Components/EmployeeFormComp/GeneralInfo";
import LineHaulDriver from "../../Components/EmployeeFormComp/LineHaulDriver";
import EmploymentRecord from "../../Components/EmployeeFormComp/EmploymentRecord";
import TermsAndConditions from "../../Components/EmployeeFormComp/TermsAndConditions";
import OnDutyHours from "../../Components/EmployeeFormComp/OnDutyHours";
import UploadDocs from "../../Components/EmployeeFormComp/UploadDocs";
import DriverExperience from "../../Components/EmployeeFormComp/DriverExperience";

function EmployeeApplication() {
  const track = [
    "General Information",
    "Driver Information",
    "Employment Record",
    "Driver Experience",
    "Upload Documents",
    "On Duty Hours",
    "Terms and Conditions",
  ];

  const [formCompletionStatus] = useState(0);
  const [currentUserFormStatus, setCurrentUserFormStatus] = useState(1);

  let navigate = useNavigate();

  useEffect(() => {
    const item = localStorage.getItem("token");
    if (!item) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    const item = localStorage.getItem("token");

    if (item) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={LClogo}
          width={140}
          style={{ marginTop: "1rem" }}
          draggable={false}
          alt="logo"
        />
        <button
          className={styles.buttonMed}
          style={{ position: "absolute", right: "5rem" }}
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
      <div className="layoutContainer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.trackSection}>
            <div className={styles.greyBg}></div>
            {track.map((item, index) => (
              <div
                key={index + 1}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      index + 1 === currentUserFormStatus ||
                      index + 1 <= formCompletionStatus
                        ? "#E84B01"
                        : "white",
                    borderRadius: "50%",
                    color: "black",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1rem",
                  }}
                  onClick={() => setCurrentUserFormStatus(index + 1)}
                >
                  {index + 1 <= formCompletionStatus ? (
                    <span class="material-symbols-outlined">done</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div
                  style={{ width: "fit-content" }}
                  onClick={() => setCurrentUserFormStatus(index + 1)}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: "90%" }}>
            {currentUserFormStatus === 1 ? <GeneralInfo /> : null}
            {currentUserFormStatus === 2 ? (
              <div>
                <LineHaulDriver />
              </div>
            ) : null}
            {currentUserFormStatus === 3 ? (
              <div>
                <EmploymentRecord />
              </div>
            ) : null}
            {currentUserFormStatus === 4 ? (
              <div>
                <DriverExperience />
              </div>
            ) : null}
            {currentUserFormStatus === 5 ? (
              <div>
                <UploadDocs />
              </div>
            ) : null}
            {currentUserFormStatus === 6 ? (
              <div>
                <OnDutyHours />
              </div>
            ) : null}
            {currentUserFormStatus === 7 ? (
              <div>
                <TermsAndConditions />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeApplication;
