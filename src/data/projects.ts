export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 'helpdesk',
    title: 'HelpDesk',
    description:
      'A support ticket management system for organizations to create, assign and track customer support tickets.',
    longDescription:
      'A full-stack support ticket management platform designed to help organizations manage customer support requests through a centralized system.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
    ],
    category: 'Backend / Full Stack',
    status: 'In Development',
    features: [
      'Create and manage support tickets',
      'Assign tickets to support agents',
      'Track ticket status and priority',
      'Add comments to tickets',
      'REST API architecture',
    ],
    githubUrl:
      'https://github.com/ipoonawala9/helpdesk-ticketing-system',
    liveUrl: '',
  },

  {
    id: 'flowforge',
    title: 'FlowForge',
    description:
      'A self-hosted workflow automation platform for visually building and executing automated workflows.',
    longDescription:
      'A full-stack workflow automation platform inspired by tools such as Zapier and n8n. Users can visually build workflows with triggers, conditions, delays and multi-channel actions, while executions are processed through a Redis-backed job queue.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'Redis',
      'Docker',
    ],
    category: 'Full Stack / Automation',
    status: 'Completed',
    features: [
      'Visual drag-and-drop workflow builder',
      'Conditional workflow branching',
      'Webhook and scheduled triggers',
      'Non-blocking delay nodes',
      'Email and WhatsApp actions',
      'Execution history',
      'JWT authentication',
      'Redis-backed job queue',
    ],
    githubUrl:
      'https://github.com/ipoonawala9/FlowForge',
    liveUrl:
      'https://flow-forge-alpha-three.vercel.app/',
  },

  {
    id: 'spraylite',
    title: 'Spraylite Storefront',
    description:
      'A responsive e-commerce storefront with interactive product experiences, cart, wishlist and product discovery.',
    longDescription:
      'A responsive e-commerce frontend built for Spraylite, featuring an interactive product hero, product filtering, sorting, quick views, cart and wishlist functionality, nutrition comparisons, recipes and responsive layouts.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
    ],
    category: 'E-Commerce / Frontend',
    status: 'Completed',
    features: [
      'Interactive product hero',
      'Product filtering and sorting',
      'Quick product view',
      'Shopping cart with quantity controls',
      'Wishlist functionality',
      'Cart and wishlist persistence',
      'Responsive design',
      'Accessibility-focused UI',
    ],
    githubUrl:
      'https://github.com/ipoonawala9/spraylite-e-commerce',
    liveUrl:
      'https://spraylite-e-commerce.vercel.app/',
  },

  {
    id: 'clip-vault',
    title: 'Clip Vault',
    description:
      'A cross-platform clipboard manager that automatically monitors and organizes clipboard history.',
    longDescription:
      'A cross-platform clipboard management application that monitors clipboard activity and stores useful clipboard history for quick access.',
    technologies: [
      'React Native',
      'TypeScript',
      'Android',
    ],
    category: 'Mobile Application',
    status: 'In Development',
    features: [
      'Automatic clipboard monitoring',
      'Clipboard history',
      'Clipboard type detection',
      'Persistent local storage',
      'Cross-platform architecture',
    ],
    githubUrl:
      'https://github.com/ipoonawala9/clipvault',
    liveUrl: '',
  },

  {
    id: 'mlops-api',
    title: 'MLOps Prediction API',
    description:
      'A machine learning prediction service exposed through a REST API and prepared for deployment.',
    longDescription:
      'A machine learning application that exposes a trained model through a REST API, providing a foundation for production-oriented machine learning deployment.',
    technologies: [
      'Python',
      'FastAPI',
      'Machine Learning',
      'Docker',
    ],
    category: 'Machine Learning',
    status: 'Completed',
    features: [
      'Machine learning prediction endpoint',
      'REST API',
      'Model serving',
      'Dockerized application',
      'Deployment-ready architecture',
    ],
    githubUrl:
      'https://github.com/ipoonawala9/MLOps',
    liveUrl: '',
  },
];

export default projects;