import React from "react";
import { motion } from "framer-motion";

import CarouselContent from "../../Components/CarouselContent/CarouselContent";

import "../../styles/Layout.css";
import styles from "./Carousel.module.css";

import Transportation from "../../Assets/carousel/Transportation.jpg";
import Manufacturing from "../../Assets/carousel/Manufacturing.jpg";
import Warehousing from "../../Assets/carousel/Warehousing.jpg";
import Admin from "../../Assets/carousel/Admin.jpg";
import Distribution from "../../Assets/carousel/Distribution.jpg";

function Carousel() {
  return (
    <div>
      <div className="layoutContainer">
        <motion.div
          className={styles.carouselHeading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <div className={styles.leftText}>WHAT MAKES US DIFFERENT</div>
          <div className={styles.rightText}>
            We don't just follow the same recruitment process on every vacancy.
            We create a bespoke campaign for all clients as standard and use our
            industry knowledge to provide the level of consultation you'd expect
            from a team of experts.
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <CarouselContent
            imgSrc={Manufacturing}
            heading={"MANUFACTURING"}
            subheading={
              "Machine operators or production workers are selected based on their capabilities, experience, and expertise. We cover the food industry, pharmaceuticals and consumer goods. For the food industry we provide candidates that have HACCPor SQF experience."
            }
            isImageOnLeft={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <CarouselContent
            imgSrc={Warehousing}
            heading={"WAREHOUSING"}
            subheading={`Our experienced team will integrate with your current staff to help run your 
          warehouse like a well-oiled machine. All have RF and inventory 
          management experience as well as storage expertise that include all types 
          of racking, bulk storage, and temperature-controlled environments. From 
          hand picking to automation, handling a pump truck to reverse steering 
          reach trucks, we are positive our team will meet your needs. We have 
          supervisors, lead-hands, shippers, receivers, etc.`}
            isImageOnLeft={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <CarouselContent
            imgSrc={Transportation}
            heading={"TRANSPORTATION"}
            subheading={
              "AZ or DZ drivers meet all CVOR requirements. Before our candidates arrive at your doorstep every driver has undergone a thorough onboarding process that includes background checks, hours of service, CVOR abstract, pre-employment driver’s road test, etc. The driver’s onboarding package will be compliant with the driver’s file as per CVOR "
            }
            isImageOnLeft={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <CarouselContent
            imgSrc={Distribution}
            heading={"DISTRIBUTION"}
            subheading={
              "E-com, small part picking and sorting for courier shipments, our team members do it all. Pick, pack, and ship, our staff works tirelessly to meet cutoff times and targets."
            }
            isImageOnLeft={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.3, type: "tween" }}
          viewport={{ once: true }}
        >
          <CarouselContent
            imgSrc={Admin}
            heading={"ADMIN STAFF"}
            subheading={
              "Our top-notch administrative support team is hand-picked and available for on-site or remote work. Our candidates include clerical support, logistics coordinators, inventory coordinators, dispatchers, etc. This elite group of professionals will seamlessly integrate with your team."
            }
            isImageOnLeft={true}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Carousel;
