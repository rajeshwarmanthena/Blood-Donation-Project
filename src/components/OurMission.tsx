"use client";
import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="bg-white dark:bg-gray-900 pt-5 md:max-h-[45vh] lg:h-[30vh] ">
      <h1 className="text-4xl font-semibold pl-16 pt-4 text-white  text-center hover:text-red-300 transition-colors duration-300 ease-in-out color:white">
        Our Mission
      </h1>
      <motion.p
        className="text-lg px-16 py-4 font-light text-center text-gray-600 dark:text-gray-400 text-justify"
        initial={{ opacity: 0, position: "relative", top: "-100px" }}
        animate={{ opacity: 1, position: "relative", top: "0px" }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Our mission is to address the critical need for blood supply in the
        country by connecting donors and recipients. We provide a seamless
        platform for blood donations, bridging the gap in the supply chain. With
        a reliable system, we empower individuals to make a significant impact
        on society. Through compassion and unity, we inspire more donors, saving
        lives one donation at a time.
      </motion.p>
    </div>
  );
};

export default OurMission;
