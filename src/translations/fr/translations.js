const TRANSLATIONS_FR = {
  // NAVBAR TEXTS
  about: "À propos",
  experience: "Expérience",
  work: "Projets",
  contact: "Contact",
  resume: "CV",

  // HOMEPAGE TEXTS
  homePagePreTitle: "Coucou, moi c'est",
  homePageFullName: "Myriam Anki",
  homePageWhoami: "Je suis developpeuse freelance",
  homePageSmallIntro:
    "Je suis dev fullstack profilé backend sur Laravel. Côté front, je code sur React en ce moment.",

  // ABOUTPAGE TEXTS
  aboutPageTitle: "À propos de moi",
  aboutPageParagraphs: [
    "Coucou ! Moi c'est Myriam, je suis un esprit passioné qui aspire à contribuer à la création d'excellents outils qui améliorent la vie de ceux qui m'entourent.",
    "Étudiante à 42, j'ai travaillé un an en tant que developpeuse fullstack chez Pongo ... ",
  ],
  aboutPageTechnoListIntro:
    "Voici quelques technologies avec lesquelles j'ai travaillé récemment :",
  aboutPageTechnoList: [
    "Laravel (PHP)",
    "Angular Ionic (Typescript)",
    "React (Javascript)",
  ],

  // EXPERIENCEPAGE TEXTS
  experiencePageTitle: "Où j'ai travaillé",
  experiencePageJobs: [
    {
      tabName: "Pongo",
      jobTitle: "Développeuse fullstack Laravel Angular Ionic",
      companyName: "Pongo",
      companyLink: "https://www.heypongo.com/",
      timeframe: "Novembre 2020 -  Août 2021",
      content: [
        "Debogue général de l'application tablette, ajouts de pages et d'options",
        "Gestion de la perte de paquets sur des connexions wifi instables",
        "Mise en place de plusieurs automatisations avec Ionic Appflow : génération de builds natif (APK, AAB & IPA) synchronisé avec GitHub, prévisualisation web, live upate (mise à jour des tablettes sans passer par les stores), publication de l'app sur les stores Android et Apple.",
        "Autologin : mise en place de la récupération des données de la tablette à travers son UDID, login du user, sélection du restaurant et connexion aux différents websockets",
        "Mise en place de différents cannaux PUSHER (websockets) : mise à jour du local storage (couleur, texts, media...), intégration caisse (récupérer ses points après un encaissement)",
        "Numéraux internationaux : modification du clavier pour gérer l'internationnalisation, ajout d'une modale choix du pays côté front, adaptation de la BDD en back et requêtes MySQL pour mettre à jours les data existantes avec les préfix des pays.",
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
        "Génération de document .docx, .xlsx et .pdf remplis automatiquement avec PhpSpreadsheet",
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
