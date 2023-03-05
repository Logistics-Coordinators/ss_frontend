import React, { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import styles from "./FormComp.module.css";
import Loader from "../../Assets/LoadingAnimation.gif";
import axios from "axios";

function TermsAndConditions() {
  const [tAndCSection, setTAndCSection] = useState(0);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  const [savedData, setSavedData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinueClick = () => {
    setTAndCSection(tAndCSection + 1);
  };

  let application_id,
    data = {};

  application_id = localStorage.getItem("application_id");

  useEffect(() => {
    if (application_id) {
      setIsLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/termsAndCondition?application_id=${application_id}`
        )
        .then((res) => {
          const {
            terms_consent,
            licensing,
            hours_of_work,
            pre_trip_inspection,
            positive_for_controlled_substance,
            alcohol_pre_employement_test,
            refused_pre_employement_test,
            name_of_sap,
            contact_of_sap,
            address_of_sap,
            medical_declaration,
            driver_record_search_auth,
            procedure_and_policies,
            consent_to_personal_info,
          } = res.data.result;

          data = {
            termsConsent: terms_consent,
            licensing: licensing,
            hoursOfWork: hours_of_work,
            preTripInspection: pre_trip_inspection,
            positiveForControlledSubstance: positive_for_controlled_substance,
            alcoholPreEmployementTest: alcohol_pre_employement_test,
            refusedPreEmployementTest: refused_pre_employement_test,
            nameOfSap: name_of_sap,
            contactOfSap: contact_of_sap,
            addressOfSap: address_of_sap,
            medicalDeclaration: medical_declaration,
            driverRecordSearchAuth: driver_record_search_auth,
            procedureAndPolicies: procedure_and_policies,
            consentToPersonalInfo: consent_to_personal_info,
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

  const generateDQFFile = (application_id) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}api/v1/SS/generateDQF`, {
        application_id,
      })
      .then((res) => {
        setIsLoading(false);
        alert(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const handleTermsSubmit = (val, actions) => {
    console.log(val.refusedPreEmployementTest);
    const body = {
      terms_consent: val.termsConsent,
      licensing: val.licensing,
      hours_of_work: val.hoursOfWork,
      pre_trip_inspection: val.preTripInspection,
      positive_for_controlled_substance: val.positiveForControlledSubstance,
      alcohol_pre_employement_test: val.alcoholPreEmployementTest,
      // refused_pre_employement_test: val.refusedPreEmployementTest,
      name_of_sap: val.nameOfSap,
      contact_of_sap: val.contactOfSap,
      address_of_sap: val.addressOfSap,
      medical_declaration: val.medicalDeclaration,
      driver_record_search_auth: val.driverRecordSearchAuth,
      procedure_and_policies: val.procedureAndPolicies,
      consent_to_personal_info: val.consentToPersonalInfo,
      email: localStorage.getItem("email"),
      application_id: localStorage.getItem("application_id"),
    };

    console.log(body);

    setIsLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/SS/termsAndCondition`,
        body
      )
      .then((res) => {
        console.log(application_id);
        console.log("Terms and Condition Submitted");
        setIsLoading(false);
        // generateDQFFile(application_id);
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
            termsConsent: "",
            licensing: "",
            hoursOfWork: "",
            preTripInspection: "",
            positiveForControlledSubstance: "",
            alcoholPreEmployementTest: "",
            refusedPreEmployementTest: "",
            nameOfSap: "",
            contactOfSap: "",
            addressOfSap: "",
            medicalDeclaration: "",
            driverRecordSearchAuth: "",
            procedureAndPolicies: "",
            consentToPersonalInfo: "",
          }
        }
        onSubmit={(val, actions) => handleTermsSubmit(val, actions)}
      >
        {({ values }) => (
          <Form>
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
            {tAndCSection === 0 ? (
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
                    driver, may not possess more than one motor vehicle
                    operator's license. *If you have more than one license, keep
                    the license from your state of residence and return the
                    additional licenses to the states that issued them.
                    DESTROYING a license does not close the record in the state
                    that issued it; you must notify the state. If a multiple
                    license has been lost, stolen, or destroyed, lose your
                    record by notifying the state of issuance that you no longer
                    want to be licensed by that state.
                  </p>
                  2) NOTIFICATION OF LICENSE 391.15(b) (2) and 383.33 of the
                  Federal Motor Carrier Safety Regulations require that you
                  notify your employer the NEXT BUSINESS DAY of any revocation
                  or suspension of your driver's license. In addition, Section
                  383.31 requires that any time you violate a state or local
                  traffic law (other than parking), you must report it within 30
                  days to: 1) your employing motor carrier, and 2) the province
                  that issued your license (If the violation occurs in a state
                  or province otherthan the one which issued your license). The
                  notification to both the employer and state or province must
                  be in writing.
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
                    <Field type="radio" name="termsConsent" value="Agree" />
                    Agree
                  </label>
                  <label className={styles.label}>
                    <Field type="radio" name="termsConsent" value="Disagree" />
                    Disagree
                  </label>
                </div>
                <button
                  className={styles.buttonMed}
                  style={{
                    width: "10rem",
                    padding: "10px 35px",
                  }}
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
              </div>
            ) : null}

            {tAndCSection === 1 ? (
              <div>
                <p className={styles.headingText}>Rules</p>
                <div className={styles.tAndCText}>
                  In order to ensure safe operation of the company's fleet
                  vehicles, all drivers must be aware of and comply with all
                  regulations governing their conduct.
                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="licensing">
                      <p className={styles.headingText}>Licensing</p>
                      <p>
                        I know that I must have a valid commercial driver's
                        license.
                      </p>
                      <p>
                        I agree to report all traffic violations to my employer
                        in writing.
                      </p>
                      <p>
                        I understand that I must not operate a vehicle while
                        under the influence of Drugs and alcohol
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="licensing"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field type="radio" name="licensing" value="Agree" />
                        Agree
                      </label>
                      <label>
                        <Field type="radio" name="licensing" value="Disagree" />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="hoursOfWork">
                      <p className={styles.headingText}>Hours of work</p>
                      <p>
                        I have been informed of and understand the hours of work
                        regulations.
                      </p>
                      <p>
                        I am aware that I must arrange my work schedule to
                        comply with these regulations.
                      </p>
                      <p>
                        I agree to submit a record of all on-duty hours
                        accumulated while working for other operators.
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="hoursOfWork"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field type="radio" name="hoursOfWork" value="Agree" />
                        Agree
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="hoursOfWork"
                          value="Disagree"
                        />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div className={styles.containerSelect}>
                    <div className={styles.labelSelect} id="preTripInspection">
                      <p className={styles.headingText}>Pre-trip Inspections</p>
                      <p>
                        l am aware of the pre-trip inspection requirements and
                        understand them.
                      </p>
                      <p>
                        I have been informed of and understand the load security
                        regulations.
                      </p>
                      <p>(i.e. Ensure that the load is tarped as required)</p>
                      <p>
                        I have been informed of and understand the load security
                        regulations.
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="preTripInspection"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="preTripInspection"
                          value="Agree"
                        />
                        Agree
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="preTripInspection"
                          value="Disagree"
                        />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.headingText}>
                      Driver pre employment verification
                    </h3>
                    <p className={styles.headingText}>
                      (In past 3 years you have)
                    </p>
                  </div>
                  <div className={styles.containerSelect}>
                    <div
                      className={styles.labelSelect}
                      id="positiveForControlledSubstance"
                    >
                      <p>
                        Tested positive for any controlled substances
                        pre-employment test for any other company
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="positiveForControlledSubstance"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="positiveForControlledSubstance"
                          value="Agree"
                        />
                        Agree
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="positiveForControlledSubstance"
                          value="Disagree"
                        />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div className={styles.containerSelect}>
                    <div
                      className={styles.labelSelect}
                      id="alcoholPreEmployementTest"
                    >
                      <p>
                        Tested above 0.4 on an any alcohol pre-employment test
                        for any other company
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="alcoholPreEmployementTest"
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="alcoholPreEmployementTest"
                          value="Agree"
                        />
                        Agree
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="alcoholPreEmployementTest"
                          value="Disagree"
                        />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div className={styles.containerSelect}>
                    <div
                      className={styles.labelSelect}
                      id="refusedPreEmployementTest "
                    >
                      <p>
                        Have you refused to be tested for any pre-employment
                        test for any other company
                      </p>
                    </div>
                    <div
                      role="group"
                      aria-labelledby="refusedPreEmployementTest "
                      className={styles.radioContainer}
                    >
                      <label>
                        <Field
                          type="radio"
                          name="refusedPreEmployementTest "
                          value="Agree"
                        />
                        Agree
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="refusedPreEmployementTest "
                          value="Disagree"
                        />
                        Disagree
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className={styles.headingText}>
                      If your answer is Agree any above questions please provide
                      information's below
                    </p>
                    <div className={styles.container}>
                      <div className={styles.label}>Name of the SAP</div>
                      <Field
                        className={styles.inputFieldSmall}
                        name="nameOfSap"
                        placeholder="Enter the SAP name"
                      />
                    </div>
                    <div className={styles.container}>
                      <div className={styles.label}>Contact Number</div>
                      <Field
                        className={styles.inputFieldSmall}
                        name="contactOfSap"
                        placeholder="Enter Contact number"
                      />
                    </div>
                    <div className={styles.container}>
                      <div className={styles.label}>
                        Address with postal code
                      </div>
                      <Field
                        className={styles.inputFieldSmall}
                        name="addressOfSap"
                        placeholder="Enter the address"
                      />
                    </div>
                  </div>
                </div>

                <button
                  className={styles.buttonMed}
                  style={{
                    width: "10rem",
                    padding: "10px 35px",
                  }}
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
              </div>
            ) : null}

            {tAndCSection === 2 ? (
              <div>
                <p className={styles.headingText}>Medical declaration</p>
                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="medicalDeclaration">
                    <div className={styles.tAndCText}>
                      <p>
                        On March 30, 1999, Transport Canada and U.S. Federal
                        Highway Administration (FHWA) entered into a reciprocal
                        agreement regarding the physical requirements for a
                        Canadian driver of a commercial vehicle in the U.S., as
                        currently contained in the Federal Motor Carrier Safety
                        Regulations, Part 391.41 et seq, and vice versa. The
                        reciprocal agreement removes the requirement for a
                        Canadian driver to carry a copy of a medical examiners
                        certificate indicating that the driver is physically
                        qualified. (In effect, the existence of a valid driver's
                        license issued by the Province of Ontario is deemed to
                        be proof thata driver is physically qualified to drive
                        in the U.S.). However, FHWA will not recognize an
                        Ontario license if the driver has certain medical
                        conditions, and those conditions would prohibit him from
                        driving in the U.S.
                      </p>
                      <p>
                        I am certify that I am qualified to operate a commercial
                        motor vehicle in the United States.
                      </p>
                      <p>
                        I have no clinical diagnosis of diabetes currently
                        requiring insulin for control.
                      </p>
                      <p>
                        I do not have impaired hearing. (A driver must be able
                        to first perceive a forced whispered voice in the better
                        ear at not less than 5 feet with or without the use of a
                        hearing aid or does not have an average hearing loss in
                        the better ear greater than 40 decibels at 500Hz,
                        1000Hz, or 2000Hz with or without a hearing aid when
                        tested by an audiometric device calibrated to American
                        national Standard Z24.5-1951).
                      </p>
                      <p>
                        I have not been issued a waiver by the Province of
                        Ontario allowing me to operate a commercial motor
                        vehicle pursuant to Section 20 or21 of Ontario
                        Regulation 340/94.
                      </p>
                      <p>
                        I further agree to immediately inform the Safety or
                        Operations Manager should my medical status change, or
                        if I can no longer certify condition A to D, described
                        above.
                      </p>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="medicalDeclaration"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="medicalDeclaration"
                        value="Agree"
                      />
                      Agree
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="medicalDeclaration"
                        value="Disagree"
                      />
                      Disagree
                    </label>
                  </div>
                </div>
                <p className={styles.headingText}>
                  Authorization for Driver Record Search
                </p>
                <div className={styles.containerSelect}>
                  <div
                    className={styles.labelSelect}
                    id="driverRecordSearchAuth"
                  >
                    <div className={styles.tAndCText}>
                      <p>
                        The Federal Motor Carrier Regulations, section 391.21,
                        which covers driver's qualification and application for
                        employment, requires the motor carrier to obtain a list
                        of all motor vehicle violations for the last three (3)
                        years.
                      </p>
                      <p>
                        I certify that I have read and understood the above
                        requirements.
                      </p>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="driverRecordSearchAuth"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="driverRecordSearchAuth"
                        value="Agree"
                      />
                      Agree
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="driverRecordSearchAuth"
                        value="Disagree"
                      />
                      Disagree
                    </label>
                  </div>
                </div>
                <p className={styles.headingText}>Driver Acknowledgement</p>
                <div className={styles.containerSelect}>
                  <div
                    className={styles.labelSelect}
                    id="driverAcknowledgement"
                  >
                    <div className={styles.tAndCText}>
                      <p>
                        I have been explained and I understand it is illegal to
                        falsify in logbooks and I must log all time markers
                        (e.g., tolls, border crossings, fuel etc.) properly and
                        exactly as per Eastern Time Zone.
                      </p>
                      <p>
                        If any falsification in my logs is found while auditing
                        by company, I agree that I will be subject to fines and
                        penalties. Fines and penalties will be determined by
                        safety and compliance officer looking into number of
                        counts and difference in hours.
                      </p>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="driverAcknowledgement"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="driverAcknowledgement"
                        value="Agree"
                      />
                      Agree
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="driverAcknowledgement"
                        value="Disagree"
                      />
                      Disagree
                    </label>
                  </div>
                </div>
                <p className={styles.headingText}>Procedure & Policies</p>
                <div className={styles.containerSelect}>
                  <div className={styles.labelSelect} id="procedureAndPolicies">
                    <div className={styles.tAndCText}>
                      <p>Driver's Manual</p>
                      <p>
                        I have read and understand policies and procedures
                        driver's manual. I fully agree to abide by these
                        policies and procedures and understand that if I break
                        any of these policies and procedures, I will suffer the
                        consequences set forth in the manual. I am als0 aware
                        that anythingl do not understand, I can go to management
                        to be fully explained to me
                      </p>
                      <p>
                        I understood all the procedures and polices mentioned{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="procedureAndPolicies"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="procedureAndPolicies"
                        value="Agree"
                      />
                      Agree
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="procedureAndPolicies"
                        value="Disagree"
                      />
                      Disagree
                    </label>
                  </div>
                </div>
                <p className={styles.headingText}>
                  Consent to Personal Investigation
                </p>
                <div className={styles.containerSelect}>
                  <div
                    className={styles.labelSelect}
                    id="consentToPersonalInfo"
                  >
                    <div className={styles.tAndCText}>
                      <p>Driver's Manual</p>
                      <p>
                        I consent to Logistics Coordinators or its affiliates
                        conducting or causing to be conducted a personal
                        investigation.
                      </p>
                      <p>
                        l understand that Logistics Coordinators will be
                        sharing/accessing/obtaining/gathering information from a
                        credit reporting agency.
                      </p>
                      <p>
                        I understood all the procedures and polices mentioned{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-labelledby="consentToPersonalInfo"
                    className={styles.radioContainer}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="consentToPersonalInfo"
                        value="Agree"
                      />
                      Agree
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="consentToPersonalInfo"
                        value="Disagree"
                      />
                      Disagree
                    </label>
                  </div>
                </div>

                <button
                  className={styles.buttonMed}
                  style={{
                    width: "12rem",
                    padding: "10px 35px",
                  }}
                  type="submit"
                >
                  Submit
                </button>
                <div>
                  <button
                    className={styles.buttonMed}
                    style={{
                      marginTop: "2rem",
                      width: "15rem",
                      padding: "10px 35px",
                    }}
                    type="button"
                    onClick={() => generateDQFFile(application_id)}
                  >
                    Finish and Genrate DQF
                  </button>
                </div>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TermsAndConditions;
