const TRANSLATIONS_FR = {
  // NAVBAR TEXTS
  about: "À propos",
  experience: "Expérience",
  work: "Projets",
  contact: "Contact",
  resume: "CV",

  // HOMEPAGE TEXTS
  homePagePreTitle: "Salut, moi c'est",
  homePageFullName: "Myriam Anki",
  homePageWhoami: "Je suis étudiante à 42Paris",
  homePageSmallIntro:
    "J'étais dev fullstack web Laravel Angular Ionic, maintenant j'explore de nouveaux horizons.",

  // ABOUTPAGE TEXTS
  aboutPageTitle: "À propos de moi",
  aboutPageParagraphs: [
    "Salut ! Moi c'est Myriam, je suis un esprit passionné avec une forte envie d'apprendre. J'aspire à contribuer à la création d'excellents outils qui aideront à améliorer la vie de ceux qui m'entourent.",
    "Après presque deux ans d'expérience en tant que développeuse web Fullstack, j'ai décidé de retourner à l'école pour en apprendre d'avantage sur les autres domaines de l'informatique.",
    "Actuellement, je réalise des projets à 42Paris pour en apprendre plus sur la sécurité, la data, l'algorithmique, le machine learning... Je suis à la recherche d'un stage de 6 mois pour Février 2023.",
  ],
  aboutPageTechnoListIntro:
    "Voici quelques technologies avec lesquelles j'ai travaillé :",
  aboutPageTechnoList: [
    "Laravel (PHP)",
    "Angular Ionic (Typescript)",
    "React (Javascript)",
    "Python3",
    "C",
    "SQL",
  ],

  // EXPERIENCEPAGE TEXTS
  experiencePageTitle: "Où j'ai travaillé",
  experiencePageJobs: [
    {
      tabName: "Audika Group",
      jobTitle: "Mission Freelance - Développements divers sur ERP en PHP",
      companyName: "Audika Group",
      companyLink: "https://www.audika.fr/",
      timeframe: "Janvier 2022 -  Mars 2022",
      content: [
        "Écriture et modification de requêtes SQL",
        "Création de nouvelles fonctionnalités sur l'ERP (en PHP)",
        "Débogue",
      ],
    },
    {
      tabName: "Pongo",
      jobTitle: "Développeuse fullstack Laravel Angular Ionic",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "Novembre 2020 -  Juin 2021",
      content: [
        "Débogue général de l'application tablette, ajouts de pages et d'options",
        "Gestion de la perte de paquets sur des connexions wifi instable",
        "Mise en place de plusieurs automatisations avec Ionic Appflow : génération de builds natif (APK, AAB & IPA) synchronisé avec GitHub, prévisualisation web, live upate (mise à jour des tablettes sans passer par les stores), publication de l'app sur les stores Android et Apple.",
        "Autologin : mise en place de la récupération des données de la tablette à travers son UDID, login du user, sélection du restaurant et connexion aux différents websockets",
        "Mise en place de différents canaux PUSHER (websockets) : mise à jour du local storage (couleur, textes, média...), intégration caisse (récupérer ses points après un encaissement)",
        "Numéraux internationaux : modification du clavier pour gérer l'internationalisation, ajout d'un modal choix du pays côté front, adaptation de la BDD en back et requêtes MySQL pour mettre à jour les data existantes avec les préfixes des pays.",
        "Documentation sur Notion",
      ],
    },
    {
      tabName: "Dauphine Junior Consulting",
      jobTitle: "Mission Fullstack Laravel",
      companyName: "Dauphine Junior Consulting",
      companyLink: "https://dauphine-junior-consulting.com/paris/",
      timeframe: "Avril 2021",
      content: [
        "Mise à jour du projet de Laravel 5.8 à Laravel 8",
        "Modification des formulaires, ajout de champs pour uploader des fichiers",
        "Génération de documents .docx, .xlsx et .pdf remplis automatiquement avec PhpSpreadsheet",
        "Ajout de prévisualisation des documents",
        "Gestion des rôles avec les Policies de Laravel, modification des droits d'accès",
        "Création d'une documentation sur le stockage des données sur le serveur",
      ],
    },
    {
      tabName: "Stage chez Pongo",
      jobTitle: "Stage Backend Laravel",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "Mai 2020 - Octobre 2020",
      content: [
        "Refactorisation du code des APIs de Pongo",
        "Mise en place des principes de clean code",
        "Séparation du code en domaines",
        "Modification de la structure de la base de données",
        "Écriture d'une documentation des APIs avec Swagger, puis avec Postman",
        "Écriture de scripts de tests Postman",
      ],
    },
  ],

  // WORKPAGE TEXTS
  workPageTitle: "Quelques uns de mes projets",
  workPageWip: "En cours d'édition: la page projet sera bientôt finie :)",

  // CONTACTPAGE TEXTS
  contactPageTitle: "Contact",
  contactPageParagraph1:
    "Je suis actuellement ouverte aux propositions, vous avez un projet en tête ou vous voulez juste me saluer ?",
  contactPageParagraph2: "N'hésitez pas à m'envoyer un message !",

  // FOOTER TEXTS
  footerDisclaimerText: "Disclaimer: Je n'ai pas imaginé le design de ce site.",
  footerInspiredByText: "Il a été inspiré par le",
  footerBrittanyChiangPortfolioText: "portfolio de Brittany Chiang",
  footerPleaseCheckHerOutText:
    "Si vous avez aimé ce design, n'hésitez pas à aller voir son travail.",

  // CHAT SECTION
  hiMessage:
    "Salutations !\nN'hésitez pas à me laisser un message et n'oubliez pas de laisser vos coordonnées pour que je puisse vous recontacter :)",
};

export default TRANSLATIONS_FR;
