'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SquareTerminal } from 'lucide-react';
import Image from 'next/image';
import ControlPanel from '@/components/ControlPanel/ControlPanel';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/shared/constants/router';
import { SOCIAL_NETWORK_COLOR } from '@/shared/constants';

const portfolioItems = [
  {
    id: 1,
    title: 'Project Management App',
    description:
      'A full-stack web application for managing projects and tasks.',
    imageUrl: '/project1.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com/example/project1',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory.',
    imageUrl: '/project2.jpg',
    technologies: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    link: 'https://github.com/example/project2',
  },
];

export default function PortfolioPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'
      } min-h-screen transition-all duration-500`}
    >
      <header className="p-3 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push(PAGE_ROUTES.ROOT)}
        >
          <SquareTerminal color={SOCIAL_NETWORK_COLOR} size={24} />
          <span className="text-2xl font-bold tracking-wide">Portfolio</span>
        </div>
        <ControlPanel darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <section className="p-6 text-center">
        <motion.img
          src="/tienld.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-blue-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h2 className="text-3xl font-semibold mt-4">Le Duy Tien</h2>
        <p className="text-gray-500 text-lg">Full Stack Developer</p>
      </section>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="border rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white p-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                width={200}
                height={200}
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-400 mb-2">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
