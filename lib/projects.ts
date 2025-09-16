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
  | 'GAME DEVELOPMENT'
  | 'CHROME EXTENSION'
  | 'WEB'
  | 'REAL-TIME'

// Uniform deep navy blue styling for all project tags
export const projectTagStyle = {
  color: 'text-blue-400',
  bgColor: 'bg-blue-900/20 border-blue-900/30'
}

export const projects: Project[] = [
  {
    id: 'thinkback',
    name: 'THINKBACK',
    description: 'Make your doomscrolling productive. Save and recall your favourite social media content with AI.',
    types: ['AI/ML', 'FULLSTACK'],
    githubUrl: 'https://github.com/IzaanQaiser/thinkback-ai',
    year: 2025,
    technologies: ['Python', 'React', 'TypeScript', 'GCP', 'Firebase'],
    featured: true
  },
  {
    id: 'speedthreads',
    name: 'SPEEDTHREADS',
    description: 'Train AI on any Reddit/X post, ask questions, and learn interactively with context-aware summaries.',
    types: ['AI/ML', 'FULLSTACK', 'CHROME EXTENSION'],
    githubUrl: 'https://github.com/IzaanQaiser/speed-threads',
    year: 2025,
    technologies: ['Python', 'React', 'TypeScript', 'JavaScript', 'GCP', 'Supabase', 'MongoDB'],
    featured: true
  },
  {
    id: 'chatapp',
    name: 'CHATAPP',
    description: 'A full-stack MERN chat app featuring real-time messaging with Socket.IO, secure user authentication, and a responsive Tailwind UI.',
    types: ['FULLSTACK', 'REAL-TIME'],
    githubUrl: 'https://github.com/IzaanQaiser/MERN-Chat-Application',
    year: 2024,
    technologies: ['React', 'TypeScript', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.IO'],
    featured: true
  },
  {
    id: 'nlp-chatbot',
    name: 'IZAAN\'S NLP CHATBOT',
    description: 'Interactive web chatbot using Cohere AI. Flask backend with modern Bootstrap UI for seamless chatting.',
    types: ['AI/ML', 'FULLSTACK'],
    githubUrl: 'https://github.com/IzaanQaiser/nlp-chatbot',
    year: 2024,
    technologies: ['Python', 'Flask', 'JavaScript', 'Cohere', 'Bootstrap'],
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
    name: 'TERRIFIC TETRIS',
    description: 'Classic Tetris game built with C# and .NET framework',
    types: ['GAME DEVELOPMENT'],
    githubUrl: 'https://github.com/IzaanQaiser/.NET-Tetris',
    year: 2023,
    technologies: ['C#', '.NET', 'WPF'],
    featured: false
  },
  {
    id: 'personal-website',
    name: 'PERSONAL WEBSITE',
    description: 'Minimal personal website built with Next.js and TypeScript',
    types: ['WEB'],
    githubUrl: 'https://github.com/IzaanQaiser/personal-website',
    year: 2025,
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: false
  },
  {
    id: 'homie-hub',
    name: 'HOMIE HUB',
    description: 'Social platform for connecting with friends and sharing experiences',
    types: ['FULLSTACK', 'WEB', 'REAL-TIME'],
    githubUrl: 'https://github.com/IzaanQaiser/Homie-Hub',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JS', 'Agora'],
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
    types: ['WEB'],
    githubUrl: 'https://github.com/IzaanQaiser/MLH-Website',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JS', 'Canvas'],
    featured: false
  },
  {
    id: 'buddy-better-study',
    name: 'BUDDY BETTER STUDY',
    description: 'Study companion application for better learning and productivity',
    types: ['CHROME EXTENSION', 'WEB'],
    githubUrl: 'https://github.com/IzaanQaiser/buddybetterstuddy',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JS', 'JSON'],
    featured: false
  },
  {
    id: 'delta-blade',
    name: 'DELTA BLADE',
    description: 'Game development project built with C#',
    types: ['GAME DEVELOPMENT'],
    githubUrl: 'https://github.com/IzaanQaiser/DeltaBlade',
    year: 2022,
    technologies: ['C#', 'Godot'],
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
