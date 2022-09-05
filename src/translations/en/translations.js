const TRANSLATIONS_EN = {
  // NAVBAR TEXTS
  about: "About",
  experience: "Experience",
  work: "Work",
  contact: "Contact",
  resume: "Resume",

  // HOMEPAGE TEXTS
  homePagePreTitle: "Hi, my name is ",
  homePageFullName: "Myriam Anki",
  homePageWhoami: "I am a student at 42Paris",
  homePageSmallIntro:
    "I was a web fullstack developper in Laravel Angular Ionic, now I am exploring new horizons.",

  // ABOUTPAGE TEXTS
  aboutPageTitle: "About me",
  aboutPageParagraphs: [
    "Hello! I'm Myriam, a passionate spirit with a strong desire to learn. I aspire to contribute to the creation of great tools that will help improve the lives of those around me.",
    "After almost two years of experience as a Fullstack web developer, I decided to go back to school to learn more about the other fields in computer science.",
    "I am currently doing projects at 42Paris to learn more about security, data, algorithm, machine learning... I am looking for a 6-months internship for February 2023.",
  ],
  aboutPageTechnoListIntro:
    "Here are a few technologies I’ve been working with:",
  aboutPageTechnoList: [
    "Laravel (PHP)",
    "Angular Ionic (Typescript)",
    "React (Javascript)",
    "Python3",
    "C",
    "SQL",
  ],

  // EXPERIENCEPAGE TEXTS
  experiencePageTitle: "Where I've Worked",
  experiencePageJobs: [
    {
      tabName: "Audika Group",
      jobTitle: "Freelance - Misc dev on ERP in PHP",
      companyName: "Audika Group",
      companyLink: "https://www.audika.fr/",
      timeframe: "January 2022 -  March 2022",
      content: [
        "Writing and modifying SQL requests",
        "Creation of new features on the ERP in PHP",
        "Debug",
      ],
    },
    {
      tabName: "Pongo",
      jobTitle: "Laravel Angular Ionic fullstack developper",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "November 2020 -  August 2021",
      content: [
        "General tablet app debugg and implementation of new features",
        "Management of package loss on unstable wifi connections",
        "Implementation of several automations with Ionic Appflow: native builds generation (APK, AAB & IPA) synchronized with GitHub, web preview, live upate (update of tablets without going through the app store validation), app publication on the Android and Apple stores",
        "Autologin: implementation of the tablet data recovery through its UDID, user login, restaurant selection and connection to different websockets",
        "Implementation of different PUSHER channels (websockets): local storage update (color, texts, media ...), pos integration (recover your points after a payment)",
        "International numbers: keyboard changed to manage internationalization, modal added to choose the country on the frontend, adaptation of the database in backend and MySQL queries to update existing data with country prefixes.",
        "Documentation on Notion",
      ],
    },
    {
      tabName: "Dauphine Junior Consulting",
      jobTitle: "Fullstack Laravel Mission",
      companyName: "Dauphine Junior Consulting",
      companyLink: "https://dauphine-junior-consulting.com/paris/",
      timeframe: "April 2021",
      content: [
        "Project code update: from Laravel 5.8 to Laravel 8",
        "Forms changed, addition of fields to upload files",
        "Generation of .docx, .xlsx and .pdf documents filled automatically with PhpSpreadsheet",
        "Document preview added",
        "Role management with Laravel Policies, access rights modified",
        "Creation of a documentation on the server data storage",
      ],
    },
    {
      tabName: "Pongo Internship",
      jobTitle: "Laravel backend internship",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "May 2020 - October 2020",
      content: [
        "Code refactoring of Pongo APIs",
        "Implementation of clean code principles",
        "Separation of code into domains",
        "Modification of the database structure",
        "Writing API documentation with Swagger first, then with Postman",
        "Writing Postman test scripts",
      ],
    },
  ],

  // WORKPAGE TEXTS
  workPageTitle: "Some Things I've Built",
  workPageWip: "WIP: work page will be done soon.",

  // CONTACTPAGE TEXTS
  contactPageTitle: "Get in touch",
  contactPageParagraph1:
    "I a currently open to work, you have a project in mind or just want to say hi ?",
  contactPageParagraph2: "Feel free to send me a message !",

  // FOOTER TEXTS
  footerDisclaimerText:
    "Disclaimer: I did not create the design of this website.",
  footerInspiredByText: "It was inspired by",
  footerBrittanyChiangPortfolioText: "Brittany Chiang portfolio",
  footerPleaseCheckHerOutText:
    "If you liked this design, please check out her work.",

  // CHAT SECTION
  hiMessage:
    "Hi there !\nFeel free to leave me a message and don't forget to leave your contact informations so I can get back to you :)",
};

export default TRANSLATIONS_EN;
