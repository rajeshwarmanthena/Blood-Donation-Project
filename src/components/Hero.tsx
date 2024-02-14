"use client";
import React from "react";
import blood from "../../asset/Header.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OurMission from "./OurMission";
import OurCollaborators from "./OurCollaborators";
import GetBlood from "./GetBlood";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
    <header className="bg-white dark:bg-gray-900">
        
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Save Lifes Donate Blood</h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Donate blood to save lives. Your blood donation can save a life and help others to live a better life and make a better future for their families.</p>
                        <Link href="/">
                            <motion.button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Get Blood Now
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Image src={blood} alt="logo" className="w-full h-full lg:max-w-3xl" />
                </div>
            </div>
        </div>
    </header>
    <OurMission/>
    <OurCollaborators/>
    <GetBlood/>
    </>
  );
};

export default Hero;
