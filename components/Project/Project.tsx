'use client';

import { useEffect, useState } from 'react';
import { ProjectData } from '@/shared/types/project';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectProps {
  projects: ProjectData[];
}

export default function Project({ projects }: Readonly<ProjectProps>) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto relative">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...projects].reverse().map((item) => (
          <motion.div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 p-6 border-2 border-[#c561f6] cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(item)}
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.company}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              🕒 {item.duration} | 👥 Team Size: {item.teamSize}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-md z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-500 text-sm">{selectedProject.company}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                🕒 {selectedProject.duration} | 👥 Team Size:{' '}
                {selectedProject.teamSize}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
