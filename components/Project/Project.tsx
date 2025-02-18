'use client'

import { ProjectData } from '@/shared/types/project'
import { motion } from 'framer-motion'

interface ProjectProps {
  projects: ProjectData[]
}

export default function Project({ projects }: ProjectProps) {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 p-6 border-2 border-[#c561f6]"
            whileHover={{ scale: 1.03 }}
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
    </div>
  )
}
