import styles from "../FormComp.module.css";
import { Field } from "formik";

const QualificationCard = ({
  qly,
  id,
  handleQlyEntryDelete,
  existingCount,
}) => {
  return (
    <div>
      <div>
        <p className={styles.headingText}>Qualification {id + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleQlyEntryDelete(id);
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
          <div className={styles.label}>Institution Name</div>
          <div className={styles.inputFieldSmall} style={{ marginTop: 0 }}>
            {qly.institute_name}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Institution Location</div>
          <div
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="instituteLocation"
          >
            {qly.institute_location}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Duration</div>
          <div
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="duration"
          >
            {qly.duration}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>List of Skills</div>
          <div
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="skills"
          >
            {qly.skills}
          </div>
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>List of Courses</div>
          <div
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="courses"
          >
            {qly.courses}
          </div>
        </div>
      </div>
    </div>
  );
};

const InputQualificationHistory = ({
  existingCount,
  handleQlyFormDone,
  handleQlyFormCancel,
  values,
}) => {
  return (
    <div>
      <div>
        <p className={styles.headingText}>Qualification {existingCount + 1}</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={styles.buttonMed}
            style={{
              width: "3rem",
              background: "#FF003D",
              padding: "5px 35px",
            }}
            type="button"
            onClick={() => handleQlyFormCancel(values)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonMed}
            style={{ width: "3rem", padding: "6px 35px" }}
            type="button"
            onClick={() => {
              handleQlyFormDone(values);
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
          <div className={styles.label}>Institution Name</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="instituteName"
            placeholder="Enter your Institute name"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Institution Location</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="instituteLocation"
            placeholder="Enter your Institute Location"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>Duration</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="duration"
            placeholder="Enter Duration"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>List of Skills</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="skills"
            placeholder="Enter Skills Acquired"
          />
        </div>

        <div className={styles.containerEdu}>
          <div className={styles.label}>List of Courses</div>
          <Field
            className={styles.inputFieldSmall}
            style={{ marginTop: 0 }}
            name="courses"
            placeholder="Enter Courses Completed"
          />
        </div>
      </div>
    </div>
  );
};

export { QualificationCard, InputQualificationHistory };
