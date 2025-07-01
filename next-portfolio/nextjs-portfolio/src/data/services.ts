export type Service = {
  title: string;
  description: string;
  cost: string;
  category: "QA" | "Development";
  subCategory: "Manual Testing" | "Automated Testing" | "QA Packages" | "Tooling" | "Consulting & Training" | "Web Development";
  optionalAddOns?: string[];
};

export const services: Service[] = [
  {
    title: "UI Testing",
    description: "Catch UI bugs and validate features, progects, and/or apps.",
    cost: "50/hr",
    category: "QA",
    subCategory: "Manual Testing",
    optionalAddOns: ["Documented test cases"]
  },
  {
    title: "Exploratory Testing",
    description: "Uncover edge cases with creative, human-led testing.",
    cost: "50/hr",
    category: "QA",
    subCategory: "Manual Testing",
  },
  {
    title: "Smoke Test Automation",
    description: "Automate high-priority flows for fast deployment checks.",
    cost: "800+",
    category: "QA",
    subCategory: "Automated Testing",
    optionalAddOns: ["CI/CD Test Integration"]
  },
  {
    title: "Full Regression Automation",
    description: "Ensure ongoing stability with full-suite automation.",
    cost: "2500+",
    category: "QA",
    subCategory: "Automated Testing",
    optionalAddOns: ["CI/CD Test Integration"]
  },
  {
    title: "API Test Automation",
    description: "Catch backend issues early with fast API test suites.",
    cost: "500+",
    category: "QA",
    subCategory: "Automated Testing",
    optionalAddOns: ["CI/CD Test Integration"]
  },
  {
    title: "QA Strategy & Roadmap",
    description: "Audit your QA process and build a long-term plan.",
    cost: "500+",
    category: "QA",
    subCategory: "Consulting & Training",
  },
  {
    title: "End-to-End QA Package",
    description: "Get a fully tailored QA solution from setup to delivery.",
    cost: "4500+",
    category: "QA",
    subCategory: "QA Packages",
  },
  {
    title: "QA Tool Development",
    description: "Custom scripts, dashboards, or automation support tools.",
    cost: "1000+",
    category: "QA",
    subCategory: "Tooling",
  },
  {
    title: "Team Training",
    description: "Upskill your team with testing workshops and best practices.",
    cost: "120/hr",
    category: "QA",
    subCategory: "Consulting & Training",
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
    cost: "5000+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Landing Page Build",
    description: "One-page site optimized for conversions and speed.",
    cost: "250+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Website Audit",
    description: "Accessibility, performance, and SEO audit.",
    cost: "350",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Website Redesign",
    description: "Revamp an existing site with new design or functionality.",
    cost: "2500+",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "Ongoing Maintenance",
    description: "Monthly retainer for updates, backups, fixes.",
    cost: "300/month",
    category: "Development",
    subCategory: "Web Development",
  },
  {
    title: "CMS Setup & Training",
    description: "Setup CMS like WordPress with a how-to guide or walkthrough.",
    cost: "800+",
    category: "Development",
    subCategory: "Web Development",
  }
];
