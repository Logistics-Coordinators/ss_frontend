import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./Company.module.css";

import emailjs from "@emailjs/browser";

// import LabourConnect from "../../Assets/LabourConnect-whitebg.svg";

function Company({ setShowCompanyForm }) {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  const publicKey = "c_NiGcQu2CKriPTsh";
  const templateID = "template_h88qdbm";
  const serviceID = "service_lv1w9m5";

  const handleCompanyFormSubmit = (val, resetForm) => {
    // e.preventDefault();
    console.log(val);
    emailjs.send(serviceID, templateID, val, publicKey).then(
      (response) => {
        console.log("SUCCESS", response);
        resetForm();
        setShowCompanyForm(false);
        alert("Your Application has been recieved.");
      },
      (error) => {
        console.log("FAILED");
      }
    );
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
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <Formik
          initialValues={{
            companyName: "",
            companyContactName: "",
            contactNumber: "",
            email: "",
            availableFrom: "",
            availableTill: "",
            comments: "",
          }}
          onSubmit={(val, { resetForm }) =>
            handleCompanyFormSubmit(val, resetForm)
          }
        >
          {({ values }) => (
            <Form>
              <div className={styles.formContainer}>
                <div className={styles.headingContainer}>
                  <h2 className={styles.heading}>COMPANY FORM</h2>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => setShowCompanyForm(false)}
                  >
                    close
                  </span>
                </div>
                <div className={styles.fieldsContainer}>
                  <div className={styles.fields}>
                    <p className={styles.label}>Company Name</p>
                    <Field
                      className={styles.inputField}
                      name="companyName"
                      placeholder="Amazon"
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Company Contact</p>
                    <Field
                      className={styles.inputField}
                      name="companyContactName"
                      placeholder="Name"
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Contact Number</p>
                    <Field
                      className={styles.inputField}
                      name="contactNumber"
                      placeholder="888-856-2352"
                      type="number"
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Email id</p>
                    <Field
                      className={styles.inputField}
                      name="email"
                      placeholder="info@labour-connect.com"
                      type="email"
                    />
                  </div>

                  <div className={styles.fields}>
                    <p className={styles.label}>Available From</p>
                    <Field
                      className={styles.inputField}
                      name="availableFrom"
                      type="time"
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Available Till</p>
                    <Field
                      className={styles.inputField}
                      name="availableTill"
                      type="time"
                    />
                  </div>
                  <div className={styles.fields}>
                    <p className={styles.label}>Comments</p>
                    <Field
                      className={styles.inputField}
                      name="comments"
                      placeholder="Comments goes here"
                    />
                  </div>
                </div>

                <div>
                  <button className={styles.button} type="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Company;
