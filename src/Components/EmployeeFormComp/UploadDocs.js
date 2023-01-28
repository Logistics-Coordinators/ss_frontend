import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDropzone } from "react-dropzone";

import styles from "./FormComp.module.css";

function UploadDocs() {
  return (
    <div>
      <Formik
        initialValues={{
          first: null,
          second: null,
          third: null,
          fourth: null,
        }}
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UploadDocs;
