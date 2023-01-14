import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Employee.module.css";

import LabourConnect from "../../Assets/LabourConnect-whitebg.svg";

import { FileUploader } from "react-drag-drop-files";

import { positions } from "../../utils/positions";

function Employee() {
  let navigate = useNavigate();

  const fileTypes = ["PDF", "DOCX"];

  // const [file, setFile] = useState(null);

  const handleChange = (file) => {
    // setFile(file);
  };

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
          alt="logo"
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
          <h2>EMPLOYEE FORM</h2>

          <div className={styles.fieldsContainer}>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Name</p>
              <input placeholder="Ram Kumar" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Phone</p>
              <input placeholder="65224944094" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Email</p>
              <input
                type="email"
                placeholder="random@gmail.com"
                className={styles.inputField}
              />
            </div>
            <div style={{ width: "80%", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Address</p>
              <input
                placeholder="Flat no. 6, Second floor, Rohine Residency"
                className={styles.inputField}
              />
            </div>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Landmark</p>
              <input
                placeholder="Mid Town Road"
                className={styles.inputField}
              />
            </div>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Pincode</p>
              <input placeholder="K1A 0B1" className={styles.inputField} />
            </div>
            <div style={{ width: "15rem", margin: "0.2rem 1.5rem" }}>
              <p className={styles.label}>Post Applied For</p>
              <select className={styles.inputField}>
                {positions.map((element) => {
                  return (
                    <option
                      value={Object.keys(element)[0]}
                      key={Object.keys(element)[0]}
                    >
                      {Object.values(element)[0]}
                    </option>
                  );
                })}
              </select>
            </div>

            <div
              style={{
                width: "90%",
                margin: "1.2rem 1.5rem",
                // border: "2px solid white",
              }}
            >
              <p className={styles.label}>Upload CV</p>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "3px",
                  // display: "flex",
                  // justifyContent: "space-around",
                }}
              >
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  className={styles.inputField}
                  multiple={false}
                  onTypeError={(err) => console.log(err)}
                  maxSize={5}
                />
              </div>
            </div>
          </div>

          <div style={{ width: "10rem" }}>
            <button className={styles.button}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
