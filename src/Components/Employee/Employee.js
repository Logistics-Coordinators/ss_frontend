import React from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
// import { Dropdown } from "semantic-ui-react" ;

// Css Changing
// import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/components/dropdown.min.css";

import styles from "./Employee.module.css";

import { positions } from "../../utils/positions";

import emailjs from "@emailjs/browser";

function Employee({ setShowEmployeeForm }) {
  const publicKey = "c_NiGcQu2CKriPTsh";
  const templateID = "template_q6dptqa";
  const serviceID = "service_lv1w9m5";

  const handleEmpFormSubmit = (val, resetForm) => {
    // emailjs.send(serviceID, templateID, val, publicKey).then(
    //   (response) => {
    //     console.log("SUCCESS", response);
    //     // reset Form
    //     resetForm();
    //     setShowEmployeeForm(false);
    //     alert("Your Application has been recieved.");
    //   },
    //   (error) => {
    //     console.log("FAILED");
    //   }
    // );

    console.log(val);

    axios
      .post(
        "https://loadlc-backend-staging.herokuapp.com/api/v1/SS/addNewemployee",
        val,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        resetForm();
        setShowEmployeeForm(false);
        alert("Your Application has been recieved.");
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgb(35, 35, 35, 0.463)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{
            empName: "",
            empNumber: "",
            empAddress: "",
            empEmail: "",
            empCity: "",
            empPincode: "",
            empProvince: "",
            empPosition: "",
            employeeCV: "",
          }}
          onSubmit={(val, { resetForm }) => handleEmpFormSubmit(val, resetForm)}
        >
          {({ values, setFieldValue }) => (
            <div className={styles.formContainer}>
              <Form>
                <div className={styles.headingContainer}>
                  <h2 className={styles.heading}>EMPLOYEE FORM</h2>
                  <span
                    class="material-symbols-outlined"
                    onClick={() => setShowEmployeeForm(false)}
                  >
                    close
                  </span>
                </div>

                <div className={styles.fieldsContainer}>
                  <div className={styles.fields}>
                    <p className={styles.label}>Name</p>
                    <Field
                      className={styles.inputField}
                      name="empName"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Phone</p>
                    <Field
                      className={styles.inputField}
                      type="number"
                      name="empNumber"
                      placeholder="888-856-2352"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Email</p>
                    <Field
                      className={styles.inputField}
                      name="empEmail"
                      type="email"
                      placeholder="info@labour-connect.com"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Street</p>
                    <Field
                      className={styles.inputField}
                      name="empAddress"
                      placeholder="596 Roger Street"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>City</p>
                    <Field
                      className={styles.inputField}
                      name="empCity"
                      placeholder="Toronto"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Province</p>
                    <Field
                      className={styles.inputField}
                      name="empProvince"
                      placeholder="Ontario"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Postal Code</p>
                    <Field
                      className={styles.inputField}
                      name="empPincode"
                      placeholder="K1A 0B1"
                      required
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Position Applying For</p>
                    <select
                      name="empPosition"
                      className={styles.inputField}
                      onChange={(e) => {
                        setFieldValue("empPosition", e.target.value);
                      }}
                    >
                      {positions.map((element) => {
                        return (
                          <option
                            value={Object.values(element)[0]}
                            key={Object.keys(element)[0]}
                          >
                            {Object.values(element)[0]}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className={styles.fields}>
                    <p className={styles.label}>Upload CV/Resume</p>
                    <div className={styles.upload}>
                      <input
                        id="employeeCV"
                        name="employeeCV"
                        type="file"
                        onChange={(event) => {
                          setFieldValue(
                            "employeeCV",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ width: "10rem" }}>
                  <button className={styles.button} type="submit">
                    SUBMIT
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Employee;
