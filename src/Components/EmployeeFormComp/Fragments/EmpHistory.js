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
        <div className={styles.containerEdu}>
          <div className={styles.label}>How long at current address ?</div>
          <div className={styles.inputFieldSmall} style={{ marginTop: 0 }}>
            {emp.currAddress}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Date of birth</div>
          <div className={styles.inputFieldSmall} style={{ marginTop: 0 }}>
            {emp.dateOfBirth}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>
            How long have you held a AZ license
          </div>
          <div className={styles.inputFieldLarge} style={{ marginTop: 0 }}>
            {emp.azDuration}
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
  console.log(existingCount);
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
        <div className={styles.containerEdu}>
          <div className={styles.label}>How long at current address ?</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="currAddress"
            placeholder="Time"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Date of birth</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="dateOfBirth"
            type="date"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>
            How long have you held a AZ license
          </div>
          <Field
            className={styles.inputFieldLarge}
            style={{ marginTop: 0 }}
            name="azDuration"
            placeholder="Time"
          />
        </div>
      </div>
    </>
  );
};

export { EmploymentCard, InputEmploymentHistory };
