import React from "react";
import { Formik, Form, Field } from "formik";
// import { Dropdown } from "semantic-ui-react" ;

// Css Changing
// import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/components/dropdown.min.css";

import styles from "./Employee.module.css";

import { FileUploader } from "react-drag-drop-files";

import { positions } from "../../utils/positions";

import emailjs from "@emailjs/browser";

function Employee({ setShowEmployeeForm }) {
  const fileTypes = ["PDF", "DOCX"];

  // const [file, setFile] = useState(null);

  const publicKey = "c_NiGcQu2CKriPTsh";
  const templateID = "template_q6dptqa";
  const serviceID = "service_lv1w9m5";

  const handleEmpFormSubmit = (val, resetForm) => {
    // e.preventDefault();
    // console.log(val);
    emailjs.send(serviceID, templateID, val, publicKey).then(
      (response) => {
        console.log("SUCCESS", response);
        // reset Form
        resetForm();
        setShowEmployeeForm(false);
        alert("Your Application has been recieved.");
      },
      (error) => {
        console.log("FAILED");
      }
    );
  };

  const handleFileChange = (uploadFile) => {
    // setFile(uploadFile);
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
          }}
          onSubmit={(val, { resetForm }) => handleEmpFormSubmit(val, resetForm)}
        >
          {({ values, setFieldValue }) => (
            <div className={styles.formContainer}>
              <Form>
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
                    <p className={styles.label}>Address</p>
                    <Field
                      className={styles.inputField}
                      name="empAddress"
                      placeholder="Flat no. 6, Second floor, Rohine Residency"
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
                      // value={values.empPosition}
                      onChange={(_, { value }) =>
                        setFieldValue("empPosition", value)
                      }
                    >
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
                    {/* <Dropdown
                      selection
                      placeholder="Position"
                      options={positions.map((ele) => ({
                        value: Object.keys(ele)[0],
                        text: Object.values(ele)[0],
                      }))}
                      value={values.empPosition}
                      onChange={(_, { value }) =>
                        setFieldValue("empPosition", value)
                      }
                    /> */}
                  </div>

                  <div className={styles.upload}>
                    <p className={styles.label}>Upload CV/Resume</p>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "3px",
                        // display: "flex",
                        // justifyContent: "space-around",
                      }}
                    >
                      <FileUploader
                        handleFileChange={handleFileChange}
                        name="file"
                        types={fileTypes}
                        className={styles.inputField}
                        multiple={false}
                        onTypeError={(err) => console.log(err)}
                        maxSize={5}
                        required
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
