'use client';

import { SESSION_ABOUT, SESSION_PROJECT } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Image from 'next/image';

export default function InterView() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('Scrolling to:', sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Section not found:', sectionId);
    }
  };

  return (
    <section className="p-6 flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto text-center md:text-left">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, my name is <br />
          <span className="text-[#c561f6]">Tien Le</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-400">
          Creative developer passionate about crafting dynamic and engaging web
          experiences.
        </p>

        <motion.div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-[#732dd9] text-white px-4 py-2 rounded-full cursor-pointer"
            onClick={() => scrollToSection(SESSION_ABOUT)}
          >
            <Terminal color="#ffffff" /> About Me
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-[#732dd9] text-white px-4 py-2 rounded-full cursor-pointer"
            onClick={() => scrollToSection(SESSION_PROJECT)}
          >
            <Terminal color="#ffffff" /> Project
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="w-[300px] h-[350px] sm:w-[250px] sm:h-[300px] md:w-[450px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#2d2a5f] to-[#111] border-2 border-[#732dd9] cursor-pointer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image
          src="/tienld.jpg"
          alt="Avatar"
          width={450}
          height={500}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
