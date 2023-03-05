import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./FormComp.module.css";
import HoursTable from "./Fragments/HoursTable";

import axios from "axios";
import Loader from "../../Assets/LoadingAnimation.gif";

function OnDutyHours() {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  const [savedData, setSavedData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [dateHours, setDateHours] = useState([]);

  let application_id,
    data = {};

  application_id = localStorage.getItem("application_id");

  useEffect(() => {
    if (application_id) {
      setIsLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/onDutyHours?application_id=${application_id}`
        )
        .then((res) => {
          const {
            license_number,
            state,
            classes,
            endorsment,
            restriction,
            last_relieved_date,
            last_relieved_time,
            type_of_license,
            issuing_state,
            another_employer,
            intend_to_work_for_another_employer,
            day_date_hours_table,
          } = res.data.result;

          data = {
            licenseNumber: license_number,
            state: state,
            classes: classes,
            endorsment: endorsment,
            restriction: restriction,
            lastRelievedDate: last_relieved_date,
            lastRelievedTime: last_relieved_time,
            typeOfLicense: type_of_license,
            issuingState: issuing_state,
            anotherEmployer: another_employer,
            intendToWorkForanotherEmployer: intend_to_work_for_another_employer,
          };

          setSavedData(data);
          setDateHours(day_date_hours_table);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, []);

  const handleOnDutyHoursSubmit = (val, actions) => {
    const body = {
      email: localStorage.getItem("email"),
      application_id: localStorage.getItem("application_id"),
      license_number: val.licenseNumber,
      state: val.state,
      classes: val.classes,
      endorsment: val.endorsment,
      restriction: val.restriction,
      last_relieved_date: val.lastRelievedDate,
      last_relieved_time: val.lastRelievedTime,
      type_of_license: val.typeOfLicense,
      issuing_state: val.issuingState,
      another_employer: val.anotherEmployer,
      intend_to_work_for_another_employer: val.intendToWorkForanotherEmployer,
      day_date_hours_table: val.dayDateHoursTable,
    };

    setIsLoading(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}api/v1/SS/onDutyHours`, body)
      .then((res) => {
        console.log(application_id);
        setIsLoading(false);
        // if (!application_id) {
        //   localStorage.setItem("application_id", res.data.application_id);
        // }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={
          savedData || {
            licenseNumber: "",
            state: "",
            classes: "",
            endorsment: "",
            restriction: "",
            lastRelievedDate: "",
            lastRelievedTime: "",
            typeOfLicense: "",
            issuingState: "",
            anotherEmployer: "",
            intendToWorkForanotherEmployer: "",
            dayDateHoursTable: [],
          }
        }
        onSubmit={(val, actions) => handleOnDutyHoursSubmit(val, actions)}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
              }}
            >
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
              <div className={styles.generalLeft}>
                <div className={styles.container}>
                  <div className={styles.label}>Driver’s License Number</div>
                  <Field
                    className={styles.inputFieldLarge}
                    name="licenseNumber"
                    placeholder="License Number"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>State</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="state"
                    placeholder="State"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Class</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="classes"
                    placeholder="Class"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Endorsment</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="endorsment"
                    placeholder="Endorsment"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Restriction</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="restriction"
                    placeholder="Restriction"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Last Relieved from work</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="lastRelievedDate"
                    type="date"
                    placeholder="Last Relieved from work"
                  />
                  <Field
                    className={styles.inputFieldSmall}
                    name="lastRelievedTime"
                    type="time"
                    placeholder="Last Relieved from work"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Type of License</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="typeOfLicense"
                    placeholder="Type of License"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Issuing state</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="issuingState"
                    placeholder="Issuing state"
                  />
                </div>

                <div
                  className={styles.containerSelect}
                  style={{ margin: "1rem 0" }}
                >
                  <div className={styles.labelSelect} id="anotherEmployer">
                    Are you currently working for another employer?
                  </div>
                  <div
                    role="group"
                    aria-labelledby="anotherEmployer"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field type="radio" name="anotherEmployer" value="Yes" />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="anotherEmployer" value="No" />
                      No
                    </label>
                  </div>
                </div>

                <div
                  className={styles.containerSelect}
                  style={{ margin: "1rem 0" }}
                >
                  <div
                    className={styles.labelSelect}
                    id="intendToWorkForanotherEmployer"
                  >
                    At this time do you intend to work for another employer
                    while still employed by this company?
                  </div>
                  <div
                    role="group"
                    aria-labelledby="intendToWorkForanotherEmployer"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="intendToWorkForanotherEmployer"
                        value="Yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="intendToWorkForanotherEmployer"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.generalRight}>
                <HoursTable
                  dateHours={dateHours}
                  setDateHours={setDateHours}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>
            <button
              className={styles.buttonMed}
              style={{
                width: "15rem",
                padding: "10px 35px",
              }}
              type="submit"
            >
              Continue to Next Page
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OnDutyHours;
