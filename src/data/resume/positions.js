const positions = [
  {
    company: 'Citrix Systems',
    position: 'Software Engineer 2',
    link: 'https://citrix.com',
    daterange: 'August 2019 - Present',
    points: [
      'Designed and developed an end-to-end dashboard to monitor releases, bugs and security critical issues across all teams at Citrix using React, Ant Design framework and C#.',
      'Developed a schedule based email notification service that allows users to create reusable templates, schedule one-time/recurring emails, generate alerts, etc and integrated this functionality in the dashboard.',
      'Wrote automation scripts using Python (Pandas, OpenPyXL, Jira\'s REST API) to read data from Excel sheets, perform text processing, validate the data from Jira and modify the Excel sheets accordingly. The automation saves Program Managers 5-6 hours of work per quarter. Integrated the scripts into the dashboard for self-service.',
      'Created several front-end modules for the dashboard such as a drag-and-drop modifiable, hierarchical menu for business logic using React.',
      'Wrote scripts to automate mundane program management tasks like tracking releases using Python and Jira\'s REST API',
    ],
  },
  {
    company: 'Virginia Tech',
    position: 'Graduate Teaching Assistant',
    link: 'https://ece.vt.edu/',
    daterange: 'August 2017 - December 2018',
    points: [
      'Created tutorials and GitHub repositories with boilerplate peripheral integration for MSP-432 Microcontroller. Developed projects like car racing game, Tic-Tac-Toe etc. on the Microcontroller using C.',
      'Held 10 office hours a week to assist undergraduate students with assignments, projects, grading and coursework.',
    ],
  },
  {
    company: 'VeriSign',
    position: 'Software Engineering Intern',
    link: 'http://enveritas.org',
    daterange: 'May 2018 - August 2018',
    points: [
      'Developed the frontend and backend of a bulk domain name lookup system using Angular JS and Java.',
      'Improved lookup speed by 2.5 times by using local storage, caching and data pre-fetching techniques. Enhanced functionality of the tool by identifying bottlenecks and redundant function calls.',
      'Automated the task of creating bi-monthly Confluence pages based on Sprint data using Confluence and Jira\'s REST API and Python.',
    ],
  },
];

export default positions;
