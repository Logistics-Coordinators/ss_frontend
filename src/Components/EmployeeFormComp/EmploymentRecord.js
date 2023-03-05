import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form } from "formik";

import styles from "./FormComp.module.css";
import Loader from "../../Assets/LoadingAnimation.gif";

import {
  EmploymentCard,
  InputEmploymentHistory,
} from "./Fragments/EmpHistory.js";

function EmploymentRecord() {
  const [showInputEmploymentHistory, setShowInputEmploymentHistory] =
    useState(true);

  const [empHistory, setEmpHistory] = useState([]);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  const [savedData, setSavedData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const resetEmpForm = (values) => {
    values.empName = "";
    values.positionHeld = "";
    values.startDate = "";
    values.endDate = "";
    values.workCity = "";
    values.postalCode = "";
    values.wage = "";
    values.contactPersonName = "";
    values.contactPersonNumber = "";
    values.reasonForLeaving = "";
    values.subjectToFMCSR = "";
    values.safeSensitiveFunction = "";

    setShowInputEmploymentHistory(false);
  };

  function handleEmpFormDone(values) {
    // Edu form validation goes here

    // console.log(eduForm);
    setEmpHistory((prev) => [
      ...prev,
      {
        employer_name: values.empName,
        position_held: values.positionHeld,
        start_date: values.startDate,
        end_date: values.endDate,
        work_city: values.workCity,
        postal_code: values.postalCode,
        wage: values.wage,
        contact_person_name: values.contactPersonName,
        contact_person_number: values.contactPersonNumber,
        reason_for_leaving: values.reasonForLeaving,
        subject_to_FMCSR: values.subjectToFMCSR,
        safe_sensitive_function: values.safeSensitiveFunction,
      },
    ]);
    resetEmpForm(values);
  }

  // Function to handle Education Entry delete
  function handleEmpEntryDelete(id) {
    empHistory.length === 1
      ? alert("Must have atleast one Employment Entry!!")
      : setEmpHistory((current) =>
          current.filter((ele, index) => index !== id)
        );
  }

  // Function to Cancel filled education form
  function handleEmpFormCancel(values) {
    empHistory.length === 0
      ? alert("Must have atleast one Employment Entry!!")
      : resetEmpForm(values);
  }

  let application_id,
    data = {};

  application_id = localStorage.getItem("application_id");

  useEffect(() => {
    if (application_id) {
      setIsLoading(true);

      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/empRecord?application_id=${application_id}`
        )
        .then((res) => {
          const { employment_record } = res.data.result;

          setEmpHistory(employment_record);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, []);

  // Final Form Submit Handler Function
  const handleEmploymentRecordSubmit = (val, actions) => {
    const body = {
      email: localStorage.getItem("email"),
      employment_record: empHistory,
      application_id: localStorage.getItem("application_id"),
    };

    setIsLoading(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}api/v1/SS/empRecord`, body)
      .then((res) => {
        console.log(application_id);
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
        initialValues={{
          empName: "",
          positionHeld: "",
          startDate: "",
          endDate: "",
          workCity: "",
          postalCode: "",
          wage: "",
          contactPersonName: "",
          contactPersonNumber: "",
          reasonForLeaving: "",
          subjectToFMCSR: "",
          safeSensitiveFunction: "",
        }}
        onSubmit={(val, actions) => handleEmploymentRecordSubmit(val, actions)}
      >
        {({ values }) => (
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
