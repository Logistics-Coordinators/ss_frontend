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
        initialValues={{
          socialInsuranceNumber: "",
          altNumber: "",
          emergencyContactName: "",
          emergencyContactNumber: "",
          emergencyContactRelationship: "",
          refferedPersonName1: "",
          refferedPersonContact1: "",
          refferedPersonName2: "",
          refferedPersonContact2: "",
          refferedPersonName3: "",
          refferedPersonContact3: "",
          pay: "",
          legalRightToWorkInCanada: "",
          accidentRecord1: "",
          accidentRecord2: "",
          accidentRecord3: "",
          prevBondingCompanyName: "",
          convictedFelony: "",
          convictedFelonyReason: "",
          unabletoPeform: "",
          unabletoPeformReason: "",
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
                  // border: "2px solid black",
                  maxHeight: "65vh",
                  overflowY: "scroll",
                }}
              >
                {/* Left Section */}
                <div className={styles.generalLeft}>
                  <div className={styles.container}>
                    <div className={styles.label}>Social Insurance Number</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="socialInsuranceNumber"
                      placeholder="Your Insurance number"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Alternate number</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="altNumber"
                      placeholder="Your alternate number"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person name
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="emergencyContactName"
                      placeholder="Name of Emergency Contact person "
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person number
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="emergencyContactNumber"
                      placeholder="Number of emergency contact person "
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>
                      Emergency contact person relationship
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="emergencyContactRelationship"
                      placeholder="Relationships with the emergency contact person"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 1</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonName1"
                      placeholder="Specify name"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 1 Email</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonContact1"
                      placeholder="Specify Email"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 2</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonName2"
                      placeholder="Specify name"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 2 Email</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonContact2"
                      placeholder="Specify Email"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 3</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonName3"
                      placeholder="Specify name"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Referral 3 Email</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="refferedPersonContact3"
                      placeholder="Specify Email"
                    />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.label}>Rate of pay</div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="pay"
                      placeholder="Enter your pay"
                    />
                  </div>

                  <div className={styles.containerSelect}>
                    <div
                      className={styles.labelSelect}
                      id="legalRightToWorkInCanada"
                    >
                      Do you have the legal right to work in Canada
                    </div>
                    <div
                      role="group"
                      aria-labelledby="legalRightToWorkInCanada"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="legalRightToWorkInCanada"
                          value="Yes"
                        />
                        Yes
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="legalRightToWorkInCanada"
                          value="No"
                        />
                        No
                      </label>
                    </div>
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
                      name="accidentRecord1"
                      placeholder="1st year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="accidentRecord2"
                      placeholder="2nd Year"
                    />
                    <Field
                      className={styles.inputFieldLarge}
                      name="accidentRecord3"
                      placeholder="3rd Year"
                    />
                  </div>

                  <div className={styles.container}>
                    <div className={styles.label}>
                      Previous bonding company name
                    </div>
                    <Field
                      className={styles.inputFieldLarge}
                      name="prevBondingCompanyName"
                      placeholder="Name of your previous bonding company "
                    />
                  </div>

                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="convictedFelony">
                      Have you ever been convicted of a felony?
                    </div>
                    <div
                      role="group"
                      aria-labelledby="convictedFelony"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="convictedFelony"
                          value="Yes"
                        />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" name="convictedFelony" value="No" />
                        No
                      </label>
                    </div>
                  </div>

                  {values.convictedFelony === "Yes" ? (
                    <div className={styles.container}>
                      <Field
                        className={styles.inputFieldLarge}
                        name="convictedFelonyReason"
                        placeholder="State the Reasons"
                      />
                    </div>
                  ) : null}

                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="unabletoPeform">
                      Is there any reason you might be unable to perform your
                      job (If yes please be specific)
                    </div>
                    <div
                      role="group"
                      aria-labelledby="unabletoPeform"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field type="radio" name="unabletoPeform" value="Yes" />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" name="unabletoPeform" value="No" />
                        No
                      </label>
                    </div>
                  </div>

                  {values.unabletoPeform === "Yes" ? (
                    <div className={styles.container}>
                      <Field
                        className={styles.inputFieldLarge}
                        name="unabletoPeformReason"
                        placeholder="State the Reasons"
                      />
                    </div>
                  ) : null}
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
