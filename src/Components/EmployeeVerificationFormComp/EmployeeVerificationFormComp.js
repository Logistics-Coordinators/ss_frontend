import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./FormComp.module.css";

function EmployeeVerificationFormComp() {
  return (
    <div>
      <Formik initialValues={{}}>
        {({
          //   isSubmitting,
          values,
        }) => (
          <Form>
            <div
              style={{
                margin: "2rem 0rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={styles.headingText}>
                Employment Verification Form
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
              }}
            >
              <div className={styles.generalLeft}>
                <div className={styles.container}>
                  <div className={styles.label}>Driver Name</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="driverName"
                    placeholder="Enter Driver Name"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>License number</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="licenseNumber"
                    placeholder="Enter License Number"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Preceptive employer</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="preceptiveEmployer"
                    placeholder="Enter Preceptive employer name"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Previous employer</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="previousEmployer"
                    placeholder="Enter Previous employer name"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Attention person’s name</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="previousEmployer"
                    placeholder="Enter Previous employer name"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Phone number</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="phoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Fax</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="fax"
                    placeholder="Enter the Fax Number"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>Email ID</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="email"
                    placeholder="Enter the Email Id"
                  />
                </div>

                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="infoSupplied">
                    Information supplied by "(Gurwinder Singh)"
                  </div>
                  <div
                    role="group"
                    aria-labelledby="infoSupplied"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field type="radio" name="infoSupplied" value="Yes" />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="infoSupplied" value="No" />
                      No
                    </label>
                  </div>
                </div>

                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="applicantEmployed">
                    The applicant named above was employed by us
                  </div>
                  <div
                    role="group"
                    aria-labelledby="applicantEmployed"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="applicantEmployed"
                        value="Yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="applicantEmployed" value="No" />
                      No
                    </label>
                  </div>
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Employed As</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="employedAs"
                    placeholder="Ex. Driver"
                  />
                </div>

                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="stillEmployed">
                    Still working ?
                  </div>
                  <div
                    role="group"
                    aria-labelledby="stillEmployed"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field type="radio" name="stillEmployed" value="Yes" />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="stillEmployed" value="No" />
                      No
                    </label>
                  </div>
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Start date</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="startDate"
                    type="date"
                    placeholder=""
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.label}>End date</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="startDate"
                    type="date"
                    placeholder=""
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Position</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="position"
                    placeholder="Enter your position"
                  />
                </div>

                <div className={styles.container}>
                  <div className={styles.label}>Reason for Termination</div>
                  <Field
                    className={styles.inputFieldSmall}
                    name="reasonForTermination"
                    placeholder="State the reasons"
                  />
                </div>

                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="reHired">
                    Would you Rehired
                  </div>
                  <div
                    role="group"
                    aria-labelledby="reHired"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field type="radio" name="reHired" value="Yes" />
                      Yes
                    </label>
                    <label>
                      <Field type="radio" name="reHired" value="No" />
                      No
                    </label>
                    <label>
                      <Field type="radio" name="reHired" value="UponReview" />
                      Upon Review
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="reHired"
                        value="NoCompanyPolicy"
                      />
                      No - Company Policy
                    </label>
                  </div>
                </div>

                <div className={styles.containerSelect}>
                  <div
                    className={styles.labelSelect}
                    id="additionalEmploymentOrContract"
                  >
                    Do you need to add additional Employment / Contracted dates
                    ?
                  </div>
                  <div
                    role="group"
                    aria-labelledby="additionalEmploymentOrContract"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="additionalEmploymentOrContract"
                        value="Yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="additionalEmploymentOrContract"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="applicantDriveMotor">
                    Did the applicant drive motor vehicle for you
                  </div>
                  <div
                    role="group"
                    aria-labelledby="applicantDriveMotor"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="applicantDriveMotor"
                        value="Yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="applicantDriveMotor"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmployeeVerificationFormComp;
