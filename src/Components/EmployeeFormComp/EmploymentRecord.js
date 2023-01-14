import React, { useState } from "react";
import { Formik, Form } from "formik";

import styles from "./FormComp.module.css";

import {
  EmploymentCard,
  InputEmploymentHistory,
} from "./Fragments/EmpHistory.js";

function EmploymentRecord() {
  const [showInputEmploymentHistory, setShowInputEmploymentHistory] =
    useState(true);

  const [empHistory, setEmpHistory] = useState([]);

  const resetEmpForm = (values) => {
    values.currAddress = "";
    values.dateOfBirth = "";
    values.azDuration = "";

    setShowInputEmploymentHistory(false);
  };

  function handleEmpFormDone(values) {
    // Edu form validation goes here

    // console.log(eduForm);
    setEmpHistory((prev) => [
      ...prev,
      {
        currAddress: values.currAddress,
        dateOfBirth: values.dateOfBirth,
        azDuration: values.azDuration,
      },
    ]);
    resetEmpForm(values);
  }

  // Function to handle Education Entry delete
  function handleEmpEntryDelete(id) {
    empHistory.length === 1
      ? alert("Must have atleast one Employment Entry!!")
      : setEmpHistory((current) => current.filter((ele, index) => index !== id));
  }

  // Function to Cancel filled education form
  function handleEmpFormCancel(values) {
    empHistory.length === 0
      ? alert("Must have atleast one Employment Entry!!")
      : resetEmpForm(values);
  }

  // Final Form Submit Handler Function
  const handleEmploymentRecordSubmit = (val, actions) => {
    console.log(val);
  };

  return (
    <div>
      <Formik
        initialValues={{
          currAddress: "",
          dateOfBirth: "",
          azDuration: "",
        }}
        onSubmit={(val, actions) => handleEmploymentRecordSubmit(val, actions)}
      >
        {({ values }) => (
          <Form>
            <div style={{ position: "relative" }}>
              {/* Education History Section */}
              <div style={{ position: "relative" }}>
                {empHistory.map((emp, index) => (
                  <EmploymentCard
                    emp={emp}
                    key={index}
                    id={index}
                    handleEmpEntryDelete={handleEmpEntryDelete}
                    existingCount={empHistory.length}
                  />
                ))}
                <div
                  style={
                    {
                      // border: "2px solid red",
                    }
                  }
                >
                  {showInputEmploymentHistory ? (
                    <InputEmploymentHistory
                      existingCount={empHistory.length}
                      handleEmpFormDone={handleEmpFormDone}
                      handleEmpFormCancel={handleEmpFormCancel}
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
                    setShowInputEmploymentHistory(true);
                  }}
                  disabled={showInputEmploymentHistory ? true : false}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmploymentRecord;
