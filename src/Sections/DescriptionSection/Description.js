import React from "react";
import "../../styles/Layout.css";

import DescriptionCard from "../../Components/DescriptionCard/DescriptionCard";

function Description() {
  return (
    <div className="layoutContainer">
      <h1
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          fontFamily: "Teko",
          fontSize: "3rem",
          marginTop: "1rem",
          marginBottom: ".5rem",
          color: "black",
        }}
      >
        Staffing Solutions
      </h1>
      <p
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          textTransform: "uppercase",
          fontFamily: "Montserrat",
          fontSize: "0.65rem",
          lineHeight: "1.2rem",
          marginBottom: "1.8rem",
          color: "black",
        }}
      >
        Labour Connect, a division of Logistics Coordinators, is an Industry
        leading staffing and consulting services company which provides quality
        customized solutions. Our internal reach, along with a professional and
        diverse team, generates the reliable support our clients have come to
        know and respect.
      </p>
      <div style={{ height: "80vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "auto",
            width: "80%",
            height: "60vh",
            // border: "2px solid red",
          }}
        >
          <DescriptionCard
            heading={"Temporary Workforce"}
            subtitle={
              "For those needs ranging from same day emergency replacements to long-term contingent staff, this solution is our most flexible and the cornerstone of our business."
            }
          />
          <DescriptionCard
            heading={"Temporary To Hire"}
            subtitle={
              "The perfect way for those who want to expand their workforce and need a reliable partner who accepts their hiring criteria and qualified candidates to become a permanent workforce."
            }
          />
          <DescriptionCard
            heading={"Direct-Hire-Placement"}
            subtitle={
              "Accelerating the process of hiring full-time permanent staff by using LC as your partner for Recruitment Process Outsourcing (RPO)."
            }
          />
          <DescriptionCard
            heading={"Workforce LC"}
            subtitle={
              "We have gathered a team of top-notch administrative support professionals for deployment for on-site or remote work. These professionals must meet stringent screening and assessment criteria to become part of this elite group."
            }
          />
          <DescriptionCard
            heading={"Payroll Processing Solution"}
            subtitle={
              "We offer support services that make it easier for our clients to automate payroll processing, distribute pay slips, and maintain data records to ensure compliance"
            }
          />
          <DescriptionCard
            heading={"Permanent Workforce"}
            subtitle={
              "This hybrid solution marries the best of our temporary and RPO solutions. We conduct the search for candidates, present the best available, hire them as salaried LC employees and deploy them as part of your workforce."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
