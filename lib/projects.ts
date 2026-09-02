export interface Project {
  id: string
  name: string
  description: string
  types: ProjectType[]
  githubUrl?: string
  devpostUrl?: string
  liveUrl?: string
  year: number
  technologies: string[]
  featured?: boolean
  hackathonWinner?: boolean
  status?: 'IN DEVELOPMENT'
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

export const projectTagStyle = {
  color: 'text-blue-400',
  bgColor: 'bg-blue-900/20 border-blue-900/30'
}

export const projects: Project[] = [
  {
    id: 'ock',
    name: 'OCK',
    description: 'A screen-aware, voice-first AI teaching assistant that uses course materials, live screen context, and multimodal models to answer questions while you work.',
    types: ['AI/ML', 'DESKTOP', 'TOOLS'],
    devpostUrl: 'https://devpost.com/software/ock',
    year: 2026,
    technologies: ['Gemini', 'ElevenLabs', 'Swift', 'Wispr'],
    featured: true
  },
  {
    id: 'thinkback',
    name: 'THINKBACK',
    description: 'An AI knowledge-capture system for saving articles, videos, and social content, then transcribing, summarizing, embedding, and rediscovering it through semantic search.',
    types: ['AI/ML', 'FULLSTACK'],
    githubUrl: 'https://github.com/IzaanQaiser/thinkback-ai',
    year: 2025,
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Firebase', 'GCP', 'OpenAI API', 'Docker'],
    featured: true
  },
  {
    id: 'speedthreads',
    name: 'SPEEDTHREADS',
    description: 'A browser extension and FastAPI backend for analyzing live Reddit and social threads with streaming responses and bounded LLM tool-calling workflows.',
    types: ['AI/ML', 'FULLSTACK', 'CHROME EXTENSION'],
    githubUrl: 'https://github.com/IzaanQaiser/speed-threads',
    year: 2025,
    technologies: ['React', 'TypeScript', 'Chrome MV3', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'OpenAI API'],
    featured: true
  },
  {
    id: 'bet',
    name: 'BET',
    description: 'A capacity-aware obligation engine that turns SMS and MMS input into structured tasks, calendar actions, reminders, and timely suggestions through a durable service pipeline.',
    types: ['AI/ML', 'SYSTEMS', 'TOOLS'],
    githubUrl: 'https://github.com/IzaanQaiser/bet',
    year: 2026,
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'GCP', 'Twilio', 'Gemini', 'Terraform'],
    status: 'IN DEVELOPMENT'
  },
  {
    id: 'court-vision',
    name: 'COURT VISION',
    description: 'An in-development NBA game companion with Sportradar data ingestion and React views for exploring live games and evidence-backed explanations.',
    types: ['DATA', 'FULLSTACK', 'REAL-TIME'],
    githubUrl: 'https://github.com/IzaanQaiser/court-vision',
    year: 2025,
    technologies: ['React', 'JavaScript', 'Vite', 'Express', 'Kafka', 'Sportradar'],
    status: 'IN DEVELOPMENT'
  },
  {
    id: 'scoutreach',
    name: 'SCOUTREACH',
    description: 'An in-development backend for job research and outreach, with typed API foundations, relational data models, and durable background jobs.',
    types: ['DATA', 'FULLSTACK', 'TOOLS'],
    githubUrl: 'https://github.com/IzaanQaiser/scoutreach',
    year: 2026,
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'pytest'],
    status: 'IN DEVELOPMENT'
  },
  {
    id: 'personal-mcp-chatbot',
    name: 'LIFE MCP HUB',
    description: 'An in-development MCP server and Supabase-backed personal data layer with typed tools for schedules, deadlines, conflicts, email context, and daily briefings.',
    types: ['AI/ML', 'SYSTEMS', 'TOOLS'],
    githubUrl: 'https://github.com/IzaanQaiser/personal-mcp-chatbot',
    year: 2026,
    technologies: ['TypeScript', 'MCP', 'Supabase', 'PostgreSQL', 'Zod', 'Vitest'],
    status: 'IN DEVELOPMENT'
  },
  {
    id: 'history-of-mlh',
    name: "HISTORY OF MLH: A HACKER'S DREAM",
    description: "An interactive history of Major League Hacking presented through a responsive timeline and an 8-bit side-scrolling game.",
    types: ['WEB', 'GAME DEVELOPMENT'],
    devpostUrl: 'https://devpost.com/software/history-of-mlh',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    hackathonWinner: true
  },
  {
    id: 'studious',
    name: 'STUDIOUS',
    description: 'A browser-based calendar for adding events and visualizing busy days with a workload heat map.',
    types: ['WEB', 'EDUCATIONAL'],
    devpostUrl: 'https://devpost.com/software/studious-v62gmn',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    hackathonWinner: true
  },
  {
    id: 'homie-hub',
    name: 'HOMIE HUB',
    description: 'A matchmaking video-chat application with user accounts, interest prompts, and mobile access through a Swift WebKit wrapper.',
    types: ['FULLSTACK', 'WEB', 'REAL-TIME'],
    devpostUrl: 'https://devpost.com/software/homie-hub',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Swift', 'Firebase', 'Agora'],
    hackathonWinner: true
  },
  {
    id: 'plantup',
    name: 'PLANTUP',
    description: 'A plant-care tracker with a searchable catalog, progress timelines, photo logs, and SMS care reminders.',
    types: ['FULLSTACK', 'WEB'],
    devpostUrl: 'https://devpost.com/software/plantup',
    year: 2022,
    technologies: ['React', 'Tailwind CSS', 'JSON Server', 'Twilio'],
    hackathonWinner: true
  },
  {
    id: 'buddy-better-studdy',
    name: 'BUDDY BETTER STUDDY',
    description: 'A Chrome extension that tracks visits to user-selected blocked sites during study sessions and responds with preset consequences.',
    types: ['CHROME EXTENSION', 'EDUCATIONAL', 'TOOLS'],
    devpostUrl: 'https://devpost.com/software/buddy-better-studdy',
    year: 2022,
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    hackathonWinner: true
  }
]

export const getProjectPrimaryUrl = (project: Project): string => {
  return project.githubUrl ?? project.devpostUrl ?? project.liveUrl ?? '#'
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getAllProjectTypes = (): ProjectType[] => {
  const allTypes = projects.flatMap(project => project.types)
  return Array.from(new Set(allTypes))
}
