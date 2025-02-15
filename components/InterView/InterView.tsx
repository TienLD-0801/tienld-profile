import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Image from 'next/image';

export function InterView() {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-bold">
          Hello, my name is <br />
          <span className="text-[#c561f6]">Tien Le</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Creative developer passionate about crafting dynamic and engaging web
          experiences.
        </p>

        <motion.div className="mt-6 flex justify-center md:justify-start gap-4">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-[#732dd9] text-white  px-4 py-2 rounded-full cursor-pointer"
          >
            <Terminal color="#ffffff" /> About Me
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-[#732dd9]  text-white  px-4 py-2 rounded-full cursor-pointer"
          >
            <Terminal color="#ffffff" /> Project
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="h-[500px] w-[450px] relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#2d2a5f] to-[#111] border-2 border-[#732dd9] cursor-pointer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image
          width={450}
          height={500}
          src="/tienld.jpg"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
