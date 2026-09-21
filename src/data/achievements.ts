export type Achievement = {
  id: string;
  title: string;
  description: string;
  year: string;
};

const achievements: Achievement[] = [
  {
    id: 'helpdesk',
    title: 'Built an Enterprise HelpDesk System',
    description:
      'Built and deployed a multi-tenant ticket management backend using Spring Boot, PostgreSQL and Docker with RESTful APIs.',
    year: '2026',
  },

  {
    id: 'flowforge',
    title: 'Built FlowForge Workflow Automation SaaS',
    description:
      'Developed a graph-based automation engine with dynamic multi-step pipelines and reusable TypeScript components.',
    year: '2026',
  },

  {
    id: 'internship',
    title: 'Frontend Development Internship',
    description:
      'Worked as a Frontend Development Intern at RAFAI Technologies Pvt. Ltd. on Hidden Bites, a restaurant discovery platform.',
    year: '2025',
  },

  {
    id: 'git-score',
    title: 'Git Training — 96.67%',
    description:
      'Completed Git Training through EduPyramids, SINE and IIT Bombay with a score of 96.67%.',
    year: '2026',
  },
];

export default achievements;