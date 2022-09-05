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
    "I am currently doing projects at 42Paris to learn more about security, data, algorithm, machine learning... I am looking for a 6-months internship ideally starting February 2023.",
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
        "Wrote SQL requests to filter patients for Audika operators to stop loosing time",
        "Created new features in the ERP (in PHP). Ex: Agenda, data export",
        "Debugged the ERP",
      ],
    },
    {
      tabName: "Pongo",
      jobTitle: "Laravel Angular Ionic fullstack developper",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "November 2020 -  June 2021",
      content: [
        "Debugged the tablet app and implemented of new features",
        "Fixed package loss problem with unstable wifi connections",
        "Implemented several automation with Ionic Appflow: native builds generation (APK, AAB & IPA) sync with GitHub, web preview, live udpate (update of tablets without going through the app store validation), app publication on the Android and Apple stores.",
        "Created autologin after major store update: I implemented tablet data recovery through its UDID, user login, restaurant selection and connection to different websockets. It allowed to updates around 400 tablets migrating from one app to another without the necessity of human intervention. Saving a lot of time for our CSM.",
        "Implemented PUSHER channels (websockets): local storage update (color, texts, media ...), pos integration (recover your points after a payment). It avoided latencies and unusable slow tablets.",
        "Created international numbers feature: keyboard changed to manage internationalization, modal added to choose the country on the frontend, adaptation of the database in backend and MySQL queries to update existing data with country prefixes.",
        "Wrote documentation and tutorials on Notion on every things I worked on.",
      ],
    },
    {
      tabName: "Dauphine Junior Consulting",
      jobTitle: "Fullstack Laravel Mission",
      companyName: "Dauphine Junior Consulting",
      companyLink: "https://dauphine-junior-consulting.com/paris/",
      timeframe: "April 2021",
      content: [
        "Updated project code: from Laravel 5.8 to Laravel 8",
        "Changed forms: addition of fields to upload files",
        "Created automatic filled generation of .docx, .xlsx and .pdf with PhpSpreadsheet",
        "Added document preview, to avoid having to download a document to see its content.",
        "Changed role management with Laravel Policies, access rights modified",
        "Wrote a documentation on the server data storage, for the next freelance developer.",
      ],
    },
    {
      tabName: "Pongo Internship",
      jobTitle: "Laravel backend internship",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "May 2020 - October 2020",
      content: [
        "Rewrite backend code for refactorization of Pongo APIs",
        "Implemented principles of clean code",
        "Separated code into domains",
        "Changed the database structure",
        "Wrote API documentation with Swagger first, then with Postman",
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
