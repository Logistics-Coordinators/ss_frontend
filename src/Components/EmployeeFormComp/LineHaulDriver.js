import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

import axios from "axios";
import styles from "./FormComp.module.css";
import Loader from "../../Assets/LoadingAnimation.gif";

function LineHaulDriver() {
  let application_id,
    data = {};

  const [savedData, setSavedData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  application_id = localStorage.getItem("application_id");
  useEffect(() => {
    if (application_id) {
      setIsLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/driverInfo?application_id=${application_id}`
        )
        .then((res) => {
          console.log(res);
          const {
            social_insurance_number,
            alt_number,
            emergency_contact_name,
            emergency_contact_number,
            emergency_contact_relationship,
            reffered_person_name_1,
            reffered_person_email_1,
            reffered_person_name_2,
            reffered_person_email_2,
            reffered_person_name_3,
            reffered_person_email_3,
            pay,
            legal_right_to_work_in_canada,
            accident_record1,
            accident_record2,
            accident_record3,
            prev_bonding_company_name,
            convicted_felony,
            convicted_felony_reason,
            unable_to_peform,
            unable_to_peform_reason,
          } = res.data.result;

          data = {
            socialInsuranceNumber: social_insurance_number,
            altNumber: alt_number,
            emergencyContactName: emergency_contact_name,
            emergencyContactNumber: emergency_contact_number,
            emergencyContactRelationship: emergency_contact_relationship,
            refferedPersonName1: reffered_person_name_1,
            refferedPersonContact1: reffered_person_email_1,
            refferedPersonName2: reffered_person_name_2,
            refferedPersonContact2: reffered_person_email_2,
            refferedPersonName3: reffered_person_name_3,
            refferedPersonContact3: reffered_person_email_3,
            pay: pay,
            legalRightToWorkInCanada: legal_right_to_work_in_canada,
            accidentRecord1: accident_record1,
            accidentRecord2: accident_record2,
            accidentRecord3: accident_record3,
            prevBondingCompanyName: prev_bonding_company_name,
            convictedFelony: convicted_felony,
            convictedFelonyReason: convicted_felony_reason,
            unabletoPeform: unable_to_peform,
            unabletoPeformReason: unable_to_peform_reason,
          };

          setSavedData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, []);

  const handleLineHaulSubmit = (val, actions) => {
    const body = {
      email: localStorage.getItem("email"),
      social_insurance_number: val.socialInsuranceNumber,
      alt_number: val.altNumber,
      emergency_contact_name: val.emergencyContactName,
      emergency_contact_number: val.emergencyContactNumber,
      emergency_contact_relationship: val.emergencyContactRelationship,
      reffered_person_name_1: val.refferedPersonName1,
      reffered_person_email_1: val.refferedPersonContact1,
      reffered_person_name_2: val.refferedPersonName2,
      reffered_person_email_2: val.refferedPersonContact2,
      reffered_person_name_3: val.refferedPersonName3,
      reffered_person_email_3: val.refferedPersonContact3,
      pay: val.pay,
      legal_right_to_work_in_canada: val.legalRightToWorkInCanada,
      accident_record1: val.accidentRecord1,
      accident_record2: val.accidentRecord2,
      accident_record3: val.accidentRecord3,
      prev_bonding_company_name: val.prevBondingCompanyName,
      convicted_felony: val.convictedFelony,
      convicted_felony_reason: val.convictedFelonyReason,
      unable_to_peform: val.unabletoPeform,
      unable_to_peform_reason: val.unabletoPeformReason,
      application_id: localStorage.getItem("application_id"),
    };

    setIsLoading(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}api/v1/SS/driverInfo`, body)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        // if (!application_id) {
        //   localStorage.setItem("application_id", res.data.application_id);
        // }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={
          savedData || {
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
          }
        }
        onSubmit={(val, actions) => handleLineHaulSubmit(val, actions)}
      >
        {({
          //   isSubmitting,
          values,
        }) => (
          <Form>
            <div style={{ position: "relative" }}>
              {isLoading ? (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "fit-content",
                    zIndex: 3,
                  }}
                >
                  <img src={Loader} alt="loader" style={{}} />
                </div>
              ) : null}
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
