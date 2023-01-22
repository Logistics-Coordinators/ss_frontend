import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./FormComp.module.css";

function LineHaulDriver() {
  const handleLineHaulSubmit = (val, actions) => {
    console.log(val);
  };

  return (
    <div>
      <Formik
        initialValues={{}}
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
                    <div className={styles.label}>Social Insurance Number</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="time"
                      placeholder="Your Insurance number"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Alternative number</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="time"
                      placeholder="Your alternative number"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person name
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="azDuration"
                      placeholder="Number of Emergency person "
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person number
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="position"
                      placeholder="Number of Emergency person "
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person relationship
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="applicationDate"
                      placeholder="Relationships of the emergency person"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referred person name</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="azDurationON"
                      placeholder="Enter referred person name"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Rate of pay</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="accidentRecord1"
                      placeholder="Enter your pay"
                    />
                  </div>
                </div>

                {/* General Right */}
                <div className={styles.generalRight}>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      Accident record of past 3 years
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="addressLine1"
                      placeholder="1st year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      // name="addressLine2"
                      placeholder="2nd Year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      // name="city"
                      placeholder="3rd Year"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Previous bonding company name
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="accidentRecord1"
                      placeholder="Name of your previous bonding company "
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Have you ever convicted felony
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="accidentRecord1"
                      placeholder=""
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>If yes state the reason</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="licenseDenialReason"
                      placeholder="State the reason"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Is there any reason you might to unable to perform a job
                      (If yes please specific)
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="accidentRecord1"
                      placeholder=""
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>If yes state the reason</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="licenseDenialReason"
                      placeholder="State the reason"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>If yes state the reason</div>
                    <Field
                      className={styles.inputFieldLarge}
                      // name="licenseSuspensionReason"
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
