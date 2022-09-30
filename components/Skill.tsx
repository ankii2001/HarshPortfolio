import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
  skill : Skill; 
  directionLeft?: boolean;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
          x: directionLeft ? -130 : 130,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 1 }}
        src = {urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover p-1.5 w-16 md:w-20 h-16 md:h-20 filter group-hover:grayscale
        transition duration-300 ease-in-out" 
        />
        <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300
        ease-in-out group-hover:bg-white w-16 md:w-20 h-16 md:h-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;