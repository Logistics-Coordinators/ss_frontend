import React from "react";
import { Field, Formik, Form } from "formik";
import styles from "./FormComp.module.css";

function TermsAndConditions() {
  return (
    <div>
      <Formik
        initialValues={{
          termsConsent: "",
        }}
        onSubmit={(val, actions) => console.log(val)}
      >
        {({ values }) => (
          <Form>
            <div>
              <p className={styles.headingText}>
                Please read below terms and acknowledgement
              </p>
              <p className={styles.headingText}>Driver Requriments</p>
              <div id="" className={styles.tAndCText}>
                MOTOR CARRIER INSTRUCTIONS: The requirements in Part 383 apply
                to every driver who operates in intrastate, interstate, or
                foreign commerce and operates a vehicle weighing 26,001 pounds
                or more, can transport more than 15 people, or transports
                hazardous materials that require placarding.
                <p>
                  The requirements in Part 391 apply to every driver who
                  operates in interstate commerce and operates a vehicle
                  weighing 10,001 pounds or more, can transport more than 15
                  people, or transports hazardous materials that require
                  placarding. DRIVER REQUIREMENTS: Parts 383 and 391 of the
                  Federal Motor Carrier Safety Regulations contain some
                  requirements that you as a driver must comply with. They are
                  as follows:
                </p>
                <p>
                  1) POSSESS ONLY ONELICENSE: You, as a commercial vehicle
                  driver, may not possess more than one motor vehicle operator's
                  license. *If you have more than one license, keep the license
                  from your state of residence and return the additional
                  licenses to the states that issued them. DESTROYING a license
                  does not close the record in the state that issued it; you
                  must notify the state. If a multiple license has been lost,
                  stolen, or destroyed, lose your record by notifying the state
                  of issuance that you no longer want to be licensed by that
                  state.
                </p>
                2) NOTIFICATION OF LICENSE 391.15(b) (2) and 383.33 of the
                Federal Motor Carrier Safety Regulations require that you notify
                your employer the NEXT BUSINESS DAY of any revocation or
                suspension of your driver's license. In addition, Section 383.31
                requires that any time you violate a state or local traffic law
                (other than parking), you must report it within 30 days to: 1)
                your employing motor carrier, and 2) the province that issued
                your license (If the violation occurs in a state or province
                otherthan the one which issued your license). The notification
                to both the employer and state or province must be in writing.
                <p>
                  I certify that I have read and understood the above
                  requirements.
                </p>
              </div>
              <div
                role="group"
                aria-labelledby="termsConsent"
                id="termsConsent"
              >
                <label className={styles.label}>
                  <Field type="radio" name="termsConsent" value="Yes" />
                  Agree
                </label>
                <label className={styles.label}>
                  <Field type="radio" name="termsConsent" value="No" />
                  Disagree
                </label>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TermsAndConditions;
