export type TechnicalSkills = {
  programming: string[];
  automation: string[];
  domains: string[];
  development: string[];
  devops: string[];
  architecture: string[];
};

export type Experience = {
  role: string;
  meta: string;
  groups?: { title: string; bullets: string[] }[];
  bullets?: string[];
};

export const technicalSkills: TechnicalSkills = {
  programming: ['TypeScript', 'JavaScript (ES6+)', 'C# (.NET)', 'Java', 'Clojure', 'SQL'],
  automation: ['Playwright (Node & .NET)', 'Cypress', 'Selenium', 'WebdriverIO', 'Jest', 'xUnit', 'bUnit', 'Postman', 'JMeter'],
  domains: ['UI', 'API (REST/OpenAPI)', 'Integration', 'E2E', 'Component', 'Accessibility (WCAG)', 'Security (OWASP)', 'Database validation (Postgres)'],
  development: ['React', 'Next.js (App Router)', 'AngularJS', 'Node.js', 'Express', 'Prisma ORM', 'Supabase (Auth, Postgres, RLS)', 'Relational schema design'],
  devops: ['Azure DevOps (YAML)', 'GitHub Actions', 'CircleCI', 'Jenkins', 'Docker', 'Git'],
  architecture: ['Deterministic test data design', 'Release gating', 'Regression optimization', 'Quality metrics reporting', 'System testability influence', 'Repository analysis and static scanning (SWC-based tooling)'],
};

export const experiences: Experience[] = [
  {
    role: 'Groundswell - Principal QA Engineer',
    meta: 'Nov 2021 - Present | Remote | Government & Regulated Systems',
    groups: [
      {
        title: 'Healthcare Platform (React, Cypress, AWS, GitHub Actions)',
        bullets: [
          'Expanded automation from limited UI coverage into a multi-layer quality framework spanning UI, API, accessibility, and E2E workflows for a regulated healthcare system (~2K users).',
          'Architected scalable Cypress framework and introduced structured test data strategies, reducing flakiness and shortening regression cycles.',
          'Embedded automation into GitHub Actions release pipelines, improving time-to-detect defects and reducing production defect leakage.',
          'Owned sprint-level validation planning and influenced release go/no-go decisions through risk assessment and automation coverage analysis.',
          'Founded and facilitated a cross-organizational QA capability group and mentored engineers outside immediate team to standardize automation practices across projects.',
        ],
      },
      {
        title: 'Enterprise Platform (Current) (.NET/C#, Playwright, MySQL, Azure DevOps)',
        bullets: [
          'Established quality strategy and automation architecture on a previously manual project, defining standards across unit (xUnit), component (bUnit), integration, and E2E testing.',
          'Designed and implemented Playwright automation integrated with .NET APIs, database-backed workflows, and Azure DevOps CI release gates.',
          'Developed integration testing strategy for compound OpenAPI-driven services and influenced API/system design decisions to improve long-term testability.',
          'Conducted POC comparing Selenium WebDriver and Playwright in Okta-secured environment, influencing framework selection through architectural evaluation.',
          'Served as Capability Manager for QA engineers across projects while contributing to architectural decision authority and supporting successful production launch.',
        ],
      },
    ],
  },
  {
    role: 'Aclaimant - QA Engineer, Team Lead',
    meta: 'Nov 2018 - Jan 2023 | Remote | Insurtech SaaS',
    bullets: [
      'Architected and implemented automation framework for enterprise Clojure-based SaaS platform; led migration from WebdriverIO to Cypress to improve maintainability and adoption.',
      'Designed multi-layer test strategy (UI, API, DB) and integrated CircleCI release validation pipelines, reducing production defect leakage by over 50%.',
      'Influenced architectural decisions to improve API design and long-term testability across services.',
      'Owned sprint test planning and release risk assessment; created recurring "State of QA" reporting for leadership.',
      'Led hiring process, designed technical interview assessments, and mentored junior-to-mid QA engineers while enforcing automation code review standards.',
    ],
  },
  {
    role: 'Freelance - Full-Stack Developer & SDET',
    meta: 'Sep 2016 - Dec 2019 | Minnesota / Remote',
    bullets: [
      'Delivered 15+ production web applications (thousands to hundreds of thousands of users), designing front-end systems (Angular/JS) and collaborating on backend architecture and schema design.',
      'Built REST API integrations, implemented CI pipelines, and deployed applications to AWS environments with Docker-supported local development workflows.',
      'Designed validation strategies across UI, API, and integration layers; conducted JMeter performance testing for scalability validation.',
      'Integrated authentication systems and implemented secure access flows across distributed applications.',
      'Assembled and led ad-hoc contractor teams for larger engagements, conducting code reviews and influencing implementation planning.',
    ],
  },
  {
    role: 'TubeMogul - Software Developer in Test',
    meta: 'Jul 2015 - Sep 2016 | Emeryville, CA | AdTech Platform',
    bullets: [
      'Automated UI and API workflows for large-scale adtech platform serving millions of users.',
      'Validated ML-assisted targeting systems via API automation and database-level verification.',
      'Coordinated offshore QA execution while maintaining feature-level test ownership.',
      'Partnered within Agile teams to reduce release delays and improve defect detection timing.',
      'Supported data integrity validation across targeting and reporting systems.',
    ],
  },
  {
    role: 'Valtira - Cloud Developer',
    meta: 'Jul 2014 - Jul 2015 | Minneapolis, MN',
    bullets: [
      'Developed AngularJS-based frontend applications and Java backend servlets deployed to AWS.',
      'Supported Jenkins CI pipelines and integration testing for cloud deployments.',
      'Executed performance testing using JMeter to validate scalability.',
      'Designed cross-layer integration validation between frontend and backend services.',
      'Collaborated within cross-functional teams to deliver client-facing production systems.',
    ],
  },
];
