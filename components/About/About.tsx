import { Mail, Phone, Github, Linkedin, Facebook } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
        About
      </h2>
      <div className="max-w-6xl mx-auto p-1 text-white shadow-xl relative overflow-hidden border-2 rounded-xl border-[#c561f6]">
        <div className="relative z-10 p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Le Duy Tien
          </h2>
          <p className="text-gray-400 text-lg">FrontEnd Developer</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#c561f6]">About Me</h3>
            <p className="text-gray-400 leading-relaxed mt-2">
              Passionate Frontend Developer with a strong interest in technology
              and innovation. My journey is marked by 3+ years of experience and
              around 10+ projects, including UI/UX, AI-driven solutions and
              high-performance applications.
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
              <li>UI/UX development for HR, healthcare, and e-commerce.</li>
              <li>AI-integrated products for enhanced user experience.</li>
              <li>Performance optimization with frontend architecture.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#c561f6]">Skills</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-400 mt-2">
              <li>⚡ JavaScript, Golang, Python</li>
              <li>⚡ HTML, CSS, SCSS, TypeScript</li>
              <li>⚡ React, Next.js, Vue.js, NuxtJS</li>
              <li>⚡ Node.js, NestJS, FastAPI</li>
              <li>⚡ PostgreSQL, MongoDB, Redis, Elasticsearch</li>
              <li>⚡ Git, Docker, CI/CD, AWS, Microservices</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#c561f6]">Experience</h3>
            <p className="text-gray-400 mt-2">
              🚀 Frontend Developer - Vitalify Asia (2022 - 2024)
            </p>
            <p className="text-gray-400">
              🚀 Senior Frontend Developer - Bnk Solution (2024 - Present)
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#c561f6]">Contact</h3>
            <div className="text-gray-400 space-y-2 mt-2">
              <p className="flex items-center gap-2">
                <Mail className="text-blue-400 w-5 h-5" /> duytien0801@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-green-400 w-5 h-5" /> 0329412620
              </p>
              <p className="flex items-center gap-2">
                <Github className="text-gray-400 w-5 h-5" />
                <a
                  href="https://github.com/TienLD-0801"
                  target="_blank"
                  className="text-blue-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin className="text-blue-500 w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/tienld"
                  target="_blank"
                  className="text-blue-400 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Facebook className="text-blue-600 w-5 h-5" />
                <a
                  href="https://www.facebook.com/leduytien0801"
                  target="_blank"
                  className="text-blue-400 hover:text-white transition"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
