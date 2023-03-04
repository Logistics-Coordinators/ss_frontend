import React from "react";
import { Formik, Form } from "formik";

import styles from "./FormComp.module.css";

function UploadDocs() {
  const handleFilesSubmit = (val, actions) => {
    console.log([val.first, val.second, val.third, val.fourth]);
  };
  return (
    <div>
      <Formik
        initialValues={{
          first: null,
          second: null,
          third: null,
          fourth: null,
        }}
        onSubmit={(val, actions) => handleFilesSubmit(val, actions)}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="file" className={styles.headingText}>
                  Upload Copies of your Current Driving License
                </label>

                <div>
                  <p className={styles.label}>First Quarter</p>
                  <input
                    id="first"
                    name="first"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("first", event.currentTarget.files[0]);
                    }}
                  />
                </div>

                <div>
                  <p className={styles.label}>Second Quarter</p>
                  <input
                    id="second"
                    name="second"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("second", event.currentTarget.files[0]);
                    }}
                  />
                </div>

                <div>
                  <p className={styles.label}>Third Quarter</p>
                  <input
                    id="third"
                    name="third"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("third", event.currentTarget.files[0]);
                    }}
                  />
                </div>

                <div>
                  <p className={styles.label}>Fourth Quarter</p>
                  <input
                    id="fourth"
                    name="fourth"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("fourth", event.currentTarget.files[0]);
                    }}
                  />
                </div>
              </div>
              {/* TEsting */}
              <button type="submit">SEE DOCS Logs</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UploadDocs;
