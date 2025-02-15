import { motion } from 'framer-motion';
import Image from 'next/image';

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

export function Project() {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              width={400}
              height={250}
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
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
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 dark:text-blue-400 font-medium mt-4 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
