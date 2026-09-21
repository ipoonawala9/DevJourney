export type JourneyItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  technologies: string[];
};

const journey: JourneyItem[] = [
  {
    id: 'school',
    year: '2009 – 2021',
    title: "The Bishop's School",
    description:
      'Completed my school education at The Bishop’s School, Camp, Pune, and graduated with 93.6% in the ICSE board examination.',
    technologies: ['ICSE', 'School Education'],
  },

  {
    id: 'junior-college',
    year: '2021 – 2023',
    title: 'SM Choksey Junior College',
    description:
      'Completed my HSC education at SM Choksey Junior College, Pune, graduating with 73.6% from the Maharashtra HSC Board.',
    technologies: ['HSC', 'Science'],
  },

  {
    id: 'btech',
    year: '2023 – 2027',
    title: 'B.Tech in Information Technology',
    description:
      'Started my B.Tech in Information Technology at MIT ADT University, specialising in Software and Mobile Application Development with a minor in UX Design.',
    technologies: [
      'Information Technology',
      'Software Development',
      'Mobile Applications',
      'UX Design',
    ],
  },

  {
    id: 'java',
    year: '2023 – 2024',
    title: 'Java Programming',
    description:
      'Built my programming foundation through Java, object-oriented programming and core software development concepts during my first and second semesters.',
    technologies: [
      'Java',
      'OOP',
      'Data Structures',
      'Programming Fundamentals',
      'Spring Boot',
    ],
  },

  {
    id: 'ios',
    year: '2024',
    title: 'iOS Development',
    description:
      'Explored mobile application development on iOS during my third semester, learning the fundamentals of building applications for Apple platforms.',
    technologies: [
      'iOS',
      'Mobile Development',
      'Swift',
    ],
  },

  {
    id: 'android',
    year: '2025',
    title: 'Android Development',
    description:
      'Expanded into Android application development during my fourth semester, working with mobile application architecture, Firebase and Android development workflows.',
    technologies: [
      'Android',
      'Java',
      'Firebase',
    ],
  },

  {
    id: 'frontend',
    year: '2025',
    title: 'Full Stack · Frontend Development',
    description:
      'Moved into web and full-stack development during my fifth semester, building responsive interfaces and learning how frontend applications communicate with backend services.',
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
    ],
  },

  {
    id: 'backend',
    year: '2026',
    title: 'Full Stack · Backend Development',
    description:
      'Focused on backend engineering during my sixth semester, working with APIs, databases, authentication and production-oriented application architecture.',
    technologies: [
      'Java', 'Node.js', 'Express.js', 'MySQL', 'Redis',
      'Spring Boot',
      'PostgreSQL',
      'REST APIs',
      'Docker',
    ],
  },

  {
    id: 'cross-platform-immersive',
    year: '2026 – Present',
    title: 'Cross-Platform & Immersive Development',
    description:
      'Currently exploring cross-platform mobile development and immersive applications while continuing to build production-oriented software projects.',
    technologies: [
      'React Native',
      'TypeScript',
      'Unity',
      'AR',
      'Immersive Applications',
    ],
  },
];

export default journey;