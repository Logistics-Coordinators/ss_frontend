import styles from "../FormComp.module.css";
import { Field } from "formik";

const EmploymentCard = ({ emp, id, handleEmpEntryDelete, existingCount }) => {
  return (
    <>
      <div
        style={{
          width: "85%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "2px solid red",
        }}
      >
        <p className={styles.headingText}>Employment {id + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleEmpEntryDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Employee Name</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            // name="empName"
            placeholder="Enter your employee name"
          >
            {emp.employer_name}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Position held</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            // name="currAddress"
            placeholder="Enter your position held by you"
          >
            {emp.position_held}
          </div>
        </div>

        <div
          className={styles.containerEmp}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // border: "2px solid black",
          }}
        >
          <div>
            <div className={styles.label}>Start Date</div>
            <div className={styles.inputFieldSmallEmp}>{emp.start_date}</div>
          </div>
          <div>
            <div className={styles.label}>End Date</div>
            <div
              className={styles.inputFieldSmallEmp}
              // name="empDate"
              type="date"
            >
              {emp.end_date}
            </div>
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Select City</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            // name="currAddress"
            placeholder="Select the employee city"
          >
            {emp.work_city}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Postal code</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="Enter employee postal code"
          >
            {emp.postal_code}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Salary wage</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="Enter your wage"
          >
            {emp.wage}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Contact person Name</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="Enter contact person name"
          >
            {emp.contact_person_name}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Contact person number</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="Enter contact person number"
          >
            {emp.contact_person_number}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Reason for leaving</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="State the reasons"
          >
            {emp.reason_for_leaving}
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Refferal Email</div>
          <div
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            placeholder="State the reasons"
          >
            {emp.referral_email}
          </div>
        </div>

        <div className={styles.containerSelectEmp}>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect} id="referral_email_active">
              Should we verify your Refferal?
            </div>
            <div
              role="group"
              aria-labelledby="bondRefusal"
              className={styles.radioContainer}
            >
              {emp.referral_email_active === "Yes" ? (
                <label>
                  <Field checked={true} type="radio" value="Yes" />
                  Yes
                </label>
              ) : (
                <label>
                  <Field checked={true} type="radio" value="No" />
                  No
                </label>
              )}
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect}>
              Where you subject to the FMCSRs while employed
            </div>
            <div
              role="group"
              aria-labelledby="bondRefusal"
              className={styles.radioContainer}
            >
              {emp.subject_to_FMCSR === "Yes" ? (
                <label>
                  <Field checked={true} type="radio" value="Yes" />
                  Yes
                </label>
              ) : (
                <label>
                  <Field checked={true} type="radio" value="No" />
                  No
                </label>
              )}
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect}>
              Was your job designated as safe sensitive functions
            </div>
            <div role="group" className={styles.radioContainer}>
              {emp.safe_sensitive_function === "Yes" ? (
                <label>
                  <Field checked={true} type="radio" value="Yes" />
                  Yes
                </label>
              ) : (
                <label>
                  <Field checked={true} type="radio" value="No" />
                  No
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InputEmploymentHistory = ({
  existingCount,
  handleEmpFormDone,
  handleEmpFormCancel,
  values,
}) => {
  // console.log(existingCount);
  return (
    <>
      <div
        style={{
          width: "85%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "2px solid red",
        }}
      >
        <p className={styles.headingText}>Employment {existingCount + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{
              width: "3rem",
              background: "#FF003D",
              padding: "5px 35px",
            }}
            type="button"
            onClick={() => handleEmpFormCancel(values)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleEmpFormDone(values);
            }}
          >
            Done
          </button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Employer Name</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="empName"
            placeholder="Enter your employer name"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Position held</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="positionHeld"
            placeholder="Enter your position held by you"
          />
        </div>

        <div
          className={styles.containerEmp}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // border: "2px solid black",
          }}
        >
          <div>
            <div className={styles.label}>Start Date</div>
            <Field
              className={styles.inputFieldSmallEmp}
              name="startDate"
              type="date"
            />
          </div>
          <div>
            <div className={styles.label}>End Date</div>
            <Field
              className={styles.inputFieldSmallEmp}
              name="endDate"
              type="date"
            />
          </div>
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Select City</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="workCity"
            placeholder="Enter the employee city"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Postal code</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="postalCode"
            placeholder="Enter employee postal code"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Salary/Wage</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="wage"
            placeholder="Enter your wage"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Contact person name</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="contactPersonName"
            placeholder="Enter contact person name"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Contact person number</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="contactPersonNumber"
            placeholder="Enter contact person number"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Reason For Leaving</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="reasonForLeaving"
            placeholder="State reasons"
          />
        </div>

        <div className={styles.containerEmp}>
          <div className={styles.labelEmp}>Refferal Email</div>
          <Field
            className={styles.inputFieldLargeEmp}
            style={{ marginTop: 0 }}
            name="referralEmail"
            placeholder="Email of the Person Reffering"
          />
        </div>

        <div className={styles.containerSelectEmp}>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect} id="referral_email_active">
              Should we verify your Refferal?
            </div>
            <div
              role="group"
              aria-labelledby="referral_email_active"
              className={styles.radioContainer}
            >
              <label>
                <Field type="radio" name="referral_email_active" value="Yes" />
                Yes
              </label>
              <label>
                <Field type="radio" name="referral_email_active" value="No" />
                No
              </label>
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect} id="subjectToFMCSR">
              Where you subject to the FMCSRs while employed
            </div>
            <div
              role="group"
              aria-labelledby="subjectToFMCSR"
              className={styles.radioContainer}
            >
              <label>
                <Field type="radio" name="subjectToFMCSR" value="Yes" />
                Yes
              </label>
              <label>
                <Field type="radio" name="subjectToFMCSR" value="No" />
                No
              </label>
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div className={styles.labelSelect} id="safeSensitiveFunction">
              Was your job designated as safe sensitive functions
            </div>
            <div
              role="group"
              aria-labelledby="safeSensitiveFunction"
              className={styles.radioContainer}
            >
              <label>
                <Field type="radio" name="safeSensitiveFunction" value="Yes" />
                Yes
              </label>
              <label>
                <Field type="radio" name="safeSensitiveFunction" value="No" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EmploymentCard, InputEmploymentHistory };
