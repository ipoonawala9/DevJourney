export type SkillCategory = {
  title: string;
  skills: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

export const profile = {
  name: 'Ibrahim Poonawala',

  role: 'Full Stack Developer · Final Year IT Student',

  location: 'Pune, Maharashtra',

  about:
    'Final year IT student at MIT ADT University specialising in Software and Mobile Application Development. I am passionate about full-stack development, with experience across Java, Spring Boot, React, TypeScript, Node.js and React Native. I enjoy building well-structured products and making thoughtful engineering decisions.',

  education: [
    {
      id: 'btech',
      degree: 'B.Tech – Information Technology',
      institution: 'MIT ADT University',
      duration: '2023 – 2027',
      description:
        'Specialisation in Software and Mobile Application Development. Minor in UX Design. CGPA: 7.93.',
    },

    {
      id: 'hsc',
      degree: 'HSC (12th)',
      institution: 'SM Choksey Jr. College',
      duration: '2021 – 2023',
      description:
        'Maharashtra HSC Board · 73.6%',
    },

    {
      id: 'icse',
      degree: 'ICSE (10th)',
      institution: "The Bishop's School Camp",
      duration: '2009 – 2021',
      description:
        'ICSE Board · 93.6%',
    },
  ] as EducationItem[],

  skills: [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
      ],
    },

    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Spring Boot',
        'REST APIs',
        'Spring MVC',
        'Kafka',
      ],
    },

    {
      title: 'Database',
      skills: [
        'MySQL',
        'Firebase',
        'PostgreSQL',
      ],
    },

    {
      title: 'DevOps & Tools',
      skills: [
        'Docker',
        'Git',
        'Postman',
        'Linux',
      ],
    },

    {
      title: 'Languages',
      skills: [
        'JavaScript',
        'Java',
        'TypeScript',
        'Python',
      ],
    },

    {
      title: 'Concepts',
      skills: [
        'RBAC',
        'Design Patterns',
        'UI/UX',
        'Workflow Automation',
      ],
    },
  ] as SkillCategory[],

  spokenLanguages: [
    'English',
    'Hindi',
    'Gujarati',
    'Marathi',
    'German (A1)',
  ],
};