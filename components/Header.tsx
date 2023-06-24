import React from "react";
import { SocialIcon } from "react-social-icons";
import { FiDownload } from 'react-icons/fi';
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

var Resume = "/HARSH_SHOKEEN__RESUME.pdf";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 cursor-pointer space-x-2"
      >
        <Link href={Resume}>
          <a target="_blank" className="items-center text-gray-400 hidden md:inline-flex">
          <FiDownload className="text-3xl px-1.5 "/>
            <h1 className="uppercase text-sm"> Resume </h1>
          </a>
        </Link>


        <Link href="#contact">
          <div className="flex items-center">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
