export type Service = {
  title: string;
  description: string;
  cost: string;
  category: "QA" | "Development";
  subCategory: "Manual Testing" | "Automated Testing" | "QA Packages" | "Tooling & Training" | "Web Development";
};

export const services: Service[] = [
  {
    title: "Manual Testing",
    description: "Catch UI bugs and validate features before release.",
    cost: "TBD",
    category: "QA",
    subCategory: "Manual Testing",
  },
  {
    title: "Exploratory Testing",
    description: "Uncover edge cases with creative, human-led testing.",
    cost: "TBD",
    category: "QA",
    subCategory: "Manual Testing",
  },
  {
    title: "Smoke Test Automation",
    description: "Automate high-priority flows for fast deployment checks.",
    cost: "TBD",
    category: "QA",
    subCategory: "Automated Testing",
  },
  {
    title: "Full Regression Automation",
    description: "Ensure ongoing stability with full-suite automation.",
    cost: "TBD",
    category: "QA",
    subCategory: "Automated Testing",
  },
  {
    title: "API Test Automation",
    description: "Catch backend issues early with fast API test suites.",
    cost: "TBD",
    category: "QA",
    subCategory: "Automated Testing",
  },
  {
    title: "QA Strategy & Roadmap",
    description: "Audit your QA process and build a long-term plan.",
    cost: "TBD",
    category: "QA",
    subCategory: "QA Packages",
  },
  {
    title: "End-to-End QA Package",
    description: "Get a fully tailored QA solution from setup to delivery.",
    cost: "TBD",
    category: "QA",
    subCategory: "QA Packages",
  },
  {
    title: "QA Tool Development",
    description: "Custom scripts, dashboards, or automation support tools.",
    cost: "TBD",
    category: "QA",
    subCategory: "Tooling & Training",
  },
  {
    title: "Team Training",
    description: "Upskill your team with testing workshops and best practices.",
    cost: "120/hr+",
    category: "QA",
    subCategory: "Tooling & Training",
  },
 {
    title: "Wix/Squarespace Website",
    description: "Budget-friendly website setup for small businesses or portfolios.",
    cost: "600+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "WordPress Website",
    description: "Flexible site for businesses with blog or ecommerce needs.",
    cost: "1200+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Custom React/Next.js Site",
    description: "High-performance sites built from scratch for scale and brand.",
    cost: "3000+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Landing Page Build",
    description: "One-page site optimized for conversions and speed.",
    cost: "500+",
    category: "Development",
    subCategory: "Web Development",
  },
];
