import React from "react";

import styles from "./Employee.module.css";


import { FileUploader } from "react-drag-drop-files";

import { positions } from "../../utils/positions";

function Employee({setShowEmployeeForm}) {

  const fileTypes = ["PDF", "DOCX"];

  // const [file, setFile] = useState(null);

  const handleChange = (file) => {
    // setFile(file);
  };

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
            <h2 style={{ marginLeft: "2rem" }}>EMPLOYEE FORM</h2>
            <span
              class="material-symbols-outlined"
              style={{ marginRight: "1rem" }}
              onClick={() => setShowEmployeeForm(false)}
            >
              close
            </span>
          </div>

          <div className={styles.fieldsContainer}>
            <div className={styles.fields}>
              <p className={styles.label}>Name</p>
              <input placeholder="Ram Kumar" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Phone</p>
              <input placeholder="65224944094" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Email</p>
              <input
                type="email"
                placeholder="random@gmail.com"
                className={styles.inputField}
              />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Address</p>
              <input
                placeholder="Flat no. 6, Second floor, Rohine Residency"
                className={styles.inputField}
              />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Landmark</p>
              <input
                placeholder="Mid Town Road"
                className={styles.inputField}
              />
            </div>
            <div className={styles.fields}>
              <p className={styles.label}>Pincode</p>
              <input placeholder="K1A 0B1" className={styles.inputField} />
            </div>
            <div className={styles.fields}>
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

            <div className={styles.upload}>
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
