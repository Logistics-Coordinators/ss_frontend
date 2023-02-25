import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./FormComp.module.css";

function EmployeeVerificationFormComp() {
  return (
    <div>
      <Formik
        initialValues={{
          classOfEquipment: [],
        }}
      >
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
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      // border: "2px solid black",
                    }}
                    className={styles.generalLeft}
                  >
                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="BTrain"
                        />
                        B-Train
                      </label>
                      {values.classOfEquipment.includes("BTrain") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="BTrainMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="DumpTruck"
                        />
                        Dump - Truck
                      </label>
                      {values.classOfEquipment.includes("DumpTruck") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="DumpTruckMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="LCV"
                        />
                        LCV
                      </label>
                      {values.classOfEquipment.includes("LCV") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="LCVMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="Refrigerated"
                        />
                        Refrigerated
                      </label>
                      {values.classOfEquipment.includes("Refrigerated") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="RefrigeratedMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="SuperBus"
                        />
                        Super Bus
                      </label>
                      {values.classOfEquipment.includes("SuperBus") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="SuperBusMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorSemiTrailer"
                        />
                        Tractor Semi Trailer
                      </label>
                      {values.classOfEquipment.includes(
                        "TractorSemiTrailer"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorSemiTrailerMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorTrailer"
                        />
                        Tractor - Trailer
                      </label>
                      {values.classOfEquipment.includes("TractorTrailer") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorTrailerMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="others"
                        />
                        Other (specify)
                      </label>
                      {values.classOfEquipment.includes("others") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="othersMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="Decks"
                        />
                        Decks
                      </label>
                      {values.classOfEquipment.includes("Decks") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="DecksMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="Flatbed"
                        />
                        Flat bed
                      </label>
                      {values.classOfEquipment.includes("Flatbed") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="FlatbedMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="MotorCoach"
                        />
                        Motor coach
                      </label>
                      {values.classOfEquipment.includes("MotorCoach") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="MotorCoachMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="StraightTruck"
                        />
                        Straight Truck
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
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="Tank"
                        />
                        Tank
                      </label>
                      {values.classOfEquipment.includes("Tank") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TankMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="TractorandTwoTrailer"
                        />
                        Tractor and Two Trailer
                      </label>
                      {values.classOfEquipment.includes(
                        "TractorandTwoTrailer"
                      ) ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="TractorandTwoTrailerMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className={styles.checkedLabel}>
                        <Field
                          type="checkbox"
                          name="classOfEquipment"
                          value="Vans"
                        />
                        Vans
                      </label>
                      {values.classOfEquipment.includes("Vans") ? (
                        <div>
                          <Field
                            className={styles.inputFieldSmall}
                            name="VansMiles"
                            placeholder="Approximate Miles Driven"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                    }}
                    className={styles.generalRight}
                  >
                    <span className={styles.label}>
                      Driver Experience Details
                    </span>
                    <span
                      style={{ marginTop: ".5rem" }}
                      className={styles.label}
                    >
                      Has Driving Experience with Commercial Vehicles
                    </span>
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
