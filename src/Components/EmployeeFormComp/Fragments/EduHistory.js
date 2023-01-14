import styles from "../FormComp.module.css";
import {  Field } from "formik";

// Component to display education card
const EducationCard = ({ edu, id, handleEduEntryDelete, existingCount }) => {
  // console.log(edu);
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
        <p className={styles.headingText}>Education {id + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleEduEntryDelete(id);
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
          <div className={styles.label}>Education</div>
          <div style={{ marginTop: 0 }} className={styles.inputFieldSmall}>
            {edu.education}
          </div>
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Level Completed</div>
          <div style={{ marginTop: 0 }} className={styles.inputFieldSmall}>
            {edu.levelCompleted}
          </div>
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Institution Name</div>
          <div style={{ marginTop: 0 }} className={styles.inputFieldSmall}>
            {edu.institutionName}
          </div>
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Location</div>
          <div style={{ marginTop: 0 }} className={styles.inputFieldSmall}>
            {edu.location}
          </div>
        </div>
      </div>
    </>
  );
};

// Component to input education from user
const InputEducationHistory = ({
  existingCount,
  handleEduFormDone,
  handleEduFormCancel,
  values,
}) => {
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
        <p className={styles.headingText}>Education {existingCount + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{
              width: "3rem",
              background: "#FF003D",
              padding: "5px 35px",
            }}
            type="button"
            onClick={() => handleEduFormCancel(values)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleEduFormDone(values);
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
          <div className={styles.label}>Education</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="eduYear"
            placeholder="Year Completed"
          />
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Level Completed</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="eduLevel"
            placeholder="Level"
          />
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Institution Name</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="eduInstitution"
            placeholder="Name of the Organisation"
          />
        </div>
        <div className={styles.containerEdu}>
          <div className={styles.label}>Location</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="eduLocation"
            placeholder="Place"
          />
        </div>
      </div>
    </>
  );
};

export { EducationCard, InputEducationHistory };
