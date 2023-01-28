import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./FormComp.module.css";
import HoursTable from "./Fragments/HoursTable";

function onDutyHours() {
  return (
    <div>
      <Formik
        initialValues={{
          socialSecurityNumber: "",
          licenseNumber: "",
          state: "",
          class: "",
          endorsment: "",
          restriction: "",
          lastRelievedDate: "",
          lastRelievedTime: "",
          typeOfLicense: "",
          issuingState: "",
          anotherEmployer: "",
          intendToWorkForanotherEmployer: "",
        }}
        onSubmit={(val, actions) => console.log(val)}
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
                <div className={styles.container}>
                  <div className={styles.label}>Social Security Number</div>
                  <Field
                    className={styles.inputFieldLarge}
                    name="socialSecurityNumber"
                    placeholder="Social Security Number"
                  />
                </div>

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
                    name="class"
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
                <HoursTable />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default onDutyHours;
