export interface Project {
  id: string
  name: string
  description: string
  types: ProjectType[]
  githubUrl: string
  liveUrl?: string
  year: number
  technologies: string[]
  featured?: boolean
}

export type ProjectType = 
  | 'AI/ML'
  | 'FULLSTACK'
  | 'FRONTEND'
  | 'DESKTOP'
  | 'MOBILE'
  | 'SYSTEMS'
  | 'DEVOPS'
  | 'EDUCATIONAL'
  | 'TOOLS'
  | 'DATA'

// Uniform deep navy blue styling for all project tags
export const projectTagStyle = {
  color: 'text-blue-400',
  bgColor: 'bg-blue-900/20 border-blue-900/30'
}

export const projects: Project[] = [
  {
    id: 'thinkback-ai',
    name: 'THINKBACK.AI',
    description: 'AI-powered content management system for personal growth and reflection',
    types: ['AI/ML', 'FULLSTACK'],
    githubUrl: 'https://github.com/IzaanQaiser/thinkback-ai',
    year: 2024,
    technologies: ['Python', 'AI/ML', 'Content Management'],
    featured: true
  },
  {
    id: 'speed-threads',
    name: 'SPEED THREADS',
    description: 'Save time summarizing Reddit and X (Twitter) threads using AI',
    types: ['AI/ML', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/speed-threads',
    year: 2024,
    technologies: ['JavaScript', 'AI', 'Web Scraping'],
    featured: true
  },
  {
    id: 'mern-chat',
    name: 'MERN CHAT APP',
    description: 'Real-time chat application built with MongoDB, Express, React, and Node.js',
    types: ['FULLSTACK', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/MERN-Chat-Application',
    year: 2024,
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    featured: true
  },
  {
    id: 'ai-face-detection',
    name: 'AI FACE DETECTION',
    description: 'Computer vision project for real-time face detection using machine learning',
    types: ['AI/ML', 'DESKTOP'],
    githubUrl: 'https://github.com/IzaanQaiser/AI-FACE-DETECTION',
    year: 2024,
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    featured: false
  },
  {
    id: 'nlp-chatbot',
    name: 'NLP CHATBOT',
    description: 'Natural language processing chatbot for intelligent conversations',
    types: ['AI/ML', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/nlp-chatbot',
    year: 2024,
    technologies: ['HTML', 'JavaScript', 'NLP', 'AI'],
    featured: false
  },
  {
    id: 'fake-news-detector',
    name: 'FAKE NEWS DETECTOR',
    description: 'LSTM model to accurately detect fake news samples using deep learning',
    types: ['AI/ML', 'DATA'],
    githubUrl: 'https://github.com/IzaanQaiser/RNN-LSTM-Fake-News-Detector',
    year: 2024,
    technologies: ['Python', 'LSTM', 'Deep Learning', 'NLP'],
    featured: false
  },
  {
    id: 'dotnet-tetris',
    name: '.NET TETRIS',
    description: 'Classic Tetris game built with C# and .NET framework',
    types: ['DESKTOP', 'EDUCATIONAL'],
    githubUrl: 'https://github.com/IzaanQaiser/.NET-Tetris',
    year: 2023,
    technologies: ['C#', '.NET', 'Game Development'],
    featured: false
  },
  {
    id: 'personal-website',
    name: 'PERSONAL WEBSITE',
    description: 'Minimal personal website built with Next.js and TypeScript',
    types: ['FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/personal-website',
    year: 2024,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 'homie-hub',
    name: 'HOMIE HUB',
    description: 'Social platform for connecting with friends and sharing experiences',
    types: ['FULLSTACK', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/Homie-Hub',
    year: 2022,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    featured: false
  },
  {
    id: 'markbook-assignment',
    name: 'MARKBOOK ASSIGNMENT',
    description: 'Educational project for managing student grades and academic records',
    types: ['EDUCATIONAL', 'DESKTOP'],
    githubUrl: 'https://github.com/IzaanQaiser/markbookAssignment',
    year: 2022,
    technologies: ['C#', '.NET', 'Desktop Application'],
    featured: false
  },
  {
    id: 'mlh-website',
    name: 'MLH WEBSITE',
    description: 'HTML5 canvas boilerplate with ES6 and live-reloading with BrowserSync',
    types: ['TOOLS', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/MLH-Website',
    year: 2022,
    technologies: ['HTML5', 'Canvas', 'ES6', 'BrowserSync'],
    featured: false
  },
  {
    id: 'buddy-better-study',
    name: 'BUDDY BETTER STUDY',
    description: 'Study companion application for better learning and productivity',
    types: ['EDUCATIONAL', 'FRONTEND'],
    githubUrl: 'https://github.com/IzaanQaiser/buddybetterstuddy',
    year: 2022,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    featured: false
  },
  {
    id: 'delta-blade',
    name: 'DELTA BLADE',
    description: 'Game development project built with C#',
    types: ['DESKTOP', 'EDUCATIONAL'],
    githubUrl: 'https://github.com/IzaanQaiser/DeltaBlade',
    year: 2022,
    technologies: ['C#', 'Game Development'],
    featured: false
  }
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByType = (type: ProjectType): Project[] => {
  return projects.filter(project => project.types.includes(type))
}

export const getAllProjectTypes = (): ProjectType[] => {
  const allTypes = projects.flatMap(project => project.types)
  return Array.from(new Set(allTypes))
}
