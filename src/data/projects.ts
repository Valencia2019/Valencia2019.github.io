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
        title:"Cypress Test Suite",
        tech:["Cypress.io"],
        imageSrc:"/live-demos/cypress-playground.png",
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