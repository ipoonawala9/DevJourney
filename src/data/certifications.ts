export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
};

const certifications: Certification[] = [
  {
    id: 'node-express',
    title: 'Developing Back-End Apps with Node.js & Express',
    issuer: 'IBM / Coursera',
    year: 'Feb 2026',
    description:
      'Backend development certification focused on Node.js and Express.',
  },

  {
    id: 'node-mongodb',
    title:
      'Node.js & MongoDB: Developing Back-end Database Applications',
    issuer: 'IBM / Coursera',
    year: 'Apr 2026',
    description:
      'Backend database application development using Node.js and MongoDB.',
  },

  {
    id: 'backend-api',
    title: 'Backend Development and API Creation',
    issuer: 'Packt / Coursera',
    year: 'Feb 2026',
    description:
      'Certification focused on backend development and API creation.',
  },

  {
    id: 'selenium-frameworks',
    title: 'Selenium Automation and Testing Frameworks',
    issuer: 'Packt / Coursera',
    year: 'Apr 2026',
    description:
      'Automation and testing using Selenium frameworks.',
  },

  {
    id: 'selenium-intro',
    title: 'Introduction to Selenium',
    issuer: 'Coursera',
    year: 'Feb 2026',
    description:
      'Introduction to automated software testing with Selenium.',
  },

  {
    id: 'selenium-java',
    title:
      'Create Your First Automation Script Using Selenium & Java',
    issuer: 'Coursera',
    year: 'Feb 2026',
    description:
      'Created automation scripts using Selenium and Java.',
  },

  {
    id: 'git',
    title: 'Git Training',
    issuer: 'EduPyramids, SINE, IIT Bombay',
    year: 'Apr 2026',
    description:
      'Git training completed with a score of 96.67%.',
  },

  {
    id: 'figma',
    title: 'Create a High-Fidelity Prototype with Figma',
    issuer: 'Coursera',
    year: 'Apr 2026',
    description:
      'High-fidelity prototyping and interface design using Figma.',
  },

  {
    id: 'miro',
    title: 'Create a Product Design Brainstorming with Miro',
    issuer: 'Coursera',
    year: 'Apr 2026',
    description:
      'Product design brainstorming and collaboration using Miro.',
  },
];

export default certifications;