import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import styles from "./FormComp.module.css";
import {
  EducationCard,
  InputEducationHistory,
} from "./Fragments/EduHistory.js";

function GeneralInfo() {
  const [showInputEducationHistory, setShowInputEducationHistory] =
    useState(false);

  const [eduHistory, setEduHistory] = useState([]);
  const [showSectionOne, setShowSectionOne] = useState(true);

  // Button States
  // const [isNextContinueDisabled, setIsNextContinueDisabled] = useState(true);

  // Function to Submit filled education form

  const resetEduForm = (values) => {
    values.eduYear = "";
    values.eduLevel = "";
    values.eduInstitution = "";
    values.eduLocation = "";

    setShowInputEducationHistory(false);
  };

  function handleEduFormDone(values) {
    // Edu form validation goes here

    // console.log(eduForm);
    setEduHistory((prev) => [
      ...prev,
      {
        education: values.eduYear,
        levelCompleted: values.eduLevel,
        institutionName: values.eduInstitution,
        location: values.eduLocation,
      },
    ]);
    resetEduForm(values);
  }

  // Function to Cancel filled education form
  function handleEduFormCancel(values) {
    eduHistory.length === 0
      ? alert("Must have atleast one Education Entry!!")
      : resetEduForm(values);
  }

  // Function to handle Education Entry delete
  function handleEduEntryDelete(id) {
    eduHistory.length === 1
      ? alert("Must have atleast one Education Entry!!")
      : setEduHistory((current) =>
          current.filter((ele, index) => index !== id)
        );
  }

  // Final Form Submit Handler Function
  const handleGeneralInfoSubmit = (val, actions) => {
    console.log(val);
  };

  const handleNextClick = (e) => {
    e.preventDefault();

    eduHistory.length !== 0
      ? setShowInputEducationHistory(false)
      : setShowInputEducationHistory(true);

    setShowSectionOne(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          position: "",
          applicationDate: "",
          firstName: "",
          lastName: "",
          email: "",
          address1: "",
          address2: "",
          city: "",
          zip: "",
          phone: "",
          azDuration: "",
          azDurationON: "",
          empDate: "",
          totalMiles: "",
          majorCity: "",
          bondRefusal: "",
          crossBorders: "",
          domtarBan: "",
          eduYear: "",
          eduLevel: "",
          eduInstitution: "",
          eduLocation: "",
        }}
        onSubmit={(val, actions) => handleGeneralInfoSubmit(val, actions)}
      >
        {({
          //   isSubmitting,
          values,
        }) => (
          <Form>
            <div>
              {showSectionOne ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "2rem",
                    }}
                  >
                    {/* Left Section */}
                    <div className={styles.generalLeft}>
                      <div className={styles.container}>
                        <div className={styles.label}>Applied For</div>
                        <Field
                          className={styles.inputFieldSmall}
                          name="position"
                          placeholder="position"
                        />
                      </div>

                      <div className={styles.container}>
                        <div className={styles.label}>Application Date</div>
                        <Field
                          className={styles.inputFieldSmall}
                          type="date"
                          name="applicationDate"
                          placeholder="Date"
                        />
                      </div>

                      <div className={styles.container}>
                        <div className={styles.label}>Name</div>
                        <Field
                          className={styles.inputFieldSmall}
                          name="firstName"
                          placeholder="First Name"
                        />
                        <Field
                          className={styles.inputFieldSmall}
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className={styles.container}>
                        <div className={styles.label}>Email</div>
                        <Field
                          className={styles.inputFieldLarge}
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className={styles.container}>
                        <div className={styles.label}>Address</div>
                        <Field
                          className={styles.inputFieldLarge}
                          name="address1"
                          placeholder="Address Line 1"
                        />
                        <Field
                          className={styles.inputFieldLarge}
                          name="address2"
                          placeholder="Address Line 2"
                        />
                        <Field
                          className={styles.inputFieldLarge}
                          name="city"
                          placeholder="City"
                        />
                        <Field
                          className={styles.inputFieldLarge}
                          name="zip"
                          placeholder="Zip"
                        />
                      </div>

                      <div className={styles.container}>
                        <div className={styles.label}>Phone</div>
                        <Field
                          className={styles.inputFieldLarge}
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    {/* Right Section */}
                    <div
                      style={{ position: "relative" }}
                      className={styles.generalRight}
                    >
                      <div className={styles.container}>
                        <div className={styles.label}>
                          How long have you held a AZ license
                        </div>
                        <Field
                          className={styles.inputFieldLarge}
                          name="azDuration"
                          placeholder="Duration"
                        />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.label}>
                          How long have you held a AZ license in ON
                        </div>
                        <Field
                          className={styles.inputFieldLarge}
                          name="azDurationON"
                          placeholder="Duration"
                        />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.label}>
                          Date available for employment
                        </div>
                        <Field
                          className={styles.inputFieldLarge}
                          name="empDate"
                          type="date"
                        />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.label}>Total Miles driven</div>
                        <Field
                          className={styles.inputFieldSmall}
                          name="totalMiles"
                          placeholder="Distance"
                        />
                      </div>
                      <div className={styles.container}>
                        <div className={styles.label}>Major City Miles</div>
                        <Field
                          className={styles.inputFieldSmall}
                          name="majorCity"
                          placeholder="City"
                        />
                      </div>

                      <div className={styles.containerSelect}>
                        <div className={styles.labelSelect} id="bondRefusal">
                          Have you ever refused bond?
                        </div>
                        <div
                          role="group"
                          aria-labelledby="bondRefusal"
                          className={styles.radioContainer}
                        >
                          <label>
                            <Field
                              type="radio"
                              name="bondRefusal"
                              value="Yes"
                            />
                            Yes
                          </label>
                          <label>
                            <Field type="radio" name="bondRefusal" value="No" />
                            No
                          </label>
                        </div>
                      </div>

                      <div className={styles.containerSelect}>
                        <div className={styles.labelSelect} id="crossBorders">
                          Are you eligible to cross borders?
                        </div>
                        <div
                          role="group"
                          aria-labelledby="crossBorders"
                          className={styles.radioContainer}
                        >
                          <label>
                            <Field
                              type="radio"
                              name="crossBorders"
                              value="Yes"
                            />
                            Yes
                          </label>
                          <label>
                            <Field
                              type="radio"
                              name="crossBorders"
                              value="No"
                            />
                            No
                          </label>
                        </div>
                      </div>

                      <div className={styles.containerSelect}>
                        <div className={styles.labelSelect} id="domtarBan">
                          Have you ever been banned by Domtar Companies?
                        </div>
                        <div
                          role="group"
                          aria-labelledby="domtarBan"
                          className={styles.radioContainer}
                        >
                          <label>
                            <Field type="radio" name="domtarBan" value="Yes" />
                            Yes
                          </label>
                          <label>
                            <Field type="radio" name="domtarBan" value="No" />
                            No
                          </label>
                        </div>
                      </div>

                      {/* Next Section Moving Button */}
                      <button
                        className={styles.buttonMed}
                        style={{
                          position: "absolute",
                          bottom: "-2rem",
                          right: "2rem",
                        }}
                        type="button"
                        onClick={(e) => handleNextClick(e)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ position: "relative" }}>
                  <button
                    className={styles.buttonMed}
                    style={{
                      width: "5rem",
                      padding: "6px 25px",
                      marginBottom: "1rem",
                    }}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSectionOne(true);
                    }}
                  >
                    Back
                  </button>

                  {/* Education History Section */}
                  <div style={{ position: "relative" }}>
                    {eduHistory.map((edu, index) => (
                      <EducationCard
                        edu={edu}
                        key={index}
                        id={index}
                        handleEduEntryDelete={handleEduEntryDelete}
                        existingCount={eduHistory.length}
                      />
                    ))}
                    <div
                      style={
                        {
                          // border: "2px solid red",
                        }
                      }
                    >
                      {showInputEducationHistory ? (
                        <InputEducationHistory
                          existingCount={eduHistory.length}
                          handleEduFormDone={handleEduFormDone}
                          handleEduFormCancel={handleEduFormCancel}
                          values={values}
                        />
                      ) : null}
                    </div>

                    <button
                      className={styles.buttonMed}
                      style={{
                        width: "8rem",
                        padding: "10px 35px",
                        position: "absolute",
                        right: 0,
                      }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowInputEducationHistory(true);
                      }}
                      disabled={showInputEducationHistory ? true : false}
                    >
                      Add +
                    </button>
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
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GeneralInfo;
