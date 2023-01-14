import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./FormComp.module.css";

function LineHaulDriver() {
  const handleLineHaulSubmit = (val, actions) => {
    console.log(val);
  };

  return (
    <div>
      <Formik
        initialValues={{
          time: "",
          dateOfBirth: "",
          azDuration: "",
          azDurationON: "",
          position: "",
          applicationDate: "",
          accidentRecord1: "",
          accidentRecord2: "",
          accidentRecord3: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          licenseDenail: "",
          licenseDenialReason: "",
          licenseSuspension: "",
          licenseSuspensionReason: "",
        }}
        onSubmit={(val, actions) => handleLineHaulSubmit(val, actions)}
      >
        {({
          //   isSubmitting,
          values,
        }) => (
          <Form>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  marginLeft: "2rem",
                }}
              >
                {/* Left Section */}
                <div className={styles.generalLeft}>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      How long at current address ?
                    </div>
                    <Field
                      className={styles.inputFieldSmall}
                      name="time"
                      placeholder="Time"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>Date of birth</div>
                    <Field
                      className={styles.inputFieldSmall}
                      name="dateOfBirth"
                      type="date"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      How long have you held a AZ license?
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="azDuration"
                      placeholder="time"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>Applied For</div>
                    <Field
                      className={styles.inputFieldSmall}
                      name="position"
                      placeholder="Position"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Application Date</div>
                    <Field
                      className={styles.inputFieldSmall}
                      name="applicationDate"
                      type="date"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      How long have you held a AZ license in ON?
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="azDurationON"
                      placeholder="time"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      Accident record of past 3 years
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="accidentRecord1"
                      placeholder="1st year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="accidentRecord2"
                      placeholder="2nd year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="accidentRecord3"
                      placeholder="3rdyear"
                    />
                  </div>
                </div>

                {/* General Right */}
                <div className={styles.generalRight}>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      Traffic convictions and forfeitures of past three years
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="addressLine1"
                      placeholder="Address line 1"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="addressLine2"
                      placeholder="Address line 2"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="city"
                      placeholder="City"
                    />
                  </div>

                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="licenseDenial">
                      Have you been denied a license ?
                    </div>
                    <div
                      role="group"
                      aria-labelledby="licenseDenial"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field type="radio" name="licenseDenail" value="Yes" />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" name="licenseDenail" value="No" />
                        No
                      </label>
                    </div>
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>If yes state the reason</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="licenseDenialReason"
                      placeholder="State the reason"
                    />
                  </div>

                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="licenseSuspension">
                      Have your license ever been suspended or revoked ?
                    </div>
                    <div
                      role="group"
                      aria-labelledby="licenseSuspension"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="licenseSuspension"
                          value="Yes"
                        />
                        Yes
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="licenseSuspension"
                          value="No"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>If yes state the reason</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="licenseSuspensionReason"
                      placeholder="State the reason"
                    />
                  </div>
                </div>

                <button
                  className={styles.buttonMed}
                  style={{
                    width: "15rem",
                    padding: "10px 35px",
                    position: "absolute",
                    right: "0rem",
                    bottom: "-6rem",
                  }}
                  type="submit"
                >
                  Continue to Next Page
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LineHaulDriver;
