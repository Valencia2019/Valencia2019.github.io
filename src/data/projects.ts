export type Project = {
    title: string;
    description: string;
    imageSrc: string;
    demo: string;
    github: string;
    tech: string[];
};

export const projects: Project[] = [
    {
        title:"My Portfolio",
        tech:["Playwright","Jest", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        imageSrc:"/project-pictures/portfolio-home.png",
        github:"https://github.com/Valencia2019/Valencia2019.github.io",
        demo:"https://valencia2019.github.io/",
        description:"This is the current portfolio you're viewing. It's built with Next.js and uses Framer Motion for animations, Tailwind for styling, Jest for unit testing, and Playwright for end-to-end testing."
    },
    {
        title:"Cypress Test Suite",
        tech:["Cypress.io"],
        imageSrc:"/project-pictures/cypress-playground-report.png",
        github:"https://github.com/Valencia2019/cypress-playground",
        demo:"/project/cypress-playground",
        description:"The test suite in this GitHub Repository represents my 'bread and butter' as far as test automation goes since it's built on the Cypress.io framework and I use it daily in my current role."
    },
    {
        title:"Playwright Python Test Suite",
        tech:["Playwright", "Python"],
        imageSrc:"",
        github:"https://github.com/Valencia2019/playwright-playground",
        demo:"https://github.com/Valencia2019/playwright-playground",
        description:"This GitHub repository holds a testsuite that is build on the Playwright automation framework using Python. I chose python because I thought it would be fun to step out of my comfort zone in javascript."
    },
    {
        title:"Python Webdriver Testsuite",
        tech:["Python", " Selenium WebDriver"],
        imageSrc:"",
        github:"https://github.com/Valencia2019/python-web-suite",
        demo:"https://github.com/Valencia2019/python-web-suite",
        description:"I created this project when I first began to look into using python for automated testing. Since Selenium Webdriver is the basis for most frameworks, I thought it would be interesting to use it to build a python test suite. I spent a day or so on this testsuite before I realized I didn't like it at all. I've included it here because I thought it would be an interesting contrast in my work."
    }

];