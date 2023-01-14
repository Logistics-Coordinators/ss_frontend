import React, { useState } from "react";
import LClogo from "../../Assets/LabourConnect-whitebg.svg";

import "../../styles/Layout.css";
import "../../styles/landing-global.css";
import styles from "./EmployeeApplication.module.css";

import GeneralInfo from "../../Components/EmployeeFormComp/GeneralInfo";
import LineHaulDriver from "../../Components/EmployeeFormComp/LineHaulDriver";
import EmploymentRecord from "../../Components/EmployeeFormComp/EmploymentRecord";

function EmployeeApplication() {
  const track = [
    "General Information",
    "New linehaul driver information",
    "Employment Record",
    "Upload License",
    "On Duty Hours",
  ];

  const [formCompletionStatus, setFormCompletionStatus] = useState(0);
  const [currentUserFormStatus, setCurrentUserFormStatus] = useState(1);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={LClogo}
          width={130}
          style={{ marginTop: "1rem" }}
          draggable={false}
        />
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
                      index + 1 == currentUserFormStatus ||
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
            {currentUserFormStatus == 1 ? <GeneralInfo /> : null}
            {currentUserFormStatus == 2 ? (
              <div>
                <LineHaulDriver />
              </div>
            ) : null}
            {currentUserFormStatus == 3 ? (
              <div>
                <EmploymentRecord />
              </div>
            ) : null}
            {currentUserFormStatus == 4 ? <div>Upload License</div> : null}
            {currentUserFormStatus == 5 ? <div>On Duty Hours</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeApplication;
