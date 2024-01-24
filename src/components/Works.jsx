import React from 'react';
import SectionHeading from './SectionHeading';
import soloImage from '../images/DSC02686.jpg';
import groupImage from '../images/DSC04219 copy.jpg';
import sampleImage from '../images/DSC02745 copy.jpg';
import sampleImage2 from '../images/DSC02707.jpg';
import { motion } from 'framer-motion';

export default function Works() {
  return (
    <motion.section
      className="h-screen py-6 sm:py-8 lg:py-12 mt-10"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{once:false}}
    >
      <SectionHeading>Works</SectionHeading>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-[5rem]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.1 }}
            href="solo"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={soloImage}
              alt="solo shots"
              className="absolute inset-0 h-full
             w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tokyo Portraits
            </span>
          </motion.a>
          <motion.a
          initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.2 }}
            href="#id"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={groupImage}
              loading="lazy"
              alt="Group Shots"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Couples
            </span>
          </motion.a>
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.3 }}
            href="#id"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={sampleImage}
              loading="lazy"
              alt="by Deo P"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Elopements and Weddings
            </span>
          </motion.a>

          <motion.a
          initial={{ y: 100, opacity: 0,}}
            whileInView={{ y: 0, opacity: 1, }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.4 }}
            href="#id"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={sampleImage2}
              loading="lazy"
              alt="by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Personal Branding
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}