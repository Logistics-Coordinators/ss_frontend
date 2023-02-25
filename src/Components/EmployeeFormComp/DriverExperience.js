import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./FormComp.module.css";
import axios from "axios";

import {
  QualificationCard,
  InputQualificationHistory,
} from "./Fragments/Qualification.js";

function DriverExperience() {
  const [qualificationHistory, setQualificationHistory] = useState([]);
  const [showInputQualificationHistory, setShowInputQualificationHistory] =
    useState(true);

  const resetQlyForm = (values) => {
    values.instituteName = "";
    values.instituteLocation = "";
    values.duration = "";
    values.skills = "";
    values.courses = "";

    setShowInputQualificationHistory(false);
  };

  function handleQlyFormDone(values) {
    // Edu form validation goes here

    // console.log(eduForm);
    setQualificationHistory((prev) => [
      ...prev,
      {
        instituteName: values.instituteName,
        instituteLocation: values.instituteLocation,
        duration: values.duration,
        skills: values.skills,
        courses: values.courses,
      },
    ]);
    resetQlyForm(values);
  }

  function handleQlyFormCancel(values) {
    qualificationHistory.length === 0
      ? alert("Must have atleast one Qualification Entry!!")
      : resetQlyForm(values);
  }

  function handleQlyEntryDelete(id) {
    qualificationHistory.length === 1
      ? alert("Must have atleast one Qualification Entry!!")
      : setQualificationHistory((current) =>
          current.filter((ele, index) => index !== id)
        );
  }

  function handleSubmit(val, actions) {
    console.log(val);
  }

  return (
    <div>
      <Formik
        initialValues={{
          driverExperience: "",
          fromDate: "",
          endDate: "",
          classOfEquipment: [],
          StraightTruckMiles: "",
          TractorAndSemiTrailorMiles: "",
          TractorAndTwoWheelerMiles: "",
          TractorAndThreeWheelerMiles: "",
          MotorCoachSchoolBusMiles: "",
          experienceAndQualification: "",
          statesOperated: "",
          typeOfEquipment: [],
          instituteName: "",
          instituteLocation: "",
          duration: "",
          skills: "",
          courses: "",
          entitledToWork: "",
        }}
        onSubmit={(val, actions) => handleSubmit(val, actions)}
      >
        {({ values }) => (
          <Form>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
              }}
            >
              <div className={styles.generalLeft}>
                <div className={styles.containerSelect}>
                  <div
                    className={styles.labelSelect}
                    style={{ color: "#E84B01", fontSize: "1.1rem" }}
                    id="driverExperience"
                  >
                    Driver Experience
                  </div>
                  <div
                    role="group"
                    aria-labelledby="driverExperience"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field type="radio" name="driverExperience" value="Yes" />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="driverExperience" value="No" />
                      No
                    </label>
                  </div>
                </div>

                {values.driverExperience === "Yes" ? (
                  <>
                    <div className={styles.container}>
                      <div className={styles.label}>Select the from date</div>
                      <Field
                        className={styles.inputFieldSmall}
                        type="date"
                        name="fromDate"
                        placeholder="Date"
                      />
                    </div>

                    <div className={styles.container}>
                      <div className={styles.label}>Select the end date</div>
                      <Field
                        className={styles.inputFieldSmall}
                        type="date"
                        name="fromDate"
                        placeholder="Date"
                      />
                    </div>

                    <div
                      className={styles.checkBoxContainer}
                      style={{ display: "flex", flexDirection: "column" }}
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <p className={styles.labelSelect}>
                        Select class of the equipment
                      </p>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="StraightTruck"
                        />
                        Straight truck
                      </label>
                      {values.classOfEquipment.includes("StraightTruck") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="StraightTruckMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorAndSemiTrailor"
                        />
                        Tractor and semi trailer
                      </label>
                      {values.classOfEquipment.includes(
                        "TractorAndSemiTrailor"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorAndSemiTrailor"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorAndTwoWheeler"
                        />
                        Tractor and two wheeler
                      </label>
                      {values.classOfEquipment.includes(
                        "TractorAndTwoWheeler"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorAndTwoWheeler"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorAndThreeWheeler"
                        />
                        Tractor and three wheeler
                      </label>
                      {values.classOfEquipment.includes(
                        "TractorAndThreeWheeler"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorAndThreeWheeler"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="MotorCoachSchoolBus"
                        />
                        Motor coach - School bus
                      </label>
                      {values.classOfEquipment.includes(
                        "MotorCoachSchoolBus"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="MotorCoachSchoolBus"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>

              <div className={styles.generalRight}>
                {values.driverExperience === "Yes" ? (
                  <>
                    <div
                      className={styles.checkBoxContainer}
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <p className={styles.labelSelect}>
                        Select Type of equipment
                      </p>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="typeOfEquipment"
                          value="Van"
                        />
                        Van
                      </label>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="typeOfEquipment"
                          value="Dump"
                        />
                        Dump
                      </label>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="typeOfEquipment"
                          value="Reefer"
                        />
                        Reefer
                      </label>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="typeOfEquipment"
                          value="Flat"
                        />
                        Flat
                      </label>
                    </div>

                    <div className={styles.container}>
                      <div className={styles.label}>
                        Specify the states you operated for past 5 years
                      </div>
                      <Field
                        className={styles.inputFieldSmall}
                        name="statesOperated"
                        placeholder="States"
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
              }}
            >
              <div className={styles.generalLeft}>
                <div
                  className={styles.containerSelect}
                  style={{ marginTop: "2rem" }}
                >
                  <div
                    className={styles.labelSelect}
                    style={{ color: "#E84B01", fontSize: "1.1rem" }}
                    id="experienceAndQualification"
                  >
                    Experience and Qualification
                  </div>
                  <div
                    role="group"
                    aria-labelledby="experienceAndQualification"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="experienceAndQualification"
                        value="Yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="experienceAndQualification"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>

                {values.experienceAndQualification === "Yes" ? (
                  <div style={{ position: "relative" }}>
                    <div>
                      {qualificationHistory.map((qly, index) => (
                        <QualificationCard
                          qly={qly}
                          key={index}
                          id={index}
                          handleQlyEntryDelete={handleQlyEntryDelete}
                          existingCount={qualificationHistory.length}
                        />
                      ))}
                    </div>
                    <div>
                      {showInputQualificationHistory ? (
                        <InputQualificationHistory
                          existingCount={qualificationHistory.length}
                          handleQlyFormDone={handleQlyFormDone}
                          handleQlyFormCancel={handleQlyFormCancel}
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
                        setShowInputQualificationHistory(true);
                      }}
                      disabled={showInputQualificationHistory ? true : false}
                    >
                      Add +
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div
              style={{ display: "flex", marginLeft: "2rem", marginTop: "3rem" }}
            >
              <div
                role="group"
                aria-labelledby="entitledToWork"
                // className={styles.radioContainer}
              >
                <Field type="radio" name="entitledToWork" value="Yes" />
              </div>
              <p className={styles.label}>
                I am legally entitled to work in Canada, Logistics Coordinators
                May verify my work record and qualifications. Any false or
                misleading statements made by me on this application shall be
                just cause for my dismissal, whenever such statements may be
                discovered. I may be required to pass a medical examination and
                drug test before I can be officially employed. This application
                was completed by me and is true and complete to the best of my
                knowledge.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DriverExperience;
