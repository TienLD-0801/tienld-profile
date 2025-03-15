import { ProjectData } from '@/shared/types/project';
import { NextResponse } from 'next/server';

const projects: ProjectData[] = [
  {
    id: 1,
    title:
      'Human Resource Management – Smart Employee Attendance & Payroll System',
    company: 'Vitalify Asia',
    description:
      'A comprehensive HR management system for employee tracking and payroll automation. Supports multiple check-in methods (fingerprint, facial recognition, online check-in, GPS). Automates work-hour calculations, shift management, and payroll processing.',
    technologies: ['Vuejs', 'Vuex', 'Quasar'],
    duration: '04/2022 - 06/2022',
    teamSize: 8,
  },
  {
    id: 2,
    title: 'Giving Medicine to Children – Child Health & Medication Tracking',
    company: 'Vitalify Asia',
    description:
      'Healthcare monitoring system for tracking children’s health, medication schedules, and nutrition. Provides automated reminders, health tracking, and detailed reports for parents and healthcare providers.',
    technologies: ['ReactJs', 'TypeScript', 'Framework7', 'Redux', 'Vite'],
    duration: '06/2022 - 08/2023',
    teamSize: 6,
  },
  {
    id: 3,
    title: 'Online English Teaching Platform',
    company: 'Vitalify Asia',
    description:
      'Online learning platform for English education with interactive lessons, real-time video classes, and AI-driven language assessment. Includes personalized learning paths, pronunciation analysis, and grammar correction.',
    technologies: ['Reactjs', 'TypeScript', 'Framework7', 'Redux', 'Webpack'],
    duration: '09/2022 - 10/2023',
    teamSize: 6,
  },
  {
    id: 4,
    title: 'Blood Pressure Monitoring – Health Tracking',
    company: 'Vitalify Asia',
    description:
      'A healthcare application for hospitals to monitor patient blood pressure and medication schedules. Uses PWA technology for offline support, real-time health insights, and seamless synchronization.',
    technologies: [
      'Reactjs',
      'Framework7',
      'PWA',
      'Firebase',
      'AWS Lambda Functions',
    ],
    duration: '06/2023 - 02/2024',
    teamSize: 4,
  },
  {
    id: 5,
    title: 'Hanover Bot AI – Real-Time Human Activity & Voice Recognition',
    company: 'Bnk Solution',
    description:
      'Integrates computer vision and speech recognition for real-time human activity and interaction analysis. Detects movements, behaviors, and gestures using cameras while leveraging AI-driven voice recognition.',
    technologies: ['Nuxt.js', 'TypeScript', 'Pinia', 'PostgreSQL'],
    duration: '04/2024 - 05/2024',
    teamSize: 10,
  },
  {
    id: 6,
    title: 'Temi Robot for Mall Monitoring',
    company: 'Bnk Solution',
    description:
      'Robotic system with computer vision for detecting forgotten items, fire hazards, malfunctioning lights, and overflowing trash bins. Provides real-time alerts and reporting for better mall safety and operations.',
    technologies: [
      'Reactjs',
      'TypeScript',
      'MobX',
      'Python',
      'Django',
      'Docker',
    ],
    duration: '05/2024 - 09/2024',
    teamSize: 10,
  },
  {
    id: 7,
    title: 'Chat Bot AI for Banking',
    company: 'Bnk Solution',
    description:
      'AI-powered chatbot for banking inquiries, account opening, transaction support, and loan information. Uses NLP for real-time customer assistance and integrates with banking APIs for secure interactions.',
    technologies: [
      'Reactjs',
      'TypeScript',
      'Vite',
      'Redux',
      'Docker',
      'Nginx',
      'PostgreSQL',
    ],
    duration: '06/2024 - 08/2024',
    teamSize: 10,
  },
  {
    id: 8,
    title: 'AI Document Extraction & Recognition & Signature Extraction',
    company: 'Bnk Solution',
    description:
      'AI-powered system for extracting structured data from images, PDFs, and scanned bank records. Uses OCR and NLP for text recognition, form field processing, and signature verification.',
    technologies: [
      'Reactjs',
      'TypeScript',
      'Ant Design',
      'MobX',
      'Craco',
      'NestJS',
      'PostgreSQL',
      'Microservices',
      'Docker',
    ],
    duration: '08/2024 - 02/2025',
    teamSize: 10,
  },
  {
    id: 9,
    title: 'AI-Powered Workflow Integration',
    company: 'Bnk Solution',
    description:
      'Low-code solution for building and deploying AI workflows, integrating AI agents, retrieval mechanisms, and automation processes. Designed for embedding in chatbots, document processing, and decision-making systems.',
    technologies: [
      'Reactjs',
      'TypeScript',
      'Zustand',
      'Chakra UI',
      'ShadCN UI',
      'Vite',
      'PostgreSQL',
      'Docker',
    ],
    duration: '10/2024 - 02/2025',
    teamSize: 10,
  },
  {
    id: 10,
    title: 'Metadata Management with AI-Driven Tables',
    company: 'Bnk Solution',
    description:
      'Flexible metadata management system with structured table-based organization. Enables dynamic data handling, structured storage, and seamless integration with AI-powered applications.',
    technologies: [
      'Nuxt.js',
      'TypeScript',
      'Vue-Chart.js',
      'PostgreSQL',
      'Docker',
    ],
    duration: '10/2024 - 02/2025',
    teamSize: 10,
  },
  {
    id: 11,
    title: 'AI-Powered Data & Metadata Extraction for National Archives',
    company: 'Bnk Solution',
    description:
      'AI-driven system for extracting structured data and metadata from archival documents, including scanned records and handwritten materials. Uses OCR, NLP, and knowledge retrieval for digitization and categorization.',
    technologies: [
      'Reactjs',
      'TypeScript',
      'Ant Design',
      'Zustand',
      'MySQL',
      'Python',
      'Docker',
    ],
    duration: '12/2024 - 02/2025',
    teamSize: 10,
  },
];

export async function GET(): Promise<Response> {
  try {
    console.log("Fetching data on server...");
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch projects', err },
      { status: 500 }
    );
  }
}
