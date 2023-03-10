import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../Assets/LoadingAnimation.gif";

import { Formik, Form, Field } from "formik";

import styles from "./Login.module.css";

import Axios from "axios";

import { UserContext } from "../../Context/UserContext.js";

import LabourConnect from "../../Assets/LabourConnect-whitebg.svg";

function Login() {
  const url = `${process.env.REACT_APP_BACKEND_URL}api/v1/LC/login`;

  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const item = localStorage.getItem("token");
    if (!item) {
      setIsLoggedIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    if (isLoggedIn) {
      navigate("/employeeform");
    }
  }, 700);

  const handleLogin = (val) => {
    setIsLoading(true);
    Axios.post(
      url,
      {
        email: val.email,
        password: val.password,
      },
      headers
    )
      .then((response) => {
        const email = localStorage.setItem("email", val.email);
        const application = localStorage.setItem("token", response.data.token);
        // localStorage.setItem("role", response.data.user.role);
        const item = localStorage.getItem("token", response.data.token);
        console.log(response);
        if (response.data === "Too many requests, please try again later.") {
          //   setModal(true);
          //   setMsg("Too many requests please try again...");
          //   setModalColor("red");
          alert("Too Many Requests");
        }
        if (response.data.msg === "Invalid Credentials") {
          //   setModal(true);
          //   setMsg("Invalid credentials!");
          //   setModalColor("red");
          alert("Invalid Credentials");
        } else {
          //   setModal(true);
          //   setMsg("User authenticated!");
          //   setModalColor("green");
          console.log("User Authenticated");
        }
        setIsLoggedIn(item);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.msg === "Invalid Credentials") {
          //   setModal(true);
          //   setMsg("Invalid credentials!");
          //   setModalColor("red");
          console.log("Invalid Credentials");
        } else {
          //   setModal(true);
          //   setMsg("Please Try again!");
          //   setModalColor("red");
          console.log("Please Try Again");
        }
        setIsLoading(false);
      });
  };

  return (
    <>
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
      <div className={styles.parentContainer}>
        <div className={styles.logoContainer}>
          <img src={LabourConnect} width={180} draggable={false} alt="logo" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(val, actions) => handleLogin(val)}
        >
          {({ values }) => (
            <Form>
              <div className={styles.loginContainer} style={{ zIndex: 1 }}>
                <div className={styles.heading_container}>
                  <h1 className={styles.headingText}>Sign In</h1>
                </div>
                <div className={styles.containerEdu}>
                  <div className={styles.label}>Email</div>
                  <Field
                    className={styles.inputFieldSmall}
                    style={{ marginTop: 0 }}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className={styles.containerEdu}>
                  <div className={styles.label}>Password</div>
                  <Field
                    className={styles.inputFieldSmall}
                    style={{ marginTop: 0 }}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className={styles.buttonMed} type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Login;
