import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { dateFormatter } from "../../utils/common.js";

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
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  const [savedData, setSavedData] = useState();

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
        edu_year: values.eduYear,
        edu_level: values.eduLevel,
        edu_instution: values.eduInstitution,
        edu_location: values.eduLocation,
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

  let application_id,
    data = {};

  useEffect(() => {
    const email = localStorage.getItem("email");

    console.log(email);
    if (email) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/generalInfo?email=${email}`
        )
        .then((res) => {
          localStorage.setItem("application_id", res.data.application_id);
          console.log(res.data.application_id);
          application_id = res.data.application_id;
          console.log("Id", application_id);
        })
        .catch((err) => console.log(err));
    }

    if (application_id) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/generalInfo?application_id=${application_id}`
        )
        .then((res) => {
          const {
            position,
            application_date,
            first_name,
            last_name,
            email,
            address1,
            address2,
            city,
            zip,
            phone,
            date_of_birth,
            employment_avail,
            total_miles,
            major_city,
            bond_refusal,
            cross_borders,
            ban,
            ban_company,
            education,
          } = res.data.result;

          data = {
            position: position,
            applicationDate: application_date,
            firstName: first_name,
            lastName: last_name,
            email: email,
            address1: address1,
            address2: address2,
            city: city,
            zip: zip,
            phone: phone,
            dateOfBirth: date_of_birth,
            empDate: employment_avail,
            totalMiles: total_miles,
            majorCity: major_city,
            bondRefusal: bond_refusal,
            crossBorders: cross_borders,
            ban: ban,
            banCompany: ban_company,
          };

          setSavedData(data);
          setEduHistory(education);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // Final Form Submit Handler Function
  const handleGeneralInfoSubmit = (val, actions) => {
    const body = {
      position: val.position,
      application_date: val.applicationDate,
      first_name: val.firstName,
      last_name: val.lastName,
      email: userEmail,
      address1: val.address1,
      address2: val.address2,
      city: val.city,
      zip: val.zip,
      phone: val.phone,
      date_of_birth: val.dateOfBirth,
      employment_avail: val.empDate,
      total_miles: val.totalMiles,
      major_city: val.majorCity,
      bond_refusal: val.bondRefusal,
      cross_borders: val.crossBorders,
      ban: val.ban,
      ban_company: val.banCompany,
      education: eduHistory,
      application_id: localStorage.getItem("application_id"),
    };

    console.log(body);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}api/v1/SS/generalInfo`, body)
      .then((res) => {
        console.log(application_id);
        // if (!application_id) {
        //   localStorage.setItem("application_id", res.data.application_id);
        // }
      })
      .catch((err) => console.log(err));
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
        enableReinitialize
        initialValues={
          savedData || {
            position: "",
            applicationDate: "",
            firstName: "",
            lastName: "",
            email: userEmail,
            address1: "",
            address2: "",
            city: "",
            zip: "",
            phone: "",
            dateOfBirth: "",
            empDate: "",
            totalMiles: "",
            majorCity: "",
            bondRefusal: "",
            crossBorders: "",
            ban: "",
            banCompany: "",
            eduYear: "",
            eduLevel: "",
            eduInstitution: "",
            eduLocation: "",
          }
        }
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
                          disabled={true}
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
                        <div className={styles.label}>Date of Birth</div>
                        <Field
                          className={styles.inputFieldLarge}
                          name="dateOfBirth"
                          type="date"
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
                        <div className={styles.labelSelect} id="ban">
                          Have you ever been banned by any Companies?
                        </div>
                        <div
                          role="group"
                          aria-labelledby="ban"
                          className={styles.radioContainer}
                        >
                          <label>
                            <Field type="radio" name="ban" value="Yes" />
                            Yes
                          </label>
                          <label>
                            <Field type="radio" name="ban" value="No" />
                            No
                          </label>
                        </div>
                      </div>

                      {values.ban === "Yes" ? (
                        <div className={styles.container}>
                          <div className={styles.label}>
                            Please specify company name.
                          </div>
                          <Field
                            className={styles.inputFieldLarge}
                            name="banCompany"
                            placeholder="Company Name"
                          />
                        </div>
                      ) : null}

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
                <div
                  style={{
                    position: "relative",
                  }}
                >
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
                        eduHistory.length === 2
                          ? alert(
                              "Only Two education Entries Required. You can Proceed"
                            )
                          : setShowInputEducationHistory(true);
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
