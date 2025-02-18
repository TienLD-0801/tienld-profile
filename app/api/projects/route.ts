import { ProjectData } from '@/shared/types/project';

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Human Resource Management',
    company: 'Vitalify Asia',
    description:
      'A web app for managing human resources, including facial check-in, leave management, payroll processing, and performance tracking.',
    technologies: ['VueJS', 'Vuetify', 'Quasar', 'MySQL', 'AWS'],
    duration: '06/2022 - 08/2022',
    teamSize: 8,
  },
  {
    id: 2,
    title: 'Blood Pressure Monitoring',
    company: 'Vitalify Asia',
    description:
      'A web app to measure blood pressure and monitor health, mainly used in Japan. Features include data visualization, AI-based recommendations, and real-time tracking.',
    technologies: ['ReactJS', 'Framework7', 'Mobx'],
    duration: '06/2022 - 08/2022',
    teamSize: 10,
  },
  {
    id: 3,
    title: 'Giving Medicine To Children',
    company: 'Vitalify Asia',
    description:
      'A web app to help parents monitor child care progress and give medicine on time, integrated with smart reminders and health reports.',
    technologies: ['ReactJS', 'TypeScript', 'Framework7', 'Redux'],
    duration: '06/2023 - 08/2023',
    teamSize: 6,
  },
  {
    id: 4,
    title: 'Online English Teaching',
    company: 'Vitalify Asia',
    description:
      'An English learning web app for users of all ages to improve communication skills with AI-assisted tutors and real-time feedback.',
    technologies: ['ReactJS', 'NextJS', 'TypeScript', 'Redux'],
    duration: '06/2023 - 11/2023',
    teamSize: 6,
  },
  {
    id: 5,
    title: 'Blood Pressure Monitoring (PWA)',
    company: 'Vitalify Asia',
    description:
      'Enhancing an existing health monitoring project by converting to a PWA with offline features, better performance, and seamless synchronization.',
    technologies: ['ReactJS', 'Framework7', 'AWS Lambda', 'Firebase', 'PWA'],
    duration: '11/2023 - 02/2024',
    teamSize: 4,
  },
  {
    id: 6,
    title: 'Hanover AI',
    company: 'Bnk Solution',
    description:
      'A web application to test facial recognition analyzing human movement and corresponding voice, color recognition, human action gestures through camera',
    technologies: ['NuxtJs', 'TypeScript', 'Pinia'],
    duration: '04/2024 - 06/2024',
    teamSize: 10,
  },
  {
    id: 7,
    title: 'Temi Robot AI',
    company: 'Bnk Solution',
    description:
      'Implement code flow for temi robot to perform image processing tasks such as: light bulbs, lost items using multi-stream camera, and assigned tasks via JSON file',
    technologies: ['ReactJS', 'TypeScript', 'Mobx', 'Python', 'Django'],
    duration: '06/2024 - 10/2024',
    teamSize: 10,
  },
  {
    id: 8,
    title: 'Chat Bot AI',
    company: 'Bnk Solution',
    description:
      'Process workflow integrated with AI chatbot to perform data retrieval tasks provided by the Bank and provide results to serve users.',
    technologies: ['NextJS', 'TypeScript', 'Redux', 'Python'],
    duration: '10/2024 - 12/2024',
    teamSize: 10,
  },
  {
    id: 9,
    title: 'Idp AI Product',
    company: 'Bnk Solution',
    description:
      'Document verification (PDF, Image) and tracking, integrated with AI-based security and real-time monitoring, accurately verify uploaded files to analyze the accuracy of the files uploaded by users',
    technologies: ['ReactJS', 'TypeScript', 'NestJS', 'Antd Design', 'Mobx'],
    duration: '10/2024 - present',
    teamSize: 10,
  },
  {
    id: 10,
    title: 'Metadata Management System',
    company: 'Bnk Solution',
    description:
      'Metadata management system, gets information from AI to serve hierarchical management of folders and files, gets information from files to generate data for folders',
    technologies: ['ReactJS', 'TypeScript', 'NestJS', 'Antd Design', 'Zustand'],
    duration: '10/2024 - present',
    teamSize: 10,
  },
  {
    id: 11,
    title: 'Workflow Management System',
    company: 'Bnk Solution',
    description:
      'Process user-created workflows to perform a certain task, for example: defining an invoice process, or processing a bank card opening process...',
    technologies: ['ReactJS', 'TypeScript', 'NestJS', 'Antd Design', 'Zustand'],
    duration: '10/2024 - present',
    teamSize: 10,
  },
];

export async function GET(): Promise<Response> {
  return Response.json({ result: projects });
}
